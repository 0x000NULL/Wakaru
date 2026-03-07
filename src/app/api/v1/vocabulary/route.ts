import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { vocabularyQuerySchema } from '@/lib/validations/vocabulary'
import { getFrequencyRankRange } from '@/lib/utils/frequency-tier-range'
import type { Prisma } from '@prisma/client'
import {
  cachedSuccessResponse,
  validationError,
  unauthorizedError,
  serverError,
} from '@/lib/utils/api-response'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const params = Object.fromEntries(request.nextUrl.searchParams)
    const result = vocabularyQuerySchema.safeParse(params)
    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid query parameters', details)
    }

    const { jlptLevel, frequencyTier, search, limit, offset } = result.data

    const where: Prisma.VocabularyWhereInput = {}

    if (jlptLevel) {
      where.jlpt_level = jlptLevel
    }

    if (frequencyTier) {
      const range = getFrequencyRankRange(frequencyTier)
      where.frequency_rank = range.lte ? { gte: range.gte, lte: range.lte } : { gte: range.gte }
    }

    if (search) {
      where.OR = [
        { word: { contains: search, mode: 'insensitive' } },
        { reading: { contains: search, mode: 'insensitive' } },
        { meaning: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [total, items] = await Promise.all([
      prisma.vocabulary.count({ where }),
      prisma.vocabulary.findMany({
        where,
        orderBy: { frequency_rank: 'asc' },
        skip: offset,
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
      }),
    ])

    const formatted = items.map((item) => ({
      ...item,
      sentences: item.sentences.map((s) => s.sentence),
    }))

    return cachedSuccessResponse(formatted, 300, {
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
    })
  } catch (error) {
    console.error('Vocabulary GET error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
