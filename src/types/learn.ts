/** Matches the shape returned by GET /api/v1/srs/new → items[] */
export interface NewWordItem {
  id: string
  word: string
  reading: string
  meaning: string
  part_of_speech: string | null
  jlpt_level: string | null
  frequency_rank: number | null
  tags: string[]
  audio_url: string | null
  sentences: {
    id: string
    japanese: string
    english: string
    furigana: string | null
  }[]
}

export type LearnPhase =
  | 'loading'
  | 'learning'
  | 'completed'
  | 'limit_reached'
  | 'empty'
  | 'error'

export interface LearnSessionStats {
  wordsLearned: number
  dailyTotal: number
  dailyLimit: number
}

export interface VocabularyStats {
  dueCount: number
  learnedToday: number
  totalLearned: number
  dailyNewWordLimit: number
}
