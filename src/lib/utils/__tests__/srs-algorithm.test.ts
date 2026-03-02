import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  calculateEaseFactor,
  deriveStatus,
  calculateNextReview,
  getNextReviewDate,
  createNewCard,
} from '@/lib/utils/srs-algorithm'
import type { SRSCard } from '@/types/progress'

describe('calculateEaseFactor', () => {
  it('decreases EF significantly for "again" (q=0)', () => {
    expect(calculateEaseFactor(2.5, 0)).toBe(1.7)
  })

  it('decreases EF moderately for "hard" (q=2)', () => {
    expect(calculateEaseFactor(2.5, 2)).toBe(2.18)
  })

  it('keeps EF unchanged for "good" (q=4)', () => {
    expect(calculateEaseFactor(2.5, 4)).toBe(2.5)
  })

  it('increases EF for "easy" (q=5)', () => {
    expect(calculateEaseFactor(2.5, 5)).toBe(2.6)
  })

  it('clamps to minimum 1.3', () => {
    // Starting at 1.3 with again (q=1) would go below 1.3
    expect(calculateEaseFactor(1.3, 1)).toBe(1.3)
  })

  it('rounds to 2 decimal places', () => {
    const result = calculateEaseFactor(2.36, 3)
    const decimalPlaces = result.toString().split('.')[1]?.length ?? 0
    expect(decimalPlaces).toBeLessThanOrEqual(2)
  })

  it('handles repeated "again" at minimum', () => {
    let ef = 2.5
    for (let i = 0; i < 10; i++) {
      ef = calculateEaseFactor(ef, 1)
    }
    expect(ef).toBe(1.3)
  })
})

describe('deriveStatus', () => {
  it('returns "new" when repetitions is 0', () => {
    expect(deriveStatus(0, 0)).toBe('new')
  })

  it('returns "new" when repetitions is 0 regardless of interval', () => {
    expect(deriveStatus(0, 100)).toBe('new')
  })

  it('returns "learning" when interval < 7', () => {
    expect(deriveStatus(1, 1)).toBe('learning')
    expect(deriveStatus(2, 6)).toBe('learning')
  })

  it('returns "reviewing" when interval >= 7 and < 30', () => {
    expect(deriveStatus(3, 7)).toBe('reviewing')
    expect(deriveStatus(4, 29)).toBe('reviewing')
  })

  it('returns "mastered" when interval >= 30', () => {
    expect(deriveStatus(5, 30)).toBe('mastered')
    expect(deriveStatus(10, 365)).toBe('mastered')
  })
})

describe('calculateNextReview — again', () => {
  const card: SRSCard = { repetitions: 5, easeFactor: 2.5, interval: 30 }

  it('resets repetitions to 0', () => {
    const result = calculateNextReview(card, 'again')
    expect(result.repetitions).toBe(0)
  })

  it('sets interval to 1 day', () => {
    const result = calculateNextReview(card, 'again')
    expect(result.interval).toBe(1)
  })

  it('decreases ease factor', () => {
    const result = calculateNextReview(card, 'again')
    expect(result.easeFactor).toBe(1.7) // q=0: delta -0.80
  })

  it('does not drop EF below 1.3', () => {
    const hardCard: SRSCard = { repetitions: 3, easeFactor: 1.3, interval: 7 }
    const result = calculateNextReview(hardCard, 'again')
    expect(result.easeFactor).toBe(1.3)
  })

  it('sets status to "new" after reset', () => {
    const result = calculateNextReview(card, 'again')
    expect(result.status).toBe('new')
  })
})

