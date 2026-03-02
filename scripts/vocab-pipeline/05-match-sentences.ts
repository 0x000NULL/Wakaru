/**
 * Step 5: Match Tatoeba sentences to vocabulary words
 *
 * For each of the 3,000 words:
 * - Find sentences containing the word via sentence.includes(word)
 * - Filter: 5-60 Japanese chars, non-empty English, prefer shorter
 * - Select up to 3 sentences per word
 * - Deduplicate across words (shared via junction table)
 *
 * Tatoeba format (from manythings.org): "english\tjapanese\tattribution"
 */

import * as fs from 'fs'
import * as path from 'path'
import type { EnrichedWord, SentencePair, VocabularySentenceMapping } from './lib/types'

const CACHE_DIR = path.join(__dirname, '.cache')
const TATOEBA_FILE = path.join(CACHE_DIR, 'tatoeba-jpn-eng.tsv')
const WORDS_FILE = path.join(CACHE_DIR, 'intermediate', '03-with-jlpt.json')
const SENTENCES_OUTPUT = path.join(CACHE_DIR, 'intermediate', '04-matched-sentences.json')
const MAPPINGS_OUTPUT = path.join(CACHE_DIR, 'intermediate', '04-sentence-mappings.json')

const MIN_JP_LENGTH = 5
const MAX_JP_LENGTH = 60
const MAX_SENTENCES_PER_WORD = 3

export default async function matchSentences(): Promise<{
  count: number
  outputFile: string
}> {
  // Load Tatoeba sentences
  console.log('  Reading Tatoeba sentences...')
  const tatoebaRaw = fs.readFileSync(TATOEBA_FILE, 'utf-8')
  const lines = tatoebaRaw.split('\n').filter((l) => l.trim())

  const allSentences: SentencePair[] = []
  let lineNum = 0

  for (const line of lines) {
    lineNum++
    const parts = line.split('\t')
    if (parts.length < 2) continue

    const english = parts[0].trim()
    const japanese = parts[1].trim()

    if (!japanese || !english) continue
    if (japanese.length < MIN_JP_LENGTH || japanese.length > MAX_JP_LENGTH) continue

    allSentences.push({
      id: `tatoeba-${lineNum}`,
      japanese,
      english,
    })
  }

  console.log(
    `  Valid sentences: ${allSentences.length.toLocaleString()} / ${lines.length.toLocaleString()}`
  )

  // Load vocabulary words
  const words: EnrichedWord[] = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf-8'))
  console.log(`  Vocabulary words: ${words.length.toLocaleString()}`)

  // Match sentences to words
  const sentenceMap = new Map<string, SentencePair>() // source_id → sentence
  const mappings: VocabularySentenceMapping[] = []
  let wordsWithSentences = 0

  for (const word of words) {
    // Find sentences containing this word
    const matches = allSentences
      .filter((s) => s.japanese.includes(word.word))
      .sort((a, b) => a.japanese.length - b.japanese.length)
      .slice(0, MAX_SENTENCES_PER_WORD)

    if (matches.length > 0) {
      wordsWithSentences++
      const sourceIds: string[] = []

      for (const match of matches) {
        sentenceMap.set(match.id, match)
        sourceIds.push(match.id)
      }

      mappings.push({
        word: word.word,
        source_ids: sourceIds,
      })
    }
  }

  console.log(
    `  Words with sentences: ${wordsWithSentences.toLocaleString()} / ${words.length.toLocaleString()}`
  )
  console.log(`  Unique sentences: ${sentenceMap.size.toLocaleString()}`)
  console.log(`  Total mappings: ${mappings.reduce((s, m) => s + m.source_ids.length, 0).toLocaleString()}`)

  // Write outputs
  const sentences = Array.from(sentenceMap.values())
  fs.writeFileSync(SENTENCES_OUTPUT, JSON.stringify(sentences, null, 2))
  fs.writeFileSync(MAPPINGS_OUTPUT, JSON.stringify(mappings, null, 2))

  console.log(`  Output: ${SENTENCES_OUTPUT}`)
  console.log(`  Output: ${MAPPINGS_OUTPUT}`)

  return { count: sentenceMap.size, outputFile: SENTENCES_OUTPUT }
}
