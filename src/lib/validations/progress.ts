import { z } from 'zod'

export const quizResultSchema = z.object({
  answers: z
    .array(
      z.object({
        character: z.string().min(1, 'Character is required'),
        isCorrect: z.boolean(),
      })
    )
    .min(1, 'At least one answer is required'),
})

export type QuizResultInput = z.infer<typeof quizResultSchema>
