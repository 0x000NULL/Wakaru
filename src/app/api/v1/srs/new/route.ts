import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { srsNewQuerySchema } from '@/lib/validations/srs'
import { fetchNewItems } from '@/lib/utils/srs-content-resolver'
import {
  successResponse,
  validationError,
  unauthorizedError,
  serverError,
} from '@/lib/utils/api-response'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const params = Object.fromEntries(request.nextUrl.searchParams)
    const result = srsNewQuerySchema.safeParse(params)
    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid query parameters', details)
    }

    const { limit, category } = result.data

    const existingProgress = await prisma.userProgress.findMany({
      where: { user_id: user.id, category },
      select: { item_id: true },
    })
    const learnedIds = existingProgress.map((p) => p.item_id)

    const items = await fetchNewItems(category, learnedIds, limit)

    return successResponse({ count: items.length, items })
  } catch (error) {
    console.error('SRS new GET error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
