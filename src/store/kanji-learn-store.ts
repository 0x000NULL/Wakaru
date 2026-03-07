'use client'

import { create } from 'zustand'
import type { NewKanjiItem } from '@/types/kanji'

type KanjiLearnPhase = 'loading' | 'learning' | 'completed' | 'limit_reached' | 'empty' | 'error'

interface KanjiLearnState {
  phase: KanjiLearnPhase
  queue: NewKanjiItem[]
  currentIndex: number
  learnedIds: Set<string>
  dailyLimit: number
  learnedToday: number
  isSubmitting: boolean
  error: string | null

  startSession: () => Promise<void>
  markAsLearning: () => Promise<void>
  skip: () => void
  reset: () => void
  currentKanji: () => NewKanjiItem | null
  progress: () => { current: number; total: number }
  stats: () => { kanjiLearned: number; dailyTotal: number; dailyLimit: number }
}

const initialState = {
  phase: 'loading' as KanjiLearnPhase,
  queue: [] as NewKanjiItem[],
  currentIndex: 0,
  learnedIds: new Set<string>(),
  dailyLimit: 20,
  learnedToday: 0,
  isSubmitting: false,
  error: null as string | null,
}

export const useKanjiLearnStore = create<KanjiLearnState>()((set, get) => ({
  ...initialState,

  startSession: async () => {
    set({ ...initialState, phase: 'loading' })

    try {
      const statsRes = await fetch('/api/v1/srs/stats?category=kanji')
      if (!statsRes.ok) {
        set({ phase: 'error', error: 'Failed to load kanji stats' })
        return
      }

      const statsJson = await statsRes.json()
      const { learnedToday, dailyNewWordLimit } = statsJson.data

      if (learnedToday >= dailyNewWordLimit) {
        set({
          phase: 'limit_reached',
          dailyLimit: dailyNewWordLimit,
          learnedToday,
        })
        return
      }

      const remaining = dailyNewWordLimit - learnedToday
      const newRes = await fetch(`/api/v1/srs/new?limit=${remaining}&category=kanji`)
      if (!newRes.ok) {
        set({ phase: 'error', error: 'Failed to load new kanji' })
        return
      }

      const newJson = await newRes.json()
      const { items } = newJson.data as { count: number; items: NewKanjiItem[] }

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

    const kanji = queue[currentIndex]
    if (!kanji) return

    set({ isSubmitting: true })

    try {
      const res = await fetch('/api/v1/srs/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: kanji.id, category: 'kanji' }),
      })

      if (!res.ok) {
        set({ isSubmitting: false })
        return
      }

      const newLearnedIds = new Set(learnedIds)
      newLearnedIds.add(kanji.id)
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

  currentKanji: () => {
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
      kanjiLearned: learnedIds.size,
      dailyTotal: learnedToday,
      dailyLimit,
    }
  },
}))
