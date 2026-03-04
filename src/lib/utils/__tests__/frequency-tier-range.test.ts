import { describe, it, expect } from 'vitest'
import { getFrequencyRankRange } from '@/lib/utils/frequency-tier-range'

describe('getFrequencyRankRange', () => {
  it('returns 1-500 for essential tier', () => {
    expect(getFrequencyRankRange('essential')).toEqual({ gte: 1, lte: 500 })
  })

  it('returns 501-1500 for core tier', () => {
    expect(getFrequencyRankRange('core')).toEqual({ gte: 501, lte: 1500 })
  })

  it('returns 1501-3500 for intermediate tier', () => {
    expect(getFrequencyRankRange('intermediate')).toEqual({ gte: 1501, lte: 3500 })
  })

  it('returns 3501-6000 for expanding tier', () => {
    expect(getFrequencyRankRange('expanding')).toEqual({ gte: 3501, lte: 6000 })
  })

  it('returns 6001+ with no upper bound for advanced tier', () => {
    const range = getFrequencyRankRange('advanced')
    expect(range.gte).toBe(6001)
    expect(range.lte).toBeUndefined()
  })
})
