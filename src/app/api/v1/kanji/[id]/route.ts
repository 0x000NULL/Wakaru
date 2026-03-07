import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { isValidId } from '@/lib/utils/validate-id'
import { parseJsonArray } from '@/lib/utils/kanji'
import {
  successResponse,
  unauthorizedError,
  notFoundError,
  validationError,
  serverError,
} from '@/lib/utils/api-response'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const { id } = await params
    if (!isValidId(id)) return validationError('Invalid kanji ID')

    const kanji = await prisma.kanji.findUnique({
      where: { id },
      select: {
        id: true,
        character: true,
        meanings: true,
        on_yomi: true,
        kun_yomi: true,
        nanori: true,
        radicals: true,
        stroke_count: true,
        grade: true,
        jlpt_level: true,
        frequency_rank: true,
        mnemonic: true,
        vocabulary: {
          take: 10,
          select: {
            vocabulary: {
              select: {
                id: true,
                word: true,
                reading: true,
                meaning: true,
              },
            },
          },
        },
      },
    })

    if (!kanji) return notFoundError('Kanji not found')

    const progress = await prisma.userProgress.findUnique({
      where: {
        user_id_category_item_id: {
          user_id: user.id,
          category: 'kanji',
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
      id: kanji.id,
      character: kanji.character,
      meanings: parseJsonArray(kanji.meanings),
      onYomi: parseJsonArray(kanji.on_yomi),
      kunYomi: parseJsonArray(kanji.kun_yomi),
      nanori: parseJsonArray(kanji.nanori),
      radicals: parseJsonArray(kanji.radicals),
      strokeCount: kanji.stroke_count,
      grade: kanji.grade,
      jlptLevel: kanji.jlpt_level,
      frequencyRank: kanji.frequency_rank,
      mnemonic: kanji.mnemonic,
      vocabulary: kanji.vocabulary.map((kv) => kv.vocabulary),
      srs,
    })
  } catch (error) {
    console.error(
      'Kanji detail GET error:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return serverError()
  }
}
