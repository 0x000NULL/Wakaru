'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useOnboardingStore } from '@/store/onboarding-store'
import { useAuthStore } from '@/store/auth-store'
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

const CATEGORY_COLORS: Record<MilestoneCategory, string> = {
  hiragana: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  katakana: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  vocabulary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  grammar: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  kanji: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  reading: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

const PACE_LABELS: Record<LearningPace, string> = {
  relaxed: 'Relaxed',
  normal: 'Normal',
  intensive: 'Intensive',
}

export function CompletionStep() {
  const router = useRouter()
  const { goals, path, prevStep, isSubmitting, submitOnboarding } = useOnboardingStore()
  const completeOnboarding = useAuthStore((s) => s.completeOnboarding)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const selectedPath = ALL_LEARNING_PATHS.find((p) => p.id === path?.selectedPathId)
  const firstMilestone = selectedPath?.milestones[0]

  const timeline =
    goals && selectedPath
      ? formatTimeline(
          estimateMonths(
            selectedPath.jlptLevel as JlptLevel,
            goals.dailyMinutes as DailyMinutes,
            goals.learningPace as LearningPace,
          ),
        )
      : null

  const handleComplete = async () => {
    setSubmitError(null)
    try {
      await submitOnboarding()
      completeOnboarding()
      if (firstMilestone) {
        localStorage.setItem(
          'wakaru-show-welcome',
          JSON.stringify({
            milestoneName: firstMilestone.title,
            milestoneHref: firstMilestone.linkHref ?? '/dashboard',
          }),
        )
      }
      router.push('/dashboard')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center animate-[fadeSlideUp_0.6s_ease-out]">
        <h2 className="text-2xl font-bold">Your Study Plan</h2>
        <p className="text-muted-foreground">
          Here&apos;s a summary of your personalized learning journey.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-lg border bg-card p-5 space-y-3 animate-[fadeSlideUp_0.6s_ease-out_0.1s_both]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Learning Path</span>
          <span className="text-sm font-medium">{selectedPath?.name ?? 'N/A'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Daily Goal</span>
          <span className="text-sm font-medium">{goals?.dailyMinutes ?? '?'} minutes/day</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Pace</span>
          <span className="text-sm font-medium">
            {goals ? PACE_LABELS[goals.learningPace as LearningPace] : 'N/A'}
          </span>
        </div>
        {timeline && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Estimated Timeline</span>
            <span className="text-sm font-medium text-primary">{timeline}</span>
          </div>
        )}
      </div>

      {/* First milestone highlight */}
      {firstMilestone && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 space-y-2 animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            First Milestone
          </p>
          <p className="text-base font-semibold">{firstMilestone.title}</p>
          <p className="text-sm text-muted-foreground">{firstMilestone.description}</p>
          <span
            className={cn(
              'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
              CATEGORY_COLORS[firstMilestone.category],
            )}
          >
            {firstMilestone.category}
          </span>
        </div>
      )}

      {/* Reassurance */}
      <p className="text-center text-xs text-muted-foreground animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]">
        You can adjust your goals anytime in Settings.
      </p>

      {submitError && (
        <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {submitError}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between animate-[fadeSlideUp_0.6s_ease-out_0.4s_both]">
        <Button variant="ghost" onClick={prevStep} disabled={isSubmitting}>
          Back
        </Button>
        <Button onClick={handleComplete} loading={isSubmitting}>
          Complete Setup
        </Button>
      </div>
    </div>
  )
}
