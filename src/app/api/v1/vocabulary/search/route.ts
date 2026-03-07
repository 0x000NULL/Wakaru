import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { vocabularySearchSchema } from '@/lib/validations/srs'
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
    const result = vocabularySearchSchema.safeParse(params)
    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid query parameters', details)
    }

    const { q, limit } = result.data

    const items = await prisma.vocabulary.findMany({
      where: {
        OR: [
          { word: { contains: q, mode: 'insensitive' } },
          { reading: { contains: q, mode: 'insensitive' } },
          { meaning: { contains: q, mode: 'insensitive' } },
        ],
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
          take: 2,
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

    return successResponse({ query: q, count: formatted.length, items: formatted })
  } catch (error) {
    console.error('Vocabulary search GET error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
