import { describe, it, expect } from 'vitest'
import { getStrokeOrderSvgPath, speakKana, getGroupById, getCharactersByGroup } from '@/lib/utils/kana'
import { HIRAGANA_CHARACTERS } from '@/lib/constants/hiragana-data'

describe('getStrokeOrderSvgPath', () => {
  it('returns correct path for あ (codepoint 12354)', () => {
    expect(getStrokeOrderSvgPath('あ')).toBe('/svg/kana/12354.svg')
  })

  it('returns correct path for ん (codepoint 12435)', () => {
    expect(getStrokeOrderSvgPath('ん')).toBe('/svg/kana/12435.svg')
  })

  it('uses first character codepoint for combinations', () => {
    // きゃ — first char き is codepoint 12365
    expect(getStrokeOrderSvgPath('きゃ')).toBe('/svg/kana/12365.svg')
  })
})

describe('speakKana', () => {
  it('returns false when window is undefined (Node environment)', () => {
    expect(speakKana('あ')).toBe(false)
  })
})

describe('getGroupById', () => {
  it('returns the vowel group', () => {
    const group = getGroupById('vowel')
    expect(group).toBeDefined()
    expect(group!.name).toBe('Vowels')
    expect(group!.character_count).toBe(5)
  })

  it('returns the yoon group', () => {
    const group = getGroupById('yoon')
    expect(group).toBeDefined()
    expect(group!.is_combination).toBe(true)
  })

  it('returns undefined for non-existent group', () => {
    expect(getGroupById('nonexistent')).toBeUndefined()
  })
})

describe('getCharactersByGroup', () => {
  it('returns 5 vowel characters sorted by display_order', () => {
    const vowels = getCharactersByGroup(HIRAGANA_CHARACTERS, 'vowel')
    expect(vowels).toHaveLength(5)
    expect(vowels[0].character).toBe('あ')
    expect(vowels[4].character).toBe('お')
  })

  it('returns 3 y-row characters', () => {
    const yRow = getCharactersByGroup(HIRAGANA_CHARACTERS, 'y-row')
    expect(yRow).toHaveLength(3)
  })

  it('returns 8 yoon characters', () => {
    const yoon = getCharactersByGroup(HIRAGANA_CHARACTERS, 'yoon')
    expect(yoon).toHaveLength(8)
  })

  it('results are sorted by display_order', () => {
    const kRow = getCharactersByGroup(HIRAGANA_CHARACTERS, 'k-row')
    for (let i = 1; i < kRow.length; i++) {
      expect(kRow[i].display_order).toBeGreaterThan(kRow[i - 1].display_order)
    }
  })

  it('returns empty array for non-existent group', () => {
    expect(getCharactersByGroup(HIRAGANA_CHARACTERS, 'nonexistent')).toEqual([])
  })
})
