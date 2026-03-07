import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { kanjiQuerySchema } from '@/lib/validations/kanji'
import { parseJsonArray } from '@/lib/utils/kanji'
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
    const result = kanjiQuerySchema.safeParse(params)
    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid query parameters', details)
    }

    const { jlptLevel, grade, search, limit, offset } = result.data

    const where: Record<string, unknown> = {}
    if (jlptLevel) where.jlpt_level = jlptLevel
    if (grade) where.grade = grade
    if (search) {
      where.OR = [
        { character: { contains: search } },
        { meanings: { contains: search, mode: 'insensitive' } },
        { on_yomi: { contains: search } },
        { kun_yomi: { contains: search } },
      ]
    }

    const [items, total] = await Promise.all([
      prisma.kanji.findMany({
        where,
        orderBy: [{ frequency_rank: 'asc' }, { stroke_count: 'asc' }],
        skip: offset,
        take: limit,
        select: {
          id: true,
          character: true,
          meanings: true,
          on_yomi: true,
          kun_yomi: true,
          stroke_count: true,
          grade: true,
          jlpt_level: true,
          frequency_rank: true,
          mnemonic: true,
          _count: { select: { vocabulary: true } },
        },
      }),
      prisma.kanji.count({ where }),
    ])

    const formatted = items.map((item) => ({
      id: item.id,
      character: item.character,
      meanings: parseJsonArray(item.meanings),
      onYomi: parseJsonArray(item.on_yomi),
      kunYomi: parseJsonArray(item.kun_yomi),
      strokeCount: item.stroke_count,
      grade: item.grade,
      jlptLevel: item.jlpt_level,
      frequencyRank: item.frequency_rank,
      mnemonic: item.mnemonic,
      vocabularyCount: item._count.vocabulary,
    }))

    return successResponse(formatted, { total, limit, offset, hasMore: offset + limit < total })
  } catch (error) {
    console.error(
      'Kanji GET error:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return serverError()
  }
}
