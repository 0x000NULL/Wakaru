import type { FrequencyTier } from '@/types/vocabulary'

interface FrequencyRankRange {
  gte: number
  lte?: number
}

/**
 * Returns a Prisma-compatible frequency_rank range for a given tier.
 * Inverse of getFrequencyTier() in src/lib/utils/vocabulary.ts.
 *
 * | Tier          | Range     |
 * |---------------|-----------|
 * | essential     | 1-500     |
 * | core          | 501-1000  |
 * | intermediate  | 1001-2000 |
 * | expanding     | 2001-3000 |
 * | advanced      | 3001+     |
 */
export function getFrequencyRankRange(tier: FrequencyTier): FrequencyRankRange {
  switch (tier) {
    case 'essential':
      return { gte: 1, lte: 500 }
    case 'core':
      return { gte: 501, lte: 1000 }
    case 'intermediate':
      return { gte: 1001, lte: 2000 }
    case 'expanding':
      return { gte: 2001, lte: 3000 }
    case 'advanced':
      return { gte: 3001 }
  }
}
