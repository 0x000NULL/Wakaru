interface RateLimitEntry {
  count: number
  resetAt: number
}

const globalForRateLimit = globalThis as unknown as {
  rateLimitMap: Map<string, RateLimitEntry> | undefined
}

const rateLimitMap = globalForRateLimit.rateLimitMap ?? new Map<string, RateLimitEntry>()

if (process.env.NODE_ENV !== 'production') {
  globalForRateLimit.rateLimitMap = rateLimitMap
}

let callCount = 0

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { success: boolean; remaining: number } {
  const now = Date.now()

  // Periodically clean up stale entries to prevent memory growth
  callCount++
  if (callCount >= 100) {
    callCount = 0
    for (const [k, v] of rateLimitMap) {
      if (now > v.resetAt) {
        rateLimitMap.delete(k)
      }
    }
  }

  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 }
  }

  entry.count++
  return { success: true, remaining: limit - entry.count }
}
