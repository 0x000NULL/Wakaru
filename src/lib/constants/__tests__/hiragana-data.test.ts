import { describe, it, expect } from 'vitest'
import { HIRAGANA_CHARACTERS } from '@/lib/constants/hiragana-data'

describe('HIRAGANA_CHARACTERS', () => {
  it('contains exactly 79 characters', () => {
    expect(HIRAGANA_CHARACTERS).toHaveLength(79)
  })

  it('has unique characters', () => {
    const characters = HIRAGANA_CHARACTERS.map((c) => c.character)
    const unique = new Set(characters)
    expect(unique.size).toBe(characters.length)
  })

  it('has unique display_order values', () => {
    const orders = HIRAGANA_CHARACTERS.map((c) => c.display_order)
    const unique = new Set(orders)
    expect(unique.size).toBe(orders.length)
  })

  it('has display_order values from 1 to 79', () => {
    const orders = HIRAGANA_CHARACTERS.map((c) => c.display_order).sort((a, b) => a - b)
    expect(orders[0]).toBe(1)
    expect(orders[orders.length - 1]).toBe(79)
  })

  it('all characters have non-empty mnemonics', () => {
    for (const char of HIRAGANA_CHARACTERS) {
      expect(char.mnemonic.length).toBeGreaterThan(0)
    }
  })

  it('all characters have at least one example word', () => {
    for (const char of HIRAGANA_CHARACTERS) {
      expect(char.example_words.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('all example words have word, reading, and meaning', () => {
    for (const char of HIRAGANA_CHARACTERS) {
      for (const word of char.example_words) {
        expect(word.word).toBeTruthy()
        expect(word.reading).toBeTruthy()
        expect(word.meaning).toBeTruthy()
      }
    }
  })

  it('all characters are typed as hiragana', () => {
    for (const char of HIRAGANA_CHARACTERS) {
      expect(char.type).toBe('hiragana')
    }
  })

  it('has 46 base characters and 33 combinations/modified', () => {
    const base = HIRAGANA_CHARACTERS.filter(
      (c) => !c.is_combination && !['g-z-row', 'd-b-row', 'p-row'].includes(c.group),
    )
    expect(base).toHaveLength(46)
  })

  it('has exactly 8 combination (yoon) characters', () => {
    const combinations = HIRAGANA_CHARACTERS.filter((c) => c.is_combination)
    expect(combinations).toHaveLength(8)
  })

  it('all characters have valid stroke counts', () => {
    for (const char of HIRAGANA_CHARACTERS) {
      expect(char.stroke_count).toBeGreaterThanOrEqual(1)
    }
  })

  it('groups cover all expected group IDs', () => {
    const groups = new Set(HIRAGANA_CHARACTERS.map((c) => c.group))
    expect(groups).toContain('vowel')
    expect(groups).toContain('k-row')
    expect(groups).toContain('s-row')
    expect(groups).toContain('t-row')
    expect(groups).toContain('n-row')
    expect(groups).toContain('h-row')
    expect(groups).toContain('m-row')
    expect(groups).toContain('y-row')
    expect(groups).toContain('r-row')
    expect(groups).toContain('w-row')
    expect(groups).toContain('g-z-row')
    expect(groups).toContain('d-b-row')
    expect(groups).toContain('p-row')
    expect(groups).toContain('yoon')
  })
})
