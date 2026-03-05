'use client'

import { useState } from 'react'
import { useOnboardingStore } from '@/store/onboarding-store'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'

const MOTIVATIONS = [
  { id: 'anime-manga', label: 'Anime & Manga', icon: '🎬' },
  { id: 'travel', label: 'Travel to Japan', icon: '✈️' },
  { id: 'career', label: 'Career & Business', icon: '💼' },
  { id: 'intellectual-challenge', label: 'Intellectual Challenge', icon: '🧠' },
  { id: 'heritage', label: 'Heritage & Roots', icon: '🏯' },
  { id: 'other', label: 'Other', icon: '✨' },
] as const

type MotivationId = (typeof MOTIVATIONS)[number]['id']

export function WelcomeStep() {
  const [selected, setSelected] = useState<MotivationId[]>([])
  const { setWelcome, nextStep } = useOnboardingStore()

  const toggleMotivation = (id: MotivationId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selected.length === 0) return
    setWelcome({ motivations: [...selected] })
    nextStep()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center animate-[fadeSlideUp_0.6s_ease-out]">
        <h1 className="text-4xl font-bold tracking-tight">Wakaru</h1>
        <p className="text-lg text-muted-foreground">分かる — to understand</p>
        <p className="mx-auto max-w-sm text-sm text-muted-foreground">
          A research-backed path from beginner to fluency through comprehensible input and spaced
          repetition.
        </p>
      </div>

      <div className="space-y-3 animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]">
        <h2 className="text-center text-sm font-medium text-muted-foreground">
          What motivates you to learn Japanese?
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {MOTIVATIONS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => toggleMotivation(m.id)}
              className={cn(
                'flex flex-col items-center gap-2 rounded-lg border p-4 text-sm font-medium transition-all',
                'hover:border-primary/50 hover:bg-primary/5',
                selected.includes(m.id)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-foreground'
              )}
            >
              <span className="text-2xl">{m.icon}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="animate-[fadeSlideUp_0.6s_ease-out_0.4s_both]">
        <Button
          size="lg"
          className="w-full"
          disabled={selected.length === 0}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
