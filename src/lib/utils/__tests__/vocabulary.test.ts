import { describe, it, expect } from 'vitest'
import { getFrequencyTier } from '@/lib/utils/vocabulary'

describe('getFrequencyTier', () => {
  it('returns null for null rank', () => {
    expect(getFrequencyTier(null)).toBeNull()
  })

  it('returns "essential" for ranks 1-500', () => {
    expect(getFrequencyTier(1)).toBe('essential')
    expect(getFrequencyTier(250)).toBe('essential')
    expect(getFrequencyTier(500)).toBe('essential')
  })

  it('returns "core" for ranks 501-1500', () => {
    expect(getFrequencyTier(501)).toBe('core')
    expect(getFrequencyTier(1000)).toBe('core')
    expect(getFrequencyTier(1500)).toBe('core')
  })

  it('returns "intermediate" for ranks 1501-3500', () => {
    expect(getFrequencyTier(1501)).toBe('intermediate')
    expect(getFrequencyTier(2500)).toBe('intermediate')
    expect(getFrequencyTier(3500)).toBe('intermediate')
  })

  it('returns "expanding" for ranks 3501-6000', () => {
    expect(getFrequencyTier(3501)).toBe('expanding')
    expect(getFrequencyTier(4750)).toBe('expanding')
    expect(getFrequencyTier(6000)).toBe('expanding')
  })

  it('returns "advanced" for ranks above 6000', () => {
    expect(getFrequencyTier(6001)).toBe('advanced')
    expect(getFrequencyTier(10000)).toBe('advanced')
  })
})
