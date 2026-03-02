import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { srsNewQuerySchema } from '@/lib/validations/srs'
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

    const { limit } = result.data

    const existingProgress = await prisma.userProgress.findMany({
      where: { user_id: user.id, category: 'vocabulary' },
      select: { item_id: true },
    })
    const learnedIds = existingProgress.map((p) => p.item_id)

    const items = await prisma.vocabulary.findMany({
      where: {
        id: { notIn: learnedIds.length > 0 ? learnedIds : undefined },
        frequency_rank: { not: null },
      },
      orderBy: { frequency_rank: 'asc' },
      take: limit,
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

    const formatted = items.map((item) => ({
      ...item,
      sentences: item.sentences.map((s) => s.sentence),
    }))

    return successResponse({ count: formatted.length, items: formatted })
  } catch (error) {
    console.error('SRS new GET error:', error)
    return serverError()
  }
}
