import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const allPatterns = await prisma.grammarPattern.findMany({
      select: { id: true, pattern: true, jlpt_level: true },
    })

    const progressRecords = await prisma.userProgress.findMany({
      where: { user_id: user.id, category: 'grammar' },
      select: {
        item_id: true,
        status: true,
        total_reviews: true,
        correct_reviews: true,
        next_review_at: true,
      },
    })

    const progressMap = new Map(
      progressRecords.map((r) => [r.item_id, r]),
    )

    const detailed = allPatterns.map((pattern) => {
      const progress = progressMap.get(pattern.id)
      return {
        patternId: pattern.id,
        pattern: pattern.pattern,
        jlptLevel: pattern.jlpt_level,
        accuracy:
          progress && progress.total_reviews > 0
            ? Math.round((progress.correct_reviews / progress.total_reviews) * 100)
            : 0,
        totalReviews: progress?.total_reviews ?? 0,
        status: progress?.status ?? 'new',
        nextReviewAt: progress?.next_review_at?.toISOString() ?? null,
      }
    })

    return successResponse(detailed)
  } catch (error) {
    console.error(
      'Grammar progress detailed GET error:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return serverError()
  }
}
