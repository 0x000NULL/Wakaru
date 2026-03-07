export type KanjiQuizMode = 'recognition' | 'reading' | 'production' | 'mixed'

export interface KanjiItem {
  id: string
  character: string
  meanings: string[]
  onYomi: string[]
  kunYomi: string[]
  strokeCount: number
  grade: number | null
  jlptLevel: string | null
  frequencyRank: number | null
  mnemonic: string | null
}

export interface KanjiBrowseItem extends KanjiItem {
  vocabularyCount: number
}

export interface KanjiVocabWord {
  id: string
  word: string
  reading: string
  meaning: string
}

export interface KanjiDetailItem extends KanjiItem {
  nanori: string[]
  radicals: string[]
  vocabulary: KanjiVocabWord[]
  srs: KanjiSrsStatus | null
}

export interface KanjiSrsStatus {
  id: string
  repetitions: number
  easeFactor: number
  interval: number
  status: string
  nextReviewAt: string | null
  lastReviewedAt: string | null
  totalReviews: number
  correctReviews: number
  accuracy: number
}

export interface KanjiQuizQuestion {
  id: string
  type: KanjiQuizMode
  kanji: KanjiItem
  prompt: string
  correctAnswer: string
  options: string[]
}

export interface KanjiQuizAnswer {
  questionId: string
  kanjiId: string
  userAnswer: string
  isCorrect: boolean
  timeMs: number
}

export interface KanjiQuizSessionConfig {
  mode: KanjiQuizMode
  jlptLevels: string[]
  questionCount: number
}

export interface KanjiQuizSessionStats {
  totalQuestions: number
  correctCount: number
  incorrectCount: number
  accuracy: number
  averageTimeMs: number
  totalTimeMs: number
  missedKanji: { character: string; kanjiId: string }[]
}

/** Matches the shape returned by GET /api/v1/srs/new?category=kanji → items[] */
export interface NewKanjiItem {
  id: string
  character: string
  meanings: string
  on_yomi: string | null
  kun_yomi: string | null
  stroke_count: number
  grade: number | null
  jlpt_level: string | null
  frequency_rank: number | null
  mnemonic: string | null
  vocabulary: KanjiVocabWord[]
}

/** Matches the shape returned by GET /api/v1/srs/due?category=kanji → items[] */
export interface DueKanjiReviewItem {
  id: string
  character: string
  meanings: string
  on_yomi: string | null
  kun_yomi: string | null
  stroke_count: number
  grade: number | null
  jlpt_level: string | null
  frequency_rank: number | null
  mnemonic: string | null
  vocabulary: KanjiVocabWord[]
  srs: {
    repetitions: number
    easeFactor: number
    interval: number
    status: string
    nextReviewAt: string | null
    lastReviewedAt: string | null
    totalReviews: number
    correctReviews: number
  }
}
