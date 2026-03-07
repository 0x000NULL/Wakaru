import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { srsDueQuerySchema } from '@/lib/validations/srs'
import { fetchDueItems } from '@/lib/utils/srs-content-resolver'
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
    const result = srsDueQuerySchema.safeParse(params)
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
    const now = new Date()

    const totalDue = await prisma.userProgress.count({
      where: {
        user_id: user.id,
        category,
        next_review_at: { lte: now },
      },
    })

    if (totalDue === 0) {
      return successResponse({ dueCount: 0, items: [] })
    }

    const dueRecords = await prisma.userProgress.findMany({
      where: {
        user_id: user.id,
        category,
        next_review_at: { lte: now },
      },
      orderBy: { next_review_at: 'asc' },
      take: limit,
      select: {
        item_id: true,
        repetitions: true,
        ease_factor: true,
        interval: true,
        status: true,
        next_review_at: true,
        last_reviewed_at: true,
        total_reviews: true,
        correct_reviews: true,
      },
    })

    const items = await fetchDueItems(category, dueRecords)

    return successResponse({ dueCount: totalDue, items })
  } catch (error) {
    console.error('SRS due GET error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
