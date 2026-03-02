import { describe, it, expect } from 'vitest'
import { deriveStatus, calculateNextInterval, processReview } from '@/lib/utils/srs-lite'

describe('deriveStatus', () => {
  it('returns "new" for 0 repetitions', () => {
    expect(deriveStatus(0)).toBe('new')
  })

  it('returns "learning" for 1-2 repetitions', () => {
    expect(deriveStatus(1)).toBe('learning')
    expect(deriveStatus(2)).toBe('learning')
  })

  it('returns "reviewing" for 3-4 repetitions', () => {
    expect(deriveStatus(3)).toBe('reviewing')
    expect(deriveStatus(4)).toBe('reviewing')
  })

  it('returns "mastered" for 5+ repetitions', () => {
    expect(deriveStatus(5)).toBe('mastered')
    expect(deriveStatus(10)).toBe('mastered')
  })
})

describe('calculateNextInterval', () => {
  it('follows the fixed interval ladder', () => {
    expect(calculateNextInterval(0)).toBe(0)
    expect(calculateNextInterval(1)).toBe(1)
    expect(calculateNextInterval(2)).toBe(3)
    expect(calculateNextInterval(3)).toBe(7)
    expect(calculateNextInterval(4)).toBe(14)
    expect(calculateNextInterval(5)).toBe(30)
  })

  it('caps at 30 days for repetitions beyond the ladder', () => {
    expect(calculateNextInterval(6)).toBe(30)
    expect(calculateNextInterval(100)).toBe(30)
  })

  it('returns 0 for negative repetitions', () => {
    expect(calculateNextInterval(-1)).toBe(0)
  })
})

describe('processReview', () => {
  it('increments repetitions on correct answer', () => {
    const result = processReview(0, true)
    expect(result.repetitions).toBe(1)
    expect(result.status).toBe('learning')
  })

  it('decrements repetitions on incorrect answer', () => {
    const result = processReview(3, false)
    expect(result.repetitions).toBe(2)
    expect(result.status).toBe('learning')
  })

  it('does not go below 0 repetitions on incorrect answer', () => {
    const result = processReview(0, false)
    expect(result.repetitions).toBe(0)
    expect(result.status).toBe('new')
  })

  it('sets interval based on new repetition count', () => {
    const result = processReview(2, true)
    expect(result.repetitions).toBe(3)
    expect(result.interval).toBe(7)
  })

  it('sets nextReviewAt in the future', () => {
    const before = Date.now()
    const result = processReview(1, true)
    const after = Date.now()

    const nextReviewTime = result.nextReviewAt.getTime()
    // interval is 3 days for repetition 2
    const expectedMinMs = before + 3 * 24 * 60 * 60 * 1000
    const expectedMaxMs = after + 3 * 24 * 60 * 60 * 1000

    expect(nextReviewTime).toBeGreaterThanOrEqual(expectedMinMs)
    expect(nextReviewTime).toBeLessThanOrEqual(expectedMaxMs)
  })

  it('transitions from new to mastered through correct answers', () => {
    let reps = 0
    expect(deriveStatus(reps)).toBe('new')

    for (let i = 0; i < 5; i++) {
      const result = processReview(reps, true)
      reps = result.repetitions
    }

    expect(reps).toBe(5)
    expect(deriveStatus(reps)).toBe('mastered')
  })

  it('regresses status on incorrect answers', () => {
    const result = processReview(5, false)
    expect(result.repetitions).toBe(4)
    expect(result.status).toBe('reviewing')
  })
})
