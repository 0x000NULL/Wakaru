'use client'

import { useOnboardingStore } from '@/store/onboarding-store'
import { WelcomeStep } from '@/components/onboarding/WelcomeStep'
import { ExperienceStep } from '@/components/onboarding/ExperienceStep'
import { GoalStep } from '@/components/onboarding/GoalStep'
import { PathSelectionStep } from '@/components/onboarding/PathSelectionStep'
import { CompletionStep } from '@/components/onboarding/CompletionStep'

export default function OnboardingPage() {
  const { currentStep, error } = useOnboardingStore()

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to Wakaru</h1>
          <p className="mt-1 text-muted-foreground">
            Let&apos;s set up your learning journey
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </div>
        )}

        {currentStep === 'welcome' ? (
          <WelcomeStep />
        ) : currentStep === 'experience' ? (
          <ExperienceStep />
        ) : currentStep === 'goals' ? (
          <GoalStep />
        ) : currentStep === 'path' ? (
          <PathSelectionStep />
        ) : (
          <CompletionStep />
        )}
      </div>
    </div>
  )
}
