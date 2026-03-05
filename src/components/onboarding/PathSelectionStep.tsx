'use client'

import { useState, useMemo } from 'react'
import { useOnboardingStore } from '@/store/onboarding-store'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { ALL_LEARNING_PATHS } from '@/lib/constants/learning-paths'
import type { MilestoneCategory } from '@/types/learning-path'

type JlptLevel = 'N5' | 'N4' | 'N3'
type DailyMinutes = '15' | '30' | '45' | '60'
type LearningPace = 'relaxed' | 'normal' | 'intensive'

const BASE_HOURS: Record<JlptLevel, number> = { N5: 200, N4: 400, N3: 700 }
const PACE_MULTIPLIER: Record<LearningPace, number> = { relaxed: 1.3, normal: 1.0, intensive: 0.8 }

function estimateMonths(level: JlptLevel, minutes: DailyMinutes, pace: LearningPace): number {
  const adjustedHours = BASE_HOURS[level] * PACE_MULTIPLIER[pace]
  const hoursPerMonth = (Number(minutes) / 60) * 30
  return Math.ceil(adjustedHours / hoursPerMonth)
}

function formatTimeline(months: number): string {
  if (months < 12) return `~${months} months`
  const years = Math.floor(months / 12)
  const remaining = months % 12
  if (remaining === 0) return `~${years} year${years > 1 ? 's' : ''}`
  return `~${years} year${years > 1 ? 's' : ''} ${remaining} month${remaining > 1 ? 's' : ''}`
}

function getRecommendedPathId(
  experienceLevel: string | undefined,
  targetJlptLevel: string | undefined,
): string {
  if (experienceLevel === 'complete-beginner' || experienceLevel === 'some-exposure') {
    return 'n5'
  }
  if (targetJlptLevel) {
    const match = ALL_LEARNING_PATHS.find(
      (p) => p.jlptLevel === targetJlptLevel && p.milestones.length > 0,
    )
    if (match) return match.id
  }
  return 'n5'
}

const CATEGORY_COLORS: Record<MilestoneCategory, string> = {
  hiragana: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  katakana: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  vocabulary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  grammar: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  kanji: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  reading: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

const DELAY_CLASSES = [
  'animate-[fadeSlideUp_0.6s_ease-out_0.1s_both]',
  'animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]',
  'animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]',
]

export function PathSelectionStep() {
  const { experience, goals, path: existingPath, setPath, nextStep, prevStep } =
    useOnboardingStore()

  const recommendedPathId = useMemo(
    () => getRecommendedPathId(experience?.level, goals?.targetJlptLevel),
    [experience?.level, goals?.targetJlptLevel],
  )

  const [selectedPathId, setSelectedPathId] = useState<string>(
    existingPath?.selectedPathId ?? recommendedPathId,
  )

  const timeline = useMemo(() => {
    if (!goals) return null
    const path = ALL_LEARNING_PATHS.find((p) => p.id === selectedPathId)
    if (!path || path.milestones.length === 0) return null
    const months = estimateMonths(
      path.jlptLevel as JlptLevel,
      goals.dailyMinutes as DailyMinutes,
      goals.learningPace as LearningPace,
    )
    return formatTimeline(months)
  }, [goals, selectedPathId])

  const handleContinue = () => {
    setPath({ selectedPathId })
    nextStep()
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center animate-[fadeSlideUp_0.6s_ease-out]">
        <h2 className="text-2xl font-bold">Your Learning Path</h2>
        <p className="text-muted-foreground">
          We recommend the{' '}
          <span className="font-medium text-foreground">
            {ALL_LEARNING_PATHS.find((p) => p.id === recommendedPathId)?.name}
          </span>{' '}
          based on your experience and goals.
        </p>
      </div>

      <div className="space-y-3">
        {ALL_LEARNING_PATHS.map((path, i) => {
          const isAvailable = path.milestones.length > 0
          const isSelected = selectedPathId === path.id
          const isRecommended = path.id === recommendedPathId
          const categories = [...new Set(path.milestones.map((m) => m.category))]

          return (
            <button
              key={path.id}
              type="button"
              disabled={!isAvailable}
              onClick={() => setSelectedPathId(path.id)}
              className={cn(
                'w-full rounded-lg border p-4 text-left transition-all',
                DELAY_CLASSES[i],
                isAvailable && 'hover:border-primary/50 hover:bg-primary/5',
                isSelected && isAvailable
                  ? 'border-primary bg-primary/10'
                  : 'border-border',
                !isAvailable && 'cursor-not-allowed opacity-50',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-semibold">
                      {path.jlptLevel}
                    </span>
                    <span className="text-sm font-medium">{path.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{path.description}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {isRecommended && isAvailable && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Recommended
                    </span>
                  )}
                  {!isAvailable && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {isAvailable && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{path.milestones.length} milestones</span>
                    {timeline && isSelected && <span>{timeline}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        className={cn(
                          'rounded-full px-2 py-0.5 text-xs font-medium',
                          CATEGORY_COLORS[cat],
                        )}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!isAvailable && (
                <p className="mt-2 text-xs text-muted-foreground">Content is being developed</p>
              )}
            </button>
          )
        })}
      </div>

      <div className="flex justify-between animate-[fadeSlideUp_0.6s_ease-out_0.4s_both]">
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </div>
  )
}
