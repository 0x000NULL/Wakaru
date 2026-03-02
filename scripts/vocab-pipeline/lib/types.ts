/** Raw word extracted from JMdict */
export interface RawWord {
  word: string
  reading: string
  meaning: string
  part_of_speech: string
  tags: string[]
}

/** Word enriched with frequency and JLPT data */
export interface EnrichedWord extends RawWord {
  frequency_rank: number | null
  jlpt_level: string | null
}

/** Final curated word ready for seed data */
export interface CuratedWord {
  word: string
  reading: string
  meaning: string
  part_of_speech: string
  jlpt_level: string | null
  frequency_rank: number | null
  tags: string[]
}

/** Tatoeba sentence pair */
export interface SentencePair {
  id: string
  japanese: string
  english: string
}

/** Junction mapping: word → sentence source_ids */
export interface VocabularySentenceMapping {
  word: string
  source_ids: string[]
}

/** Seed data sentence record */
export interface SeedSentence {
  source_id: string
  japanese: string
  english: string
}

/** Seed data junction record */
export interface SeedVocabSentence {
  word: string
  source_id: string
}

/** Pipeline step result for logging */
export interface StepResult {
  step: number
  name: string
  outputFile?: string
  count?: number
  duration: number
}
