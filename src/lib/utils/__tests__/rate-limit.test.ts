import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { rateLimit } from '@/lib/utils/rate-limit'

describe('rate limiter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('allows requests within the limit', () => {
    const key = 'test-allow-' + Date.now()
    const result1 = rateLimit(key, 3, 60000)
    const result2 = rateLimit(key, 3, 60000)
    const result3 = rateLimit(key, 3, 60000)

    expect(result1.success).toBe(true)
    expect(result2.success).toBe(true)
    expect(result3.success).toBe(true)
  })

  it('blocks requests over the limit', () => {
    const key = 'test-block-' + Date.now()
    rateLimit(key, 2, 60000)
    rateLimit(key, 2, 60000)
    const result = rateLimit(key, 2, 60000)

    expect(result.success).toBe(false)
    expect(result.remaining).toBe(0)
  })

  it('tracks remaining count correctly', () => {
    const key = 'test-remaining-' + Date.now()
    const result1 = rateLimit(key, 3, 60000)
    const result2 = rateLimit(key, 3, 60000)

    expect(result1.remaining).toBe(2)
    expect(result2.remaining).toBe(1)
  })

  it('resets after window expires', () => {
    const key = 'test-reset-' + Date.now()
    rateLimit(key, 1, 1000)
    const blocked = rateLimit(key, 1, 1000)
    expect(blocked.success).toBe(false)

    vi.advanceTimersByTime(1001)

    const afterReset = rateLimit(key, 1, 1000)
    expect(afterReset.success).toBe(true)
  })
})
