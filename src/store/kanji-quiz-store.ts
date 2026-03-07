'use client'

import { create } from 'zustand'
import type {
  KanjiItem,
  KanjiQuizQuestion,
  KanjiQuizAnswer,
  KanjiQuizSessionConfig,
  KanjiQuizSessionStats,
} from '@/types/kanji'
import {
  generateKanjiQuizQuestions,
  validateKanjiAnswer,
  calculateKanjiSessionStats,
} from '@/lib/utils/kanji-quiz-engine'
import { parseJsonArray } from '@/lib/utils/kanji'

type KanjiQuizPhase = 'setup' | 'active' | 'results'

interface KanjiQuizState {
  phase: KanjiQuizPhase
  config: KanjiQuizSessionConfig | null
  questions: KanjiQuizQuestion[]
  currentIndex: number
  answers: KanjiQuizAnswer[]
  questionStartTime: number
  showingFeedback: boolean
  lastAnswerCorrect: boolean | null
  allKanji: KanjiItem[]
  isLoadingKanji: boolean

  loadKanji: () => Promise<void>
  startSession: (config: KanjiQuizSessionConfig) => void
  submitAnswer: (userAnswer: string) => void
  nextQuestion: () => void
  restartSession: () => void
  practiceMissed: () => void
  resetToSetup: () => void
  currentQuestion: () => KanjiQuizQuestion | null
  progress: () => { current: number; total: number }
  stats: () => KanjiQuizSessionStats
}

export const useKanjiQuizStore = create<KanjiQuizState>()((set, get) => ({
  phase: 'setup',
  config: null,
  questions: [],
  currentIndex: 0,
  answers: [],
  questionStartTime: 0,
  showingFeedback: false,
  lastAnswerCorrect: null,
  allKanji: [],
  isLoadingKanji: false,

  loadKanji: async () => {
    if (get().allKanji.length > 0) return
    set({ isLoadingKanji: true })

    try {
      const res = await fetch('/api/v1/kanji?limit=100')
      if (!res.ok) {
        set({ isLoadingKanji: false })
        return
      }

      const json = await res.json()
      const items = (json.data as Array<Record<string, unknown>>).map((k) => ({
        id: k.id as string,
        character: k.character as string,
        meanings: typeof k.meanings === 'string'
          ? parseJsonArray(k.meanings as string)
          : (k.meanings as string[]),
        onYomi: typeof k.onYomi === 'string'
          ? parseJsonArray(k.onYomi as string)
          : (k.onYomi as string[] ?? []),
        kunYomi: typeof k.kunYomi === 'string'
          ? parseJsonArray(k.kunYomi as string)
          : (k.kunYomi as string[] ?? []),
        strokeCount: k.strokeCount as number,
        grade: k.grade as number | null,
        jlptLevel: k.jlptLevel as string | null,
        frequencyRank: k.frequencyRank as number | null,
        mnemonic: k.mnemonic as string | null,
      })) as KanjiItem[]

      set({ allKanji: items, isLoadingKanji: false })
    } catch {
      set({ isLoadingKanji: false })
    }
  },

  startSession: (config) => {
    const { allKanji } = get()
    const questions = generateKanjiQuizQuestions(config, allKanji)
    set({
      phase: questions.length > 0 ? 'active' : 'setup',
      config,
      questions,
      currentIndex: 0,
      answers: [],
      questionStartTime: Date.now(),
      showingFeedback: false,
      lastAnswerCorrect: null,
    })
  },

  submitAnswer: (userAnswer) => {
    const { questions, currentIndex, questionStartTime, answers } = get()
    const question = questions[currentIndex]
    if (!question) return

    const isCorrect = validateKanjiAnswer(question, userAnswer)
    const timeMs = Date.now() - questionStartTime

    const answer: KanjiQuizAnswer = {
      questionId: question.id,
      kanjiId: question.kanji.id,
      userAnswer,
      isCorrect,
      timeMs,
    }

    set({
      answers: [...answers, answer],
      showingFeedback: true,
      lastAnswerCorrect: isCorrect,
    })
  },

  nextQuestion: () => {
    const { currentIndex, questions } = get()
    const nextIndex = currentIndex + 1

    if (nextIndex >= questions.length) {
      set({ phase: 'results', showingFeedback: false })
    } else {
      set({
        currentIndex: nextIndex,
        showingFeedback: false,
        lastAnswerCorrect: null,
        questionStartTime: Date.now(),
      })
    }
  },

  restartSession: () => {
    const { config } = get()
    if (config) {
      get().startSession(config)
    }
  },

  practiceMissed: () => {
    const { config, allKanji } = get()
    const stats = get().stats()
    if (!config || stats.missedKanji.length === 0) return

    const missedIds = new Set(stats.missedKanji.map((m) => m.kanjiId))
    const missedKanji = allKanji.filter((k) => missedIds.has(k.id))

    const missedConfig: KanjiQuizSessionConfig = {
      ...config,
      questionCount: Math.min(config.questionCount || 10, missedKanji.length * 2),
    }

    const questions = generateKanjiQuizQuestions(missedConfig, missedKanji)

    set({
      phase: questions.length > 0 ? 'active' : 'results',
      config: missedConfig,
      questions,
      currentIndex: 0,
      answers: [],
      questionStartTime: Date.now(),
      showingFeedback: false,
      lastAnswerCorrect: null,
    })
  },

  resetToSetup: () => {
    set({
      phase: 'setup',
      config: null,
      questions: [],
      currentIndex: 0,
      answers: [],
      questionStartTime: 0,
      showingFeedback: false,
      lastAnswerCorrect: null,
    })
  },

  currentQuestion: () => {
    const { questions, currentIndex } = get()
    return questions[currentIndex] ?? null
  },

  progress: () => {
    const { currentIndex, questions } = get()
    return { current: currentIndex + 1, total: questions.length }
  },

  stats: () => {
    const { answers, questions } = get()
    return calculateKanjiSessionStats(answers, questions)
  },
}))
