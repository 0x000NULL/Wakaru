import { z } from 'zod'

export const srsReviewSchema = z.object({
  itemId: z.string().min(1, 'Item ID is required').max(30),
  rating: z.enum(['again', 'hard', 'good', 'easy']),
  category: z.enum(['vocabulary', 'kanji']).default('vocabulary'),
})

export type SrsReviewInput = z.infer<typeof srsReviewSchema>

export const srsLearnSchema = z.object({
  itemId: z.string().min(1, 'Item ID is required').max(30),
  category: z.enum(['vocabulary', 'kanji']).default('vocabulary'),
})

export type SrsLearnInput = z.infer<typeof srsLearnSchema>

export const srsNewQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(20),
  category: z.enum(['vocabulary', 'kanji']).default('vocabulary'),
})

export type SrsNewQueryInput = z.infer<typeof srsNewQuerySchema>

export const srsDueQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(50),
  category: z.enum(['vocabulary', 'kanji']).default('vocabulary'),
})

export type SrsDueQueryInput = z.infer<typeof srsDueQuerySchema>

export const vocabularySearchSchema = z.object({
  q: z.string().min(1, 'Search query is required').max(100),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

export type VocabularySearchInput = z.infer<typeof vocabularySearchSchema>
