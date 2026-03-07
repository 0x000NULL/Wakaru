import { z } from 'zod'

export const grammarQuerySchema = z.object({
  jlptLevel: z.enum(['N5', 'N4', 'N3', 'N2', 'N1']).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  search: z.string().max(100).optional(),
  limit: z.coerce.number().int().min(1).max(500).default(20),
  offset: z.coerce.number().int().min(0).max(10000).default(0),
})

export type GrammarQueryInput = z.infer<typeof grammarQuerySchema>

export const grammarQuizResultSchema = z.object({
  answers: z
    .array(
      z.object({
        patternId: z.string().min(1).max(30),
        isCorrect: z.boolean(),
      }),
    )
    .min(1),
})
