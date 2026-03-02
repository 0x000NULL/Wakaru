import { create } from 'zustand'
import type { NewWordItem, LearnPhase, LearnSessionStats, VocabularyStats } from '@/types/learn'

interface LearnState {
  phase: LearnPhase
  queue: NewWordItem[]
  currentIndex: number
  learnedIds: Set<string>
  dailyLimit: number
  learnedToday: number
  isSubmitting: boolean
  error: string | null

  // Actions
  startSession: () => Promise<void>
  markAsLearning: () => Promise<void>
  skip: () => void
  reset: () => void

  // Selectors
  currentWord: () => NewWordItem | null
  progress: () => { current: number; total: number }
  stats: () => LearnSessionStats
}

const initialState = {
  phase: 'loading' as LearnPhase,
  queue: [] as NewWordItem[],
  currentIndex: 0,
  learnedIds: new Set<string>(),
  dailyLimit: 20,
  learnedToday: 0,
  isSubmitting: false,
  error: null as string | null,
}

export const useLearnStore = create<LearnState>()((set, get) => ({
  ...initialState,

  startSession: async () => {
    set({ ...initialState, phase: 'loading' })

    try {
      const statsRes = await fetch('/api/v1/srs/stats')
      if (!statsRes.ok) {
        set({ phase: 'error', error: 'Failed to load vocabulary stats' })
        return
      }

      const statsJson = await statsRes.json()
      const { learnedToday, dailyNewWordLimit } = statsJson.data as VocabularyStats

      if (learnedToday >= dailyNewWordLimit) {
        set({
          phase: 'limit_reached',
          dailyLimit: dailyNewWordLimit,
          learnedToday,
        })
        return
      }

      const remaining = dailyNewWordLimit - learnedToday
      const newRes = await fetch(`/api/v1/srs/new?limit=${remaining}`)
      if (!newRes.ok) {
        set({ phase: 'error', error: 'Failed to load new words' })
        return
      }

      const newJson = await newRes.json()
      const { items } = newJson.data as { count: number; items: NewWordItem[] }

      if (items.length === 0) {
        set({
          phase: 'empty',
          dailyLimit: dailyNewWordLimit,
          learnedToday,
        })
        return
      }

      set({
        phase: 'learning',
        queue: items,
        currentIndex: 0,
        learnedIds: new Set(),
        dailyLimit: dailyNewWordLimit,
        learnedToday,
        isSubmitting: false,
        error: null,
      })
    } catch {
      set({ phase: 'error', error: 'Network error — please try again' })
    }
  },

  markAsLearning: async () => {
    const { queue, currentIndex, learnedIds, learnedToday, isSubmitting } = get()
    if (isSubmitting) return

    const word = queue[currentIndex]
    if (!word) return

    set({ isSubmitting: true })

    try {
      const res = await fetch('/api/v1/srs/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: word.id }),
      })

      if (!res.ok) {
        set({ isSubmitting: false })
        return
      }

      const newLearnedIds = new Set(learnedIds)
      newLearnedIds.add(word.id)
      const newLearnedToday = learnedToday + 1
      const nextIndex = currentIndex + 1

      if (nextIndex >= queue.length) {
        set({
          learnedIds: newLearnedIds,
          learnedToday: newLearnedToday,
          phase: 'completed',
          isSubmitting: false,
        })
      } else {
        set({
          learnedIds: newLearnedIds,
          learnedToday: newLearnedToday,
          currentIndex: nextIndex,
          isSubmitting: false,
        })
      }
    } catch {
      set({ isSubmitting: false })
    }
  },

  skip: () => {
    const { queue, currentIndex } = get()
    const nextIndex = currentIndex + 1

    if (nextIndex >= queue.length) {
      set({ phase: 'completed' })
    } else {
      set({ currentIndex: nextIndex })
    }
  },

  reset: () => {
    set(initialState)
  },

  currentWord: () => {
    const { queue, currentIndex } = get()
    return queue[currentIndex] ?? null
  },

  progress: () => {
    const { currentIndex, queue } = get()
    return { current: currentIndex + 1, total: queue.length }
  },

  stats: () => {
    const { learnedIds, learnedToday, dailyLimit } = get()
    return {
      wordsLearned: learnedIds.size,
      dailyTotal: learnedToday,
      dailyLimit,
    }
  },
}))