describe('calculateNextReview — hard', () => {
  it('resets repetitions to 0', () => {
    const card: SRSCard = { repetitions: 4, easeFactor: 2.5, interval: 14 }
    const result = calculateNextReview(card, 'hard')
    expect(result.repetitions).toBe(0)
  })

  it('halves the current interval', () => {
    const card: SRSCard = { repetitions: 4, easeFactor: 2.5, interval: 14 }
    const result = calculateNextReview(card, 'hard')
    expect(result.interval).toBe(7)
  })

  it('rounds halved interval', () => {
    const card: SRSCard = { repetitions: 3, easeFactor: 2.5, interval: 7 }
    const result = calculateNextReview(card, 'hard')
    expect(result.interval).toBe(4) // round(7 * 0.5) = round(3.5) = 4
  })

  it('ensures minimum interval of 1', () => {
    const card: SRSCard = { repetitions: 1, easeFactor: 2.5, interval: 1 }
    const result = calculateNextReview(card, 'hard')
    expect(result.interval).toBe(1) // max(1, round(1 * 0.5)) = max(1, 1) = 1
  })

  it('decreases ease factor', () => {
    const card: SRSCard = { repetitions: 3, easeFactor: 2.5, interval: 7 }
    const result = calculateNextReview(card, 'hard')
    expect(result.easeFactor).toBe(2.18)
  })
})

describe('calculateNextReview — good', () => {
  it('follows SM-2 progression: 1d → 6d → 15d → 38d → 95d', () => {
    let card = createNewCard()

    // First review: interval = 1
    let result = calculateNextReview(card, 'good')
    expect(result.interval).toBe(1)
    expect(result.repetitions).toBe(1)

    // Second review: interval = 6
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.interval).toBe(6)
    expect(result.repetitions).toBe(2)

    // Third review: interval = round(6 * 2.5) = 15
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.interval).toBe(15)
    expect(result.repetitions).toBe(3)

    // Fourth review: interval = round(15 * 2.5) = 38
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.interval).toBe(38)
    expect(result.repetitions).toBe(4)

    // Fifth review: interval = round(38 * 2.5) = 95
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.interval).toBe(95)
    expect(result.repetitions).toBe(5)
  })

  it('keeps ease factor stable at 2.5', () => {
    const card: SRSCard = { repetitions: 3, easeFactor: 2.5, interval: 15 }
    const result = calculateNextReview(card, 'good')
    expect(result.easeFactor).toBe(2.5)
  })

  it('increments repetitions', () => {
    const card: SRSCard = { repetitions: 2, easeFactor: 2.5, interval: 6 }
    const result = calculateNextReview(card, 'good')
    expect(result.repetitions).toBe(3)
  })
})

describe('calculateNextReview — easy', () => {
  it('applies 1.3x bonus to interval', () => {
    const card: SRSCard = { repetitions: 3, easeFactor: 2.5, interval: 15 }
    const result = calculateNextReview(card, 'easy')
    // round(15 * 2.6) = round(39) = 39, then round(39 * 1.3) = round(50.7) = 51
    expect(result.interval).toBe(51)
  })

  it('increases ease factor', () => {
    const card: SRSCard = { repetitions: 3, easeFactor: 2.5, interval: 15 }
    const result = calculateNextReview(card, 'easy')
    expect(result.easeFactor).toBe(2.6)
  })

  it('applies bonus to first review', () => {
    const card = createNewCard()
    const result = calculateNextReview(card, 'easy')
    // interval = 1, then round(1 * 1.3) = 1
    expect(result.interval).toBe(1)
  })

  it('applies bonus to second review', () => {
    const card: SRSCard = { repetitions: 1, easeFactor: 2.6, interval: 1 }
    const result = calculateNextReview(card, 'easy')
    // interval = 6, then round(6 * 1.3) = round(7.8) = 8
    expect(result.interval).toBe(8)
  })
})

describe('calculateNextReview — interval cap', () => {
  it('caps interval at 365 days', () => {
    const card: SRSCard = { repetitions: 10, easeFactor: 2.5, interval: 200 }
    const result = calculateNextReview(card, 'good')
    // round(200 * 2.5) = 500, capped to 365
    expect(result.interval).toBe(365)
  })

  it('caps easy bonus result at 365', () => {
    const card: SRSCard = { repetitions: 10, easeFactor: 2.5, interval: 150 }
    const result = calculateNextReview(card, 'easy')
    // round(150 * 2.68) = 402, round(402 * 1.3) = 523, capped to 365
    expect(result.interval).toBe(365)
  })
})

