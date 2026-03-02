import type { KanaCharacter } from '@/types/kana'

export type QuizMode = 'recognition' | 'typing' | 'audio' | 'mixed'
export type QuizPhase = 'setup' | 'active' | 'results'
export type QuestionType = 'recognition' | 'typing' | 'audio'

export interface QuizQuestion {
  id: string
  type: QuestionType
  character: KanaCharacter
  prompt: string
  correctAnswer: string
  options?: string[]
}

export interface QuizAnswer {
  questionId: string
  userAnswer: string
  isCorrect: boolean
  timeMs: number
}

export interface QuizSessionConfig {
  mode: QuizMode
  groupIds: string[]
  questionCount: number
}

export interface QuizSessionStats {
  totalQuestions: number
  correctCount: number
  incorrectCount: number
  accuracy: number
  averageTimeMs: number
  totalTimeMs: number
  missedCharacters: KanaCharacter[]
}
