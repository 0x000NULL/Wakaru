import { create } from 'zustand'
import type { Rating } from '@/types/progress'
import type {
  DueReviewItem,
  ReviewPhase,
  ReviewAnswer,
  ReviewSessionStats,
} from '@/types/review'

interface ReviewState {
  phase: ReviewPhase
  queue: DueReviewItem[]
  currentIndex: number
  isRevealed: boolean
  answers: ReviewAnswer[]
  totalDueAtStart: number
  isSubmitting: boolean
  error: string | null

  // Actions
  startSession: () => Promise<void>
  reveal: () => void
  submitRating: (rating: Rating) => Promise<void>
  reset: () => void

  // Selectors
  currentCard: () => DueReviewItem | null
  progress: () => { current: number; total: number }
  stats: () => ReviewSessionStats
}

const initialState = {
  phase: 'loading' as ReviewPhase,
  queue: [] as DueReviewItem[],
  currentIndex: 0,
  isRevealed: false,
  answers: [] as ReviewAnswer[],
  totalDueAtStart: 0,
  isSubmitting: false,
  error: null as string | null,
}

export const useReviewStore = create<ReviewState>()((set, get) => ({
  ...initialState,

  startSession: async () => {
    set({ ...initialState, phase: 'loading' })

    try {
      const res = await fetch('/api/v1/srs/due?limit=50')
      if (!res.ok) {
        set({ phase: 'error', error: 'Failed to load reviews' })
        return
      }

      const json = await res.json()
      const { dueCount, items } = json.data as {
        dueCount: number
        items: DueReviewItem[]
      }

      if (items.length === 0) {
        set({ phase: 'empty', totalDueAtStart: 0 })
        return
      }

      set({
        phase: 'reviewing',
        queue: items,
        currentIndex: 0,
        isRevealed: false,
        answers: [],
        totalDueAtStart: dueCount,
        isSubmitting: false,
        error: null,
      })
    } catch {
      set({ phase: 'error', error: 'Network error — please try again' })
    }
  },

  reveal: () => {
    set({ isRevealed: true })
  },

  submitRating: async (rating) => {
    const { queue, currentIndex, answers, isSubmitting } = get()
    if (isSubmitting) return

    const card = queue[currentIndex]
    if (!card) return

    set({ isSubmitting: true })

    try {
      const res = await fetch('/api/v1/srs/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: card.id, rating }),
      })

      if (!res.ok) {
        set({ isSubmitting: false })
        return
      }

      const answer: ReviewAnswer = {
        itemId: card.id,
        word: card.word,
        rating,
      }

      const newAnswers = [...answers, answer]
      const nextIndex = currentIndex + 1

      if (nextIndex >= queue.length) {
        set({
          answers: newAnswers,
          phase: 'completed',
          isSubmitting: false,
        })
      } else {
        set({
          answers: newAnswers,
          currentIndex: nextIndex,
          isRevealed: false,
          isSubmitting: false,
        })
      }
    } catch {
      set({ isSubmitting: false })
    }
  },

  reset: () => {
    set(initialState)
  },

  currentCard: () => {
    const { queue, currentIndex } = get()
    return queue[currentIndex] ?? null
  },

  progress: () => {
    const { currentIndex, queue } = get()
    return { current: currentIndex + 1, total: queue.length }
  },

  stats: () => {
    const { answers, totalDueAtStart } = get()
    return {
      totalReviewed: answers.length,
      againCount: answers.filter((a) => a.rating === 'again').length,
      hardCount: answers.filter((a) => a.rating === 'hard').length,
      goodCount: answers.filter((a) => a.rating === 'good').length,
      easyCount: answers.filter((a) => a.rating === 'easy').length,
      totalDueAtStart,
    }
  },
}))
