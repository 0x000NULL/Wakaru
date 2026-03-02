import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { srsDueQuerySchema } from '@/lib/validations/srs'
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

    const { limit } = result.data
    const now = new Date()

    const totalDue = await prisma.userProgress.count({
      where: {
        user_id: user.id,
        category: 'vocabulary',
        next_review_at: { lte: now },
      },
    })

    if (totalDue === 0) {
      return successResponse({ dueCount: 0, items: [] })
    }

    const dueRecords = await prisma.userProgress.findMany({
      where: {
        user_id: user.id,
        category: 'vocabulary',
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

    const vocabIds = dueRecords.map((r) => r.item_id)
    const vocabItems = await prisma.vocabulary.findMany({
      where: { id: { in: vocabIds } },
      select: {
        id: true,
        word: true,
        reading: true,
        meaning: true,
        part_of_speech: true,
        jlpt_level: true,
        frequency_rank: true,
        tags: true,
        audio_url: true,
        sentences: {
          take: 3,
          select: {
            sentence: {
              select: {
                id: true,
                japanese: true,
                english: true,
                furigana: true,
              },
            },
          },
        },
      },
    })

    const vocabMap = new Map(vocabItems.map((v) => [v.id, v]))

    const items = dueRecords
      .map((record) => {
        const vocab = vocabMap.get(record.item_id)
        if (!vocab) return null
        return {
          ...vocab,
          sentences: vocab.sentences.map((s) => s.sentence),
          srs: {
            repetitions: record.repetitions,
            easeFactor: record.ease_factor,
            interval: record.interval,
            status: record.status,
            nextReviewAt: record.next_review_at?.toISOString() ?? null,
            lastReviewedAt: record.last_reviewed_at?.toISOString() ?? null,
            totalReviews: record.total_reviews,
            correctReviews: record.correct_reviews,
          },
        }
      })
      .filter(Boolean)

    return successResponse({ dueCount: totalDue, items })
  } catch (error) {
    console.error('SRS due GET error:', error)
    return serverError()
  }
}
