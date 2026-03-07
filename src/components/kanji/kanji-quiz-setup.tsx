'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'
import type { KanjiQuizMode, KanjiQuizSessionConfig } from '@/types/kanji'

interface KanjiQuizSetupProps {
  onStart: (config: KanjiQuizSessionConfig) => void
  isLoadingKanji: boolean
}

const modeOptions: { value: KanjiQuizMode; label: string; description: string }[] = [
  {
    value: 'recognition',
    label: 'Recognition',
    description: 'See a kanji, pick the correct meaning',
  },
  {
    value: 'reading',
    label: 'Reading',
    description: 'See a kanji, pick the correct reading',
  },
  {
    value: 'production',
    label: 'Production',
    description: 'See a meaning, pick the correct kanji',
  },
  {
    value: 'mixed',
    label: 'Mixed',
    description: 'All question types combined',
  },
]

const jlptOptions: { value: string; label: string }[] = [
  { value: 'N5', label: 'N5' },
  { value: 'N4', label: 'N4' },
  { value: 'N3', label: 'N3' },
  { value: 'N2', label: 'N2' },
  { value: 'N1', label: 'N1' },
]

const countOptions = [5, 10, 15, 20, 30] as const
const countLabels: Record<number, string> = {
  5: '5',
  10: '10',
  15: '15',
  20: '20',
  30: '30',
}

export function KanjiQuizSetup({ onStart, isLoadingKanji }: KanjiQuizSetupProps) {
  const [mode, setMode] = useState<KanjiQuizMode>('mixed')
  const [selectedJlptLevels, setSelectedJlptLevels] = useState<Set<string>>(
    new Set(['N5']),
  )
  const [questionCount, setQuestionCount] = useState<number>(10)

  function toggleJlptLevel(level: string) {
    setSelectedJlptLevels((prev) => {
      const next = new Set(prev)
      if (next.has(level)) {
        if (next.size > 1) {
          next.delete(level)
        }
      } else {
        next.add(level)
      }
      return next
    })
  }

  function handleStart() {
    if (selectedJlptLevels.size === 0) return
    onStart({
      mode,
      jlptLevels: [...selectedJlptLevels],
      questionCount,
    })
  }

  return (
    <div className="space-y-8">
      {/* Mode selection */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">Quiz Mode</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setMode(opt.value)}
              className={cn(
                'rounded-lg border px-4 py-3 text-left transition-colors',
                mode === opt.value
                  ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                  : 'border-border hover:border-primary/40 hover:bg-muted/30',
              )}
            >
              <p className="font-medium text-foreground">{opt.label}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{opt.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* JLPT Level filter */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">JLPT Level</h2>
        <div className="flex flex-wrap gap-2">
          {jlptOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => toggleJlptLevel(opt.value)}
              className={cn(
                'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
                selectedJlptLevels.has(opt.value)
                  ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary/20'
                  : 'border-border text-foreground hover:border-primary/40 hover:bg-muted/30',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Question count */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">Questions</h2>
        <div className="flex gap-2">
          {countOptions.map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={cn(
                'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
                questionCount === count
                  ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary/20'
                  : 'border-border text-foreground hover:border-primary/40 hover:bg-muted/30',
              )}
            >
              {countLabels[count]}
            </button>
          ))}
        </div>
      </section>

      {/* Start button */}
      <Button
        size="lg"
        onClick={handleStart}
        disabled={selectedJlptLevels.size === 0 || isLoadingKanji}
        loading={isLoadingKanji}
        className="w-full sm:w-auto"
      >
        Start Practice
      </Button>
    </div>
  )
}
