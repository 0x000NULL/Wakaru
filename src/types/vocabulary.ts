export type FrequencyTier = 'essential' | 'core' | 'intermediate' | 'expanding' | 'advanced'

export interface VocabularyItem {
  id: string
  word: string
  reading: string
  meaning: string
  part_of_speech: string | null
  jlpt_level: string | null
  frequency_rank: number | null
  tags: string[]
  audio_url: string | null
}

export interface ExampleSentenceItem {
  id: string
  source_id: string | null
  japanese: string
  english: string
  furigana: string | null
  audio_url: string | null
}
