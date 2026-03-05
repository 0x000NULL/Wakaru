import { z } from 'zod'

export const welcomeStepSchema = z.object({
  motivations: z
    .array(
      z.enum([
        'anime-manga',
        'travel',
        'career',
        'intellectual-challenge',
        'heritage',
        'other',
      ])
    )
    .min(1, 'Please select at least one motivation'),
})

export type WelcomeStepInput = z.infer<typeof welcomeStepSchema>

export const experienceStepSchema = z.object({
  level: z.enum(['complete-beginner', 'some-exposure', 'studied-before', 'intermediate']),
  previousStudy: z.array(z.string()).default([]),
})

export type ExperienceStepInput = z.infer<typeof experienceStepSchema>

export const goalsStepSchema = z.object({
  targetJlptLevel: z.enum(['N5', 'N4', 'N3']),
  dailyMinutes: z.enum(['15', '30', '45', '60']),
  learningPace: z.enum(['relaxed', 'normal', 'intensive']),
})

export type GoalsStepInput = z.infer<typeof goalsStepSchema>

export const pathStepSchema = z.object({
  selectedPathId: z.string().min(1, 'Please select a learning path'),
})

export type PathStepInput = z.infer<typeof pathStepSchema>

export const assessmentSubmitSchema = z.object({
  answers: z
    .array(z.number().int().min(0).max(3).nullable())
    .length(13, 'Must provide exactly 13 answers'),
})

export type AssessmentSubmitInput = z.infer<typeof assessmentSubmitSchema>

export const onboardingCompleteSchema = z.object({
  welcome: welcomeStepSchema,
  experience: experienceStepSchema,
  goals: goalsStepSchema,
  path: pathStepSchema,
})

export type OnboardingCompleteInput = z.infer<typeof onboardingCompleteSchema>
