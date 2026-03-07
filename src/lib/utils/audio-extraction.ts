import { execFile } from 'child_process'
import { promisify } from 'util'
import { unlink, readdir, stat } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

const execFileAsync = promisify(execFile)

// Whitelisted domains for security
const ALLOWED_DOMAINS = ['digitaloceanspaces.com']

// Allow localhost only in non-production
if (process.env.NODE_ENV !== 'production') {
  ALLOWED_DOMAINS.push('localhost', '127.0.0.1')
}

// Private IP ranges that should never be accessed
const PRIVATE_IP_PATTERNS = [
  /^127\./, // loopback
  /^10\./, // class A private
  /^172\.(1[6-9]|2\d|3[01])\./, // class B private
  /^192\.168\./, // class C private
  /^0\./, // current network
  /^169\.254\./, // link-local
]

// Rate limiting (simple in-memory counter)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW_MS = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10

export interface ExtractAudioParams {
  videoUrl: string
  startTime: number
  duration: number
  userIdentifier?: string // IP address or user ID for rate limiting
}

export interface ExtractAudioResult {
  audioUrl: string
  filename: string
}

export class AudioExtractionError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public details?: string
  ) {
    super(message)
    this.name = 'AudioExtractionError'
  }
}

/**
 * Check if a hostname resolves to a private/internal IP range
 */
function isPrivateHostname(hostname: string): boolean {
  // Check direct IP addresses
  if (PRIVATE_IP_PATTERNS.some((pattern) => pattern.test(hostname))) {
    return true
  }
  // Block IPv6 loopback
  if (hostname === '::1' || hostname === '[::1]') {
    return true
  }
  // Block 0.0.0.0
  if (hostname === '0.0.0.0') {
    return true
  }
  return false
}

/**
 * Validates the input parameters for audio extraction
 */
function validateParams(params: ExtractAudioParams): void {
  const { videoUrl, startTime, duration } = params

  // Validate videoUrl is HTTPS (or HTTP for localhost in dev)
  if (
    !videoUrl.startsWith('https://') &&
    !videoUrl.startsWith('http://localhost') &&
    !videoUrl.startsWith('http://127.0.0.1')
  ) {
    throw new AudioExtractionError(
      'Video URL must use HTTPS protocol (or HTTP for localhost)',
      400
    )
  }

  // Validate domain whitelist with exact/suffix matching
  const url = new URL(videoUrl)
  const hostname = url.hostname
  const isAllowed = ALLOWED_DOMAINS.some(
    (domain) => hostname === domain || hostname.endsWith('.' + domain)
  )

  if (!isAllowed) {
    throw new AudioExtractionError(
      `Domain not whitelisted. Allowed domains: ${ALLOWED_DOMAINS.join(', ')}`,
      400
    )
  }

  // Block private IP ranges (SSRF protection)
  if (isPrivateHostname(hostname)) {
    throw new AudioExtractionError('Access to private/internal addresses is not allowed', 400)
  }

  // Validate startTime
  if (startTime < 0 || !Number.isFinite(startTime)) {
    throw new AudioExtractionError('Start time must be a non-negative number', 400)
  }

  // Validate duration (1-10 seconds)
  if (duration < 1 || duration > 10 || !Number.isFinite(duration)) {
    throw new AudioExtractionError('Duration must be between 1 and 10 seconds', 400)
  }
}

/**
 * Check rate limit for a user/IP
 */
export function checkRateLimit(userIdentifier: string): void {
  const now = Date.now()
  const userLimit = rateLimitMap.get(userIdentifier)

  if (!userLimit || now > userLimit.resetTime) {
    // Create new window
    rateLimitMap.set(userIdentifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    })
    return
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
    throw new AudioExtractionError('Rate limit exceeded. Maximum 10 requests per minute.', 429)
  }

  userLimit.count++
}

/**
 * Clean up audio clips older than 7 days
 */
export async function cleanupOldClips(audioClipsDir: string): Promise<void> {
  try {
    const files = await readdir(audioClipsDir)
    const now = Date.now()
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000

    for (const file of files) {
      if (!file.endsWith('.mp3')) continue

      const filePath = join(audioClipsDir, file)
      const stats = await stat(filePath)
      const fileAge = now - stats.mtimeMs

      if (fileAge > sevenDaysMs) {
        await unlink(filePath)
        console.log(`Cleaned up old audio clip: ${file}`)
      }
    }
  } catch (error) {
    console.error(
      'Error during cleanup:',
      error instanceof Error ? error.message : 'Unknown error'
    )
  }
}

/**
 * Extract audio segment from video using ffmpeg
 */
export async function extractAudio(
  params: ExtractAudioParams,
  outputDir: string
): Promise<ExtractAudioResult> {
  // Validate inputs
  validateParams(params)

  // Check rate limit
  if (params.userIdentifier) {
    checkRateLimit(params.userIdentifier)
  }

  const { videoUrl, startTime, duration } = params

  // Generate filename: [timestamp]-[uuid].mp3
  const timestamp = Date.now()
  const uuid = randomUUID()
  const filename = `${timestamp}-${uuid}.mp3`
  const outputPath = join(outputDir, filename)

  try {
    // Execute ffmpeg with execFile (no shell — immune to command injection)
    await execFileAsync(
      'ffmpeg',
      [
        '-ss',
        startTime.toString(),
        '-i',
        videoUrl,
        '-t',
        duration.toString(),
        '-q:a',
        '0',
        '-vn',
        '-y',
        outputPath,
      ],
      { timeout: 30000 }
    )

    // Verify file was created
    try {
      await stat(outputPath)
    } catch {
      throw new AudioExtractionError(
        'Audio file was not created successfully',
        500,
        'File verification failed'
      )
    }

    // Return public URL path
    const audioUrl = `/audio-clips/${filename}`

    return {
      audioUrl,
      filename,
    }
  } catch (error: unknown) {
    // Clean up any partial file
    try {
      await unlink(outputPath)
    } catch {
      // Ignore cleanup errors
    }

    // Re-throw our custom errors
    if (error instanceof AudioExtractionError) {
      throw error
    }

    const execError = error as { killed?: boolean; signal?: string; code?: string; stderr?: string }

    // Handle different error types
    if (execError.killed || execError.signal === 'SIGTERM') {
      throw new AudioExtractionError(
        'Audio extraction timed out',
        500,
        'FFmpeg process exceeded 30 second timeout'
      )
    }

    if (execError.code === 'ENOENT') {
      throw new AudioExtractionError(
        'FFmpeg not found. Please ensure ffmpeg is installed.',
        500,
        'FFmpeg executable not in PATH'
      )
    }

    // Network or invalid URL errors
    if (
      execError.stderr?.includes('HTTP error') ||
      execError.stderr?.includes('Invalid data')
    ) {
      throw new AudioExtractionError(
        'Failed to download video from URL',
        400,
        'Video URL may be invalid or inaccessible'
      )
    }

    // Generic ffmpeg error
    throw new AudioExtractionError(
      'Failed to extract audio',
      500,
      error instanceof Error ? error.message : 'Unknown ffmpeg error'
    )
  }
}
