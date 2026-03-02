import type { ProgressStatus, Rating, SRSCard, SrsReviewResult } from '@/types/progress'

const QUALITY_MAP: Record<Rating, number> = {
  again: 0,
  hard: 2,
  good: 4,
  easy: 5,
}

const MIN_EASE_FACTOR = 1.3
const DEFAULT_EASE_FACTOR = 2.5
const DAY_RESET_HOUR = 4
const EASY_BONUS = 1.3
const MAX_INTERVAL = 365

/**
 * SM-2 ease factor formula.
 * EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
 * Clamped to minimum 1.3, rounded to 2 decimal places.
 */
export function calculateEaseFactor(currentEF: number, quality: number): number {
  const ef = currentEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  return Math.round(Math.max(MIN_EASE_FACTOR, ef) * 100) / 100
}

/**
 * Derive progress status from repetitions and interval.
 * Uses interval thresholds for more accurate status than reps alone.
 */
export function deriveStatus(repetitions: number, interval: number): ProgressStatus {
  if (repetitions === 0) return 'new'
  if (interval < 7) return 'learning'
  if (interval < 30) return 'reviewing'
  return 'mastered'
}

/**
 * Core SM-2 review calculation.
 * Takes current card state and a rating, returns the updated state.
 */
export function calculateNextReview(card: SRSCard, rating: Rating): SrsReviewResult {
  const quality = QUALITY_MAP[rating]
  const newEF = calculateEaseFactor(card.easeFactor, quality)

  let newRepetitions: number
  let newInterval: number

  switch (rating) {
    case 'again':
      newRepetitions = 0
      newInterval = 1
      break

    case 'hard':
      newRepetitions = 0
      newInterval = Math.max(1, Math.round(card.interval * 0.5))
      break

    case 'good':
      newRepetitions = card.repetitions + 1
      if (card.repetitions === 0) {
        newInterval = 1
      } else if (card.repetitions === 1) {
        newInterval = 6
      } else {
        newInterval = Math.round(card.interval * newEF)
      }
      break

    case 'easy':
      newRepetitions = card.repetitions + 1
      if (card.repetitions === 0) {
        newInterval = 1
      } else if (card.repetitions === 1) {
        newInterval = 6
      } else {
        newInterval = Math.round(card.interval * newEF)
      }
      newInterval = Math.round(newInterval * EASY_BONUS)
      break
  }

  newInterval = Math.min(newInterval, MAX_INTERVAL)

  return {
    repetitions: newRepetitions,
    easeFactor: newEF,
    interval: newInterval,
    status: deriveStatus(newRepetitions, newInterval),
    nextReviewAt: getNextReviewDate(newInterval),
  }
}

/**
 * Calculate the next review date by adding interval days and normalizing to 4:00 AM.
 * Always returns a future date.
 */
export function getNextReviewDate(interval: number): Date {
  const now = new Date()
  const target = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000)

  // Normalize to DAY_RESET_HOUR (4 AM)
  target.setHours(DAY_RESET_HOUR, 0, 0, 0)

  // If normalized time is in the past, advance to next day
  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1)
  }

  return target
}

/**
 * Create a fresh card with default SM-2 values.
 */
export function createNewCard(): SRSCard {
  return {
    repetitions: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
  }
}
