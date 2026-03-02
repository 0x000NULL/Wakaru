import { create } from 'zustand'
import type { HiraganaProgressSummary } from '@/types/progress'

interface ProgressState {
  hiragana: HiraganaProgressSummary | null
  isLoading: boolean
  error: string | null

  fetchHiraganaProgress: () => Promise<void>
  submitQuizResults: (
    answers: { character: string; isCorrect: boolean }[],
  ) => Promise<void>
}

export const useProgressStore = create<ProgressState>()((set) => ({
  hiragana: null,
  isLoading: false,
  error: null,

  fetchHiraganaProgress: async () => {
    set({ isLoading: true, error: null })
    try {
      const res = await fetch('/api/v1/hiragana/progress')
      const data = await res.json()
      if (data.success) {
        set({ hiragana: data.data })
      } else {
        set({ error: data.error?.message ?? 'Failed to fetch progress' })
      }
    } catch {
      set({ error: 'Failed to fetch progress' })
    } finally {
      set({ isLoading: false })
    }
  },

  submitQuizResults: async (answers) => {
    set({ isLoading: true, error: null })
    try {
      const res = await fetch('/api/v1/hiragana/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      const data = await res.json()
      if (data.success) {
        set({ hiragana: data.data })
      } else {
        set({ error: data.error?.message ?? 'Failed to submit results' })
      }
    } catch {
      set({ error: 'Failed to submit results' })
    } finally {
      set({ isLoading: false })
    }
  },
}))
