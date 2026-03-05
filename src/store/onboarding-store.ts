import { create } from 'zustand'
import type {
  WelcomeStepInput,
  ExperienceStepInput,
  GoalsStepInput,
  PathStepInput,
} from '@/lib/validations/onboarding'

const STEPS = ['welcome', 'experience', 'goals', 'path', 'completion'] as const
type OnboardingStep = (typeof STEPS)[number]

interface OnboardingState {
  currentStep: OnboardingStep
  stepIndex: number
  welcome: WelcomeStepInput | null
  experience: ExperienceStepInput | null
  goals: GoalsStepInput | null
  path: PathStepInput | null
  isSubmitting: boolean
  error: string | null

  nextStep: () => void
  prevStep: () => void
  goToStep: (step: OnboardingStep) => void
  setWelcome: (data: WelcomeStepInput) => void
  setExperience: (data: ExperienceStepInput) => void
  setGoals: (data: GoalsStepInput) => void
  setPath: (data: PathStepInput) => void
  submitOnboarding: () => Promise<void>
  reset: () => void
}

const initialState = {
  currentStep: 'welcome' as OnboardingStep,
  stepIndex: 0,
  welcome: null,
  experience: null,
  goals: null,
  path: null,
  isSubmitting: false,
  error: null,
}

export const useOnboardingStore = create<OnboardingState>()((set, get) => ({
  ...initialState,

  nextStep: () => {
    const { stepIndex } = get()
    const next = Math.min(stepIndex + 1, STEPS.length - 1)
    set({ stepIndex: next, currentStep: STEPS[next] })
  },

  prevStep: () => {
    const { stepIndex } = get()
    const prev = Math.max(stepIndex - 1, 0)
    set({ stepIndex: prev, currentStep: STEPS[prev] })
  },

  goToStep: (step) => {
    const index = STEPS.indexOf(step)
    if (index !== -1) {
      set({ stepIndex: index, currentStep: step })
    }
  },

  setWelcome: (data) => set({ welcome: data }),
  setExperience: (data) => set({ experience: data }),
  setGoals: (data) => set({ goals: data }),
  setPath: (data) => set({ path: data }),

  submitOnboarding: async () => {
    const { welcome, experience, goals, path } = get()
    if (!welcome || !experience || !goals || !path) {
      set({ error: 'Please complete all steps before submitting' })
      return
    }

    set({ isSubmitting: true, error: null })
    try {
      const res = await fetch('/api/v1/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ welcome, experience, goals, path }),
      })
      const data = await res.json()
      if (!data.success) {
        throw new Error(data.error?.message ?? 'Failed to complete onboarding')
      }
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'Failed to complete onboarding' })
      throw err
    } finally {
      set({ isSubmitting: false })
    }
  },

  reset: () => set(initialState),
}))
