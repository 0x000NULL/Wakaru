import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import {
  successResponse,
  unauthorizedError,
  notFoundError,
  serverError,
} from '@/lib/utils/api-response'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const { id } = await params

    const vocab = await prisma.vocabulary.findUnique({
      where: { id },
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
          select: {
            sentence: {
              select: {
                id: true,
                japanese: true,
                english: true,
                furigana: true,
                audio_url: true,
              },
            },
          },
        },
      },
    })

    if (!vocab) return notFoundError('Vocabulary item not found')

    const progress = await prisma.userProgress.findUnique({
      where: {
        user_id_category_item_id: {
          user_id: user.id,
          category: 'vocabulary',
          item_id: id,
        },
      },
      select: {
        id: true,
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

    const srs = progress
      ? {
          id: progress.id,
          repetitions: progress.repetitions,
          easeFactor: progress.ease_factor,
          interval: progress.interval,
          status: progress.status,
          nextReviewAt: progress.next_review_at?.toISOString() ?? null,
          lastReviewedAt: progress.last_reviewed_at?.toISOString() ?? null,
          totalReviews: progress.total_reviews,
          correctReviews: progress.correct_reviews,
          accuracy:
            progress.total_reviews > 0
              ? Math.round((progress.correct_reviews / progress.total_reviews) * 100)
              : 0,
        }
      : null

    return successResponse({
      ...vocab,
      sentences: vocab.sentences.map((s) => s.sentence),
      srs,
    })
  } catch (error) {
    console.error('Vocabulary detail GET error:', error)
    return serverError()
  }
}
