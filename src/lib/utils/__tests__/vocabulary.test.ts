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

  it('returns "core" for ranks 501-1000', () => {
    expect(getFrequencyTier(501)).toBe('core')
    expect(getFrequencyTier(750)).toBe('core')
    expect(getFrequencyTier(1000)).toBe('core')
  })

  it('returns "intermediate" for ranks 1001-2000', () => {
    expect(getFrequencyTier(1001)).toBe('intermediate')
    expect(getFrequencyTier(1500)).toBe('intermediate')
    expect(getFrequencyTier(2000)).toBe('intermediate')
  })

  it('returns "expanding" for ranks 2001-3000', () => {
    expect(getFrequencyTier(2001)).toBe('expanding')
    expect(getFrequencyTier(2500)).toBe('expanding')
    expect(getFrequencyTier(3000)).toBe('expanding')
  })

  it('returns "advanced" for ranks above 3000', () => {
    expect(getFrequencyTier(3001)).toBe('advanced')
    expect(getFrequencyTier(10000)).toBe('advanced')
  })
})
