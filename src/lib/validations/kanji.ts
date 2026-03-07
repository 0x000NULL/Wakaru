import { z } from 'zod'

export const kanjiQuerySchema = z.object({
  jlptLevel: z.enum(['N5', 'N4', 'N3', 'N2', 'N1']).optional(),
  grade: z.coerce.number().int().min(1).max(8).optional(),
  search: z.string().max(100).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).max(10000).default(0),
})

export type KanjiQueryInput = z.infer<typeof kanjiQuerySchema>
