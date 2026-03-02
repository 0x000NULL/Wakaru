import { describe, it, expect } from 'vitest'
import { HIRAGANA_RULES } from '@/lib/constants/hiragana-rules'

describe('HIRAGANA_RULES', () => {
  it('contains 5 rules', () => {
    expect(HIRAGANA_RULES).toHaveLength(5)
  })

  it('has unique IDs', () => {
    const ids = HIRAGANA_RULES.map((r) => r.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })

  it('all rules have non-empty title and description', () => {
    for (const rule of HIRAGANA_RULES) {
      expect(rule.title.length).toBeGreaterThan(0)
      expect(rule.description.length).toBeGreaterThan(0)
    }
  })

  it('all rules have at least one example', () => {
    for (const rule of HIRAGANA_RULES) {
      expect(rule.examples.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('all examples have required fields', () => {
    for (const rule of HIRAGANA_RULES) {
      for (const example of rule.examples) {
        expect(example.japanese).toBeTruthy()
        expect(example.romaji).toBeTruthy()
        expect(example.meaning).toBeTruthy()
        expect(example.explanation).toBeTruthy()
      }
    }
  })

  it('covers expected rule topics', () => {
    const ids = HIRAGANA_RULES.map((r) => r.id)
    expect(ids).toContain('long-vowels')
    expect(ids).toContain('long-vowel-spelling')
    expect(ids).toContain('small-tsu')
    expect(ids).toContain('particle-pronunciation')
    expect(ids).toContain('commonly-confused')
  })
})
