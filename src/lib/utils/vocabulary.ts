import type { FrequencyTier } from '@/types/vocabulary'

/**
 * Derives a frequency tier label from a numeric frequency rank.
 *
 * | Rank       | Tier          |
 * |------------|---------------|
 * | 1-500      | essential     |
 * | 501-1000   | core          |
 * | 1001-2000  | intermediate  |
 * | 2001-3000  | expanding     |
 * | 3001+      | advanced      |
 */
export function getFrequencyTier(rank: number | null): FrequencyTier | null {
  if (rank === null) return null
  if (rank <= 500) return 'essential'
  if (rank <= 1000) return 'core'
  if (rank <= 2000) return 'intermediate'
  if (rank <= 3000) return 'expanding'
  return 'advanced'
}

/**
 * Speaks a Japanese word or phrase using the Web Speech API with a Japanese voice.
 * Same pattern as speakKana in src/lib/utils/kana.ts.
 * Returns false if speech synthesis is not available.
 */
export function speakVocab(text: string, rate: number = 0.8): boolean {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return false
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ja-JP'
  utterance.rate = rate

  const voices = window.speechSynthesis.getVoices()
  const japaneseVoice = voices.find((v) => v.lang.startsWith('ja'))
  if (japaneseVoice) {
    utterance.voice = japaneseVoice
  }

  window.speechSynthesis.speak(utterance)
  return true
}
