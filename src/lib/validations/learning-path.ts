import { z } from 'zod'

export const enrollSchema = z.object({
  pathSlug: z.string().min(1).max(20).regex(/^[a-z0-9-]+$/, 'Invalid path slug format'),
})
