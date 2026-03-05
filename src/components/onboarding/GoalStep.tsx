'use client'

import { useState, useMemo } from 'react'
import { useOnboardingStore } from '@/store/onboarding-store'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'

type JlptLevel = 'N5' | 'N4' | 'N3'
type DailyMinutes = '15' | '30' | '45' | '60'
type LearningPace = 'relaxed' | 'normal' | 'intensive'

const JLPT_OPTIONS: { id: JlptLevel; label: string; description: string }[] = [
  { id: 'N5', label: 'JLPT N5', description: 'Basic — greetings, simple sentences, hiragana & katakana' },
  { id: 'N4', label: 'JLPT N4', description: 'Elementary — everyday conversations, basic kanji (~300)' },
  { id: 'N3', label: 'JLPT N3', description: 'Intermediate — natural speech, ~600 kanji, news articles' },
]

const TIME_OPTIONS: { id: DailyMinutes; label: string }[] = [
  { id: '15', label: '15 min' },
  { id: '30', label: '30 min' },
  { id: '45', label: '45 min' },
  { id: '60', label: '60 min' },
]

const PACE_OPTIONS: { id: LearningPace; label: string; description: string }[] = [
  { id: 'relaxed', label: 'Relaxed', description: 'Steady progress, more review time' },
  { id: 'normal', label: 'Normal', description: 'Balanced new material and review' },
  { id: 'intensive', label: 'Intensive', description: 'Fast-paced, more new material daily' },
]

const BASE_HOURS: Record<JlptLevel, number> = { N5: 200, N4: 400, N3: 700 }
const PACE_MULTIPLIER: Record<LearningPace, number> = { relaxed: 1.3, normal: 1.0, intensive: 0.8 }

function estimateMonths(
  level: JlptLevel,
  minutes: DailyMinutes,
  pace: LearningPace
): number {
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

export function GoalStep() {
  const [targetJlptLevel, setTargetJlptLevel] = useState<JlptLevel | null>(null)
  const [dailyMinutes, setDailyMinutes] = useState<DailyMinutes | null>(null)
  const [learningPace, setLearningPace] = useState<LearningPace | null>(null)
  const { setGoals, nextStep } = useOnboardingStore()

  const allSelected = targetJlptLevel && dailyMinutes && learningPace

  const timeline = useMemo(() => {
    if (!targetJlptLevel || !dailyMinutes || !learningPace) return null
    const months = estimateMonths(targetJlptLevel, dailyMinutes, learningPace)
    return formatTimeline(months)
  }, [targetJlptLevel, dailyMinutes, learningPace])

  const handleContinue = () => {
    if (!allSelected) return
    setGoals({ targetJlptLevel, dailyMinutes, learningPace })
    nextStep()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center animate-[fadeSlideUp_0.6s_ease-out]">
        <h2 className="text-2xl font-bold">Set Your Goals</h2>
        <p className="text-muted-foreground">
          We&apos;ll build a personalized study plan based on your targets.
        </p>
      </div>

      {/* JLPT Level */}
      <div className="space-y-3 animate-[fadeSlideUp_0.6s_ease-out_0.1s_both]">
        <h3 className="text-sm font-medium text-muted-foreground">Target JLPT Level</h3>
        <div className="space-y-2">
          {JLPT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTargetJlptLevel(opt.id)}
              className={cn(
                'w-full rounded-lg border p-4 text-left transition-all',
                'hover:border-primary/50 hover:bg-primary/5',
                targetJlptLevel === opt.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border'
              )}
            >
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Study Time */}
      <div className="space-y-3 animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]">
        <h3 className="text-sm font-medium text-muted-foreground">Daily Study Time</h3>
        <div className="grid grid-cols-4 gap-2">
          {TIME_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDailyMinutes(opt.id)}
              className={cn(
                'rounded-lg border p-3 text-center text-sm font-medium transition-all',
                'hover:border-primary/50 hover:bg-primary/5',
                dailyMinutes === opt.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-foreground'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Pace */}
      <div className="space-y-3 animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]">
        <h3 className="text-sm font-medium text-muted-foreground">Learning Pace</h3>
        <div className="grid grid-cols-3 gap-2">
          {PACE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setLearningPace(opt.id)}
              className={cn(
                'rounded-lg border p-4 text-center transition-all',
                'hover:border-primary/50 hover:bg-primary/5',
                learningPace === opt.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border'
              )}
            >
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Estimate */}
      {timeline && (
        <div className="rounded-lg border bg-primary/5 p-4 text-center animate-[fadeSlideUp_0.4s_ease-out]">
          <p className="text-xs text-muted-foreground">Estimated timeline</p>
          <p className="mt-1 text-lg font-semibold text-primary">{timeline}</p>
        </div>
      )}

      {/* Continue */}
      <div className="animate-[fadeSlideUp_0.6s_ease-out_0.4s_both]">
        <Button
          size="lg"
          className="w-full"
          disabled={!allSelected}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
