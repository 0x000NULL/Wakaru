import type { ProgressStatus, SrsUpdate } from '@/types/progress'

/**
 * Fixed interval ladder (in days) indexed by repetition count.
 * After index 5, the interval stays at 30 days.
 */
const INTERVAL_LADDER = [0, 1, 3, 7, 14, 30]

/**
 * Derive the progress status from the repetition count.
 */
export function deriveStatus(repetitions: number): ProgressStatus {
  if (repetitions === 0) return 'new'
  if (repetitions <= 2) return 'learning'
  if (repetitions <= 4) return 'reviewing'
  return 'mastered'
}

/**
 * Calculate the next review interval in days from the repetition count.
 */
export function calculateNextInterval(repetitions: number): number {
  if (repetitions < 0) return INTERVAL_LADDER[0]
  if (repetitions >= INTERVAL_LADDER.length) return INTERVAL_LADDER[INTERVAL_LADDER.length - 1]
  return INTERVAL_LADDER[repetitions]
}

/**
 * Process a review result and return the updated SRS state.
 *
 * Correct answer → repetitions + 1
 * Incorrect answer → max(0, repetitions - 1)
 */
export function processReview(currentRepetitions: number, isCorrect: boolean): SrsUpdate {
  const newRepetitions = isCorrect
    ? currentRepetitions + 1
    : Math.max(0, currentRepetitions - 1)

  const interval = calculateNextInterval(newRepetitions)
  const now = new Date()
  const nextReviewAt = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000)

  return {
    repetitions: newRepetitions,
    interval,
    nextReviewAt,
    status: deriveStatus(newRepetitions),
  }
}
