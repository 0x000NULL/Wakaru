export interface UserSettings {
  dailyNewWordLimit: number
  dailyNewGrammarLimit: number
  reviewBatchSize: number | null // null = no limit
  audioAutoplay: boolean
  furiganaDisplay: 'always' | 'hover' | 'never'
  theme: 'system' | 'light' | 'dark'
  motivations?: string[]
  targetJlptLevel?: string
  dailyMinutes?: string
  learningPace?: string
  onboardingCompleted: boolean
}

export const DEFAULT_SETTINGS: UserSettings = {
  dailyNewWordLimit: 20,
  dailyNewGrammarLimit: 10,
  reviewBatchSize: null,
  audioAutoplay: true,
  furiganaDisplay: 'always',
  theme: 'system',
  onboardingCompleted: true,
}
