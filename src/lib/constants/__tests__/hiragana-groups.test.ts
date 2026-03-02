import { describe, it, expect } from 'vitest'
import { HIRAGANA_GROUPS } from '@/lib/constants/hiragana-groups'
import { HIRAGANA_CHARACTERS } from '@/lib/constants/hiragana-data'

describe('HIRAGANA_GROUPS', () => {
  it('contains exactly 14 groups', () => {
    expect(HIRAGANA_GROUPS).toHaveLength(14)
  })

  it('has unique group IDs', () => {
    const ids = HIRAGANA_GROUPS.map((g) => g.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })

  it('has unique display_order values', () => {
    const orders = HIRAGANA_GROUPS.map((g) => g.display_order)
    const unique = new Set(orders)
    expect(unique.size).toBe(orders.length)
  })

  it('character_count sums to 79', () => {
    const total = HIRAGANA_GROUPS.reduce((sum, g) => sum + g.character_count, 0)
    expect(total).toBe(79)
  })

  it('each group character_count matches actual characters in data', () => {
    for (const group of HIRAGANA_GROUPS) {
      const chars = HIRAGANA_CHARACTERS.filter((c) => c.group === group.id)
      expect(chars).toHaveLength(group.character_count)
    }
  })

  it('all groups have non-empty names and descriptions', () => {
    for (const group of HIRAGANA_GROUPS) {
      expect(group.name.length).toBeGreaterThan(0)
      expect(group.description.length).toBeGreaterThan(0)
    }
  })

  it('only yoon group is marked as combination', () => {
    const combos = HIRAGANA_GROUPS.filter((g) => g.is_combination)
    expect(combos).toHaveLength(1)
    expect(combos[0].id).toBe('yoon')
  })

  it('dakuten groups are correctly marked', () => {
    const dakuten = HIRAGANA_GROUPS.filter((g) => g.is_dakuten)
    expect(dakuten).toHaveLength(2)
    const ids = dakuten.map((g) => g.id).sort()
    expect(ids).toEqual(['d-b-row', 'g-z-row'])
  })
})
