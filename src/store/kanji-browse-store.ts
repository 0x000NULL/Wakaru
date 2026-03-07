'use client'

import { create } from 'zustand'
import type { KanjiBrowseItem, KanjiDetailItem } from '@/types/kanji'
import type { JlptLevel } from '@/types/vocabulary'

interface KanjiBrowseState {
  search: string
  jlptLevel: JlptLevel | null
  grade: number | null
  items: KanjiBrowseItem[]
  total: number
  page: number
  pageSize: number
  isLoading: boolean
  error: string | null
  selectedItemId: string | null
  detailItem: KanjiDetailItem | null
  isDetailLoading: boolean
  isAddingToSrs: boolean

  setSearch: (search: string) => void
  setJlptLevel: (level: JlptLevel | null) => void
  setGrade: (grade: number | null) => void
  setPage: (page: number) => void
  fetchItems: () => Promise<void>
  openDetail: (id: string) => Promise<void>
  closeDetail: () => void
  addToSrs: (itemId: string) => Promise<void>
}

const PAGE_SIZE = 24

export const useKanjiBrowseStore = create<KanjiBrowseState>()((set, get) => ({
  search: '',
  jlptLevel: null,
  grade: null,
  items: [],
  total: 0,
  page: 1,
  pageSize: PAGE_SIZE,
  isLoading: false,
  error: null,
  selectedItemId: null,
  detailItem: null,
  isDetailLoading: false,
  isAddingToSrs: false,

  setSearch: (search) => {
    set({ search, page: 1 })
    get().fetchItems()
  },

  setJlptLevel: (level) => {
    set({ jlptLevel: level, page: 1 })
    get().fetchItems()
  },

  setGrade: (grade) => {
    set({ grade, page: 1 })
    get().fetchItems()
  },

  setPage: (page) => {
    set({ page })
    get().fetchItems()
  },

  fetchItems: async () => {
    const { search, jlptLevel, grade, page, pageSize } = get()
    set({ isLoading: true, error: null })

    try {
      const params = new URLSearchParams()
      params.set('limit', String(pageSize))
      params.set('offset', String((page - 1) * pageSize))
      if (search) params.set('search', search)
      if (jlptLevel) params.set('jlptLevel', jlptLevel)
      if (grade) params.set('grade', String(grade))

      const res = await fetch(`/api/v1/kanji?${params}`)
      if (!res.ok) {
        set({ isLoading: false, error: 'Failed to load kanji' })
        return
      }

      const json = await res.json()
      set({
        items: json.data as KanjiBrowseItem[],
        total: json.meta?.total ?? 0,
        isLoading: false,
      })
    } catch {
      set({ isLoading: false, error: 'Network error — please try again' })
    }
  },

  openDetail: async (id) => {
    set({ selectedItemId: id, detailItem: null, isDetailLoading: true })

    try {
      const res = await fetch(`/api/v1/kanji/${id}`)
      if (!res.ok) {
        set({ isDetailLoading: false })
        return
      }

      const json = await res.json()
      set({ detailItem: json.data as KanjiDetailItem, isDetailLoading: false })
    } catch {
      set({ isDetailLoading: false })
    }
  },

  closeDetail: () => {
    set({ selectedItemId: null, detailItem: null, isDetailLoading: false, isAddingToSrs: false })
  },

  addToSrs: async (itemId) => {
    set({ isAddingToSrs: true })

    try {
      const res = await fetch('/api/v1/srs/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, category: 'kanji' }),
      })

      if (!res.ok) {
        set({ isAddingToSrs: false })
        return
      }

      const detailRes = await fetch(`/api/v1/kanji/${itemId}`)
      if (detailRes.ok) {
        const json = await detailRes.json()
        set({ detailItem: json.data as KanjiDetailItem, isAddingToSrs: false })
      } else {
        set({ isAddingToSrs: false })
      }
    } catch {
      set({ isAddingToSrs: false })
    }
  },
}))
