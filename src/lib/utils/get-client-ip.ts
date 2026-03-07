import { NextRequest } from 'next/server'

/**
 * Extract client IP from request headers.
 * Takes the last entry from X-Forwarded-For (closest to reverse proxy)
 * rather than the first (easily spoofed by clients).
 */
export function getClientIp(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) {
    const ips = xff.split(',').map((ip) => ip.trim())
    // Last entry is the one added by the trusted reverse proxy
    return ips[ips.length - 1] || 'unknown'
  }
  return request.headers.get('x-real-ip') || 'unknown'
}