describe('getNextReviewDate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns a future date', () => {
    vi.setSystemTime(new Date('2026-03-02T12:00:00'))
    const result = getNextReviewDate(1)
    expect(result.getTime()).toBeGreaterThan(Date.now())
  })

  it('normalizes to 4:00 AM', () => {
    vi.setSystemTime(new Date('2026-03-02T12:00:00'))
    const result = getNextReviewDate(3)
    expect(result.getHours()).toBe(4)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
  })

  it('advances to next day if normalized time is in the past', () => {
    // At 10 AM, interval 0 would normalize to 4 AM today (past), so advance
    vi.setSystemTime(new Date('2026-03-02T10:00:00'))
    const result = getNextReviewDate(0)
    expect(result.getDate()).toBe(3) // Next day
    expect(result.getHours()).toBe(4)
  })

  it('returns same day 4 AM for interval 0 when before 4 AM', () => {
    vi.setSystemTime(new Date('2026-03-02T02:00:00'))
    const result = getNextReviewDate(0)
    expect(result.getDate()).toBe(2) // Same day
    expect(result.getHours()).toBe(4)
  })

  it('adds interval days correctly', () => {
    vi.setSystemTime(new Date('2026-03-02T02:00:00'))
    const result = getNextReviewDate(7)
    expect(result.getDate()).toBe(9)
    expect(result.getMonth()).toBe(2) // March (0-indexed)
  })
})

describe('createNewCard', () => {
  it('returns default SM-2 values', () => {
    const card = createNewCard()
    expect(card.repetitions).toBe(0)
    expect(card.easeFactor).toBe(2.5)
    expect(card.interval).toBe(0)
  })
})

describe('lifecycle scenarios', () => {
  it('recovers from a lapse', () => {
    // Build up to mastered
    let card: SRSCard = { repetitions: 5, easeFactor: 2.5, interval: 30 }

    // Lapse: answer "again"
    let result = calculateNextReview(card, 'again')
    expect(result.repetitions).toBe(0)
    expect(result.interval).toBe(1)
    expect(result.status).toBe('new')
    expect(result.easeFactor).toBe(1.7)

    // Recovery: answer "good" repeatedly
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.repetitions).toBe(1)
    expect(result.interval).toBe(1)
    expect(result.status).toBe('learning')

    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.repetitions).toBe(2)
    expect(result.interval).toBe(6)
    expect(result.status).toBe('learning')

    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'good')
    expect(result.repetitions).toBe(3)
    // With EF 1.7: round(6 * 1.7) = round(10.2) = 10
    expect(result.interval).toBe(10)
    expect(result.status).toBe('reviewing')
  })

  it('degrades with repeated "hard" answers', () => {
    let card: SRSCard = { repetitions: 5, easeFactor: 2.5, interval: 30 }

    // First hard
    let result = calculateNextReview(card, 'hard')
    expect(result.easeFactor).toBe(2.18)
    expect(result.interval).toBe(15) // round(30 * 0.5)

    // Second hard
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'hard')
    expect(result.easeFactor).toBe(1.86)
    expect(result.interval).toBe(8) // round(15 * 0.5)

    // Third hard
    card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    result = calculateNextReview(card, 'hard')
    expect(result.easeFactor).toBe(1.54)
    expect(result.interval).toBe(4) // round(8 * 0.5)

    // All hard answers reset reps to 0
    expect(result.repetitions).toBe(0)
  })

  it('progresses from new to mastered with all "good"', () => {
    let card = createNewCard()

    const intervals: number[] = []
    for (let i = 0; i < 6; i++) {
      const result = calculateNextReview(card, 'good')
      intervals.push(result.interval)
      card = { repetitions: result.repetitions, easeFactor: result.easeFactor, interval: result.interval }
    }

    // EF stays at 2.5 with "good"
    expect(card.easeFactor).toBe(2.5)
    // Intervals should be increasing
    expect(intervals).toEqual([1, 6, 15, 38, 95, 238])
    // After 6 good reviews with interval 238, status is mastered
    expect(deriveStatus(card.repetitions, card.interval)).toBe('mastered')
  })
})
