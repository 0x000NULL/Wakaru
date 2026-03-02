import { describe, it, expect, beforeEach } from 'vitest'
import { useQuizStore } from '@/store/quiz-store'
import type { QuizSessionConfig } from '@/types/quiz'

const defaultConfig: QuizSessionConfig = {
  mode: 'recognition',
  groupIds: ['vowel'],
  questionCount: 5,
}

describe('useQuizStore', () => {
  beforeEach(() => {
    useQuizStore.getState().resetToSetup()
  })

  describe('initial state', () => {
    it('starts in setup phase', () => {
      const state = useQuizStore.getState()
      expect(state.phase).toBe('setup')
      expect(state.config).toBeNull()
      expect(state.questions).toEqual([])
      expect(state.currentIndex).toBe(0)
      expect(state.answers).toEqual([])
      expect(state.showingFeedback).toBe(false)
      expect(state.lastAnswerCorrect).toBeNull()
    })
  })

  describe('startSession', () => {
    it('transitions to active phase and generates questions', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const state = useQuizStore.getState()
      expect(state.phase).toBe('active')
      expect(state.config).toEqual(defaultConfig)
      expect(state.questions).toHaveLength(5)
      expect(state.currentIndex).toBe(0)
      expect(state.answers).toEqual([])
    })

    it('generates questions of the correct type', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const state = useQuizStore.getState()
      state.questions.forEach((q) => expect(q.type).toBe('recognition'))
    })
  })

  describe('submitAnswer', () => {
    it('records a correct answer and shows feedback', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const question = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(question.correctAnswer)

      const state = useQuizStore.getState()
      expect(state.answers).toHaveLength(1)
      expect(state.answers[0].isCorrect).toBe(true)
      expect(state.showingFeedback).toBe(true)
      expect(state.lastAnswerCorrect).toBe(true)
    })

    it('records an incorrect answer', () => {
      useQuizStore.getState().startSession(defaultConfig)
      useQuizStore.getState().submitAnswer('wrong_answer')

      const state = useQuizStore.getState()
      expect(state.answers[0].isCorrect).toBe(false)
      expect(state.lastAnswerCorrect).toBe(false)
    })
  })

  describe('nextQuestion', () => {
    it('advances to the next question', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const q = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q.correctAnswer)
      useQuizStore.getState().nextQuestion()

      const state = useQuizStore.getState()
      expect(state.currentIndex).toBe(1)
      expect(state.showingFeedback).toBe(false)
      expect(state.lastAnswerCorrect).toBeNull()
    })

    it('transitions to results after last question', () => {
      useQuizStore.getState().startSession({
        ...defaultConfig,
        questionCount: 2,
      })

      // Answer both questions
      const q1 = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q1.correctAnswer)
      useQuizStore.getState().nextQuestion()

      const q2 = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q2.correctAnswer)
      useQuizStore.getState().nextQuestion()

      expect(useQuizStore.getState().phase).toBe('results')
    })
  })

  describe('restartSession', () => {
    it('restarts with the same config', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const q = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q.correctAnswer)
      useQuizStore.getState().nextQuestion()

      useQuizStore.getState().restartSession()

      const state = useQuizStore.getState()
      expect(state.phase).toBe('active')
      expect(state.config).toEqual(defaultConfig)
      expect(state.currentIndex).toBe(0)
      expect(state.answers).toEqual([])
    })
  })

  describe('resetToSetup', () => {
    it('resets all state back to setup', () => {
      useQuizStore.getState().startSession(defaultConfig)
      useQuizStore.getState().submitAnswer('a')

      useQuizStore.getState().resetToSetup()

      const state = useQuizStore.getState()
      expect(state.phase).toBe('setup')
      expect(state.config).toBeNull()
      expect(state.questions).toEqual([])
    })
  })

  describe('selectors', () => {
    it('currentQuestion returns the current question', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const q = useQuizStore.getState().currentQuestion()
      expect(q).not.toBeNull()
      expect(q!.type).toBe('recognition')
    })

    it('currentQuestion returns null when no session', () => {
      expect(useQuizStore.getState().currentQuestion()).toBeNull()
    })

    it('progress returns correct values', () => {
      useQuizStore.getState().startSession(defaultConfig)
      expect(useQuizStore.getState().progress()).toEqual({ current: 1, total: 5 })

      const q = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q.correctAnswer)
      useQuizStore.getState().nextQuestion()
      expect(useQuizStore.getState().progress()).toEqual({ current: 2, total: 5 })
    })

    it('stats returns calculated statistics', () => {
      useQuizStore.getState().startSession({
        ...defaultConfig,
        questionCount: 2,
      })

      const q1 = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q1.correctAnswer)
      useQuizStore.getState().nextQuestion()

      useQuizStore.getState().submitAnswer('wrong')
      useQuizStore.getState().nextQuestion()

      const stats = useQuizStore.getState().stats()
      expect(stats.totalQuestions).toBe(2)
      expect(stats.correctCount).toBe(1)
      expect(stats.incorrectCount).toBe(1)
      expect(stats.accuracy).toBe(50)
    })

    it('availableCharacters returns filtered characters', () => {
      useQuizStore.getState().startSession(defaultConfig)
      const chars = useQuizStore.getState().availableCharacters()
      expect(chars).toHaveLength(5)
      chars.forEach((c) => expect(c.group).toBe('vowel'))
    })
  })

  describe('practiceMissed', () => {
    it('creates a new session with only missed characters', () => {
      useQuizStore.getState().startSession({
        ...defaultConfig,
        questionCount: 3,
      })

      // Answer first correctly, rest wrong
      const q1 = useQuizStore.getState().currentQuestion()!
      useQuizStore.getState().submitAnswer(q1.correctAnswer)
      useQuizStore.getState().nextQuestion()

      useQuizStore.getState().submitAnswer('wrong')
      useQuizStore.getState().nextQuestion()

      useQuizStore.getState().submitAnswer('wrong')
      useQuizStore.getState().nextQuestion()

      // Now in results phase
      expect(useQuizStore.getState().phase).toBe('results')

      useQuizStore.getState().practiceMissed()
      const state = useQuizStore.getState()
      expect(state.phase).toBe('active')
      expect(state.questions.length).toBeGreaterThan(0)
    })
  })
})
