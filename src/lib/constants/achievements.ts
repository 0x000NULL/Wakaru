import type { Achievement, HiraganaProgressSummary } from '@/types/progress'

interface AchievementDefinition {
  id: string
  title: string
  description: string
  check: (progress: HiraganaProgressSummary) => boolean
}

const VOWEL_CHARACTERS = ['あ', 'い', 'う', 'え', 'お']

const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    id: 'first-step',
    title: 'First Step',
    description: 'Learn your first hiragana character',
    check: (p) => p.learnedCount >= 1,
  },
  {
    id: 'vowel-master',
    title: 'Vowel Master',
    description: 'Learn all 5 vowel characters',
    check: (p) => {
      const learnedChars = new Set(
        p.characters.filter((c) => c.status !== 'new').map((c) => c.character),
      )
      return VOWEL_CHARACTERS.every((v) => learnedChars.has(v))
    },
  },
  {
    id: 'basic-complete',
    title: 'Basic Complete',
    description: 'Learn all 46 basic hiragana characters',
    check: (p) => {
      const basicGroups = new Set([
        'vowel',
        'k-row',
        's-row',
        't-row',
        'n-row',
        'h-row',
        'm-row',
        'y-row',
        'r-row',
        'w-row',
      ])
      const basicLearned = p.characters.filter(
        (c) => basicGroups.has(c.group) && c.status !== 'new',
      )
      return basicLearned.length >= 46
    },
  },
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Learn 50% of all hiragana characters',
    check: (p) => p.completionPercent >= 50,
  },
  {
    id: 'full-set',
    title: 'Full Set',
    description: 'Learn all 79 hiragana characters',
    check: (p) => p.learnedCount >= 79,
  },
  {
    id: 'sharp-eye',
    title: 'Sharp Eye',
    description: 'Achieve 90%+ accuracy with 10+ characters reviewed',
    check: (p) => {
      const reviewed = p.characters.filter((c) => c.totalReviews > 0)
      return reviewed.length >= 10 && p.overallAccuracy >= 90
    },
  },
  {
    id: 'hiragana-master',
    title: 'Hiragana Master',
    description: 'Master all 79 hiragana characters',
    check: (p) => p.masteredCount >= 79,
  },
]

export function computeAchievements(progress: HiraganaProgressSummary): Achievement[] {
  return ACHIEVEMENT_DEFINITIONS.map((def) => ({
    id: def.id,
    title: def.title,
    description: def.description,
    achieved: def.check(progress),
  }))
}
