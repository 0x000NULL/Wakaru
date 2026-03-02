import { z } from 'zod'

export const updateSettingsSchema = z.object({
  dailyNewWordLimit: z.coerce.number().int().min(1).max(100).optional(),
})

export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>
