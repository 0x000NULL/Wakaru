import { describe, it, expect } from 'vitest'
import { getFrequencyRankRange } from '@/lib/utils/frequency-tier-range'

describe('getFrequencyRankRange', () => {
  it('returns 1-500 for essential tier', () => {
    expect(getFrequencyRankRange('essential')).toEqual({ gte: 1, lte: 500 })
  })

  it('returns 501-1000 for core tier', () => {
    expect(getFrequencyRankRange('core')).toEqual({ gte: 501, lte: 1000 })
  })

  it('returns 1001-2000 for intermediate tier', () => {
    expect(getFrequencyRankRange('intermediate')).toEqual({ gte: 1001, lte: 2000 })
  })

  it('returns 2001-3000 for expanding tier', () => {
    expect(getFrequencyRankRange('expanding')).toEqual({ gte: 2001, lte: 3000 })
  })

  it('returns 3001+ with no upper bound for advanced tier', () => {
    const range = getFrequencyRankRange('advanced')
    expect(range.gte).toBe(3001)
    expect(range.lte).toBeUndefined()
  })
})
