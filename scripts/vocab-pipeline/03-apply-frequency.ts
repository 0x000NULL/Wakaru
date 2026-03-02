/**
 * Step 3: Apply frequency rankings
 *
 * Reads Leeds frequency list (line# = rank) and matches to raw words
 * by word text or reading. Outputs enriched words with frequency_rank.
 *
 * Leeds format: one word per line, line number is the frequency rank.
 * First line may be a header — we detect and skip it.
 */

import * as fs from 'fs'
import * as path from 'path'
import type { EnrichedWord, RawWord } from './lib/types'

const CACHE_DIR = path.join(__dirname, '.cache')
const LEEDS_FILE = path.join(CACHE_DIR, 'leeds-frequency.txt')
const INPUT_FILE = path.join(CACHE_DIR, 'intermediate', '01-raw-words.json')
const OUTPUT_FILE = path.join(CACHE_DIR, 'intermediate', '02-with-frequency.json')

export default async function applyFrequency(): Promise<{
  count: number
  outputFile: string
}> {
  console.log('  Reading Leeds frequency list...')
  const leedsRaw = fs.readFileSync(LEEDS_FILE, 'utf-8')
  const leedsLines = leedsRaw.split('\n').filter((l) => l.trim())

  // Build frequency map: word → rank
  // Leeds format: each line may be "rank word frequency" or just "word"
  const freqMap = new Map<string, number>()
  let rank = 0

  for (const line of leedsLines) {
    const parts = line.trim().split(/\s+/)
    // Skip header or invalid lines
    if (!parts.length) continue

    // The file has format: "rank word frequency" — we want the word (second column)
    // But some versions just have one word per line
    let word: string

    if (parts.length >= 3 && !isNaN(Number(parts[0]))) {
      // Format: "1 の 7.49" — rank, word, frequency
      word = parts[1]
      rank = Number(parts[0])
    } else if (parts.length === 1) {
      // Format: one word per line, line number = rank
      rank++
      word = parts[0]
    } else {
      rank++
      word = parts[0]
    }

    if (word && !freqMap.has(word)) {
      freqMap.set(word, rank)
    }
  }

  console.log(`  Frequency entries loaded: ${freqMap.size.toLocaleString()}`)

  // Read raw words
  const rawWords: RawWord[] = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'))
  console.log(`  Input words: ${rawWords.length.toLocaleString()}`)

  // Match frequency
  let matched = 0
  const enriched: EnrichedWord[] = rawWords.map((w) => {
    const freqRank = freqMap.get(w.word) || freqMap.get(w.reading) || null
    if (freqRank) matched++

    return {
      ...w,
      frequency_rank: freqRank,
      jlpt_level: null,
    }
  })

  console.log(`  Frequency matched: ${matched.toLocaleString()} / ${rawWords.length.toLocaleString()}`)

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(enriched, null, 2))
  console.log(`  Output: ${OUTPUT_FILE}`)

  return { count: enriched.length, outputFile: OUTPUT_FILE }
}
