import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const levels = ['N5', 'N4', 'N3', 'N2', 'N1']

    const [patternCounts, progressRecords] = await Promise.all([
      prisma.grammarPattern.groupBy({
        by: ['jlpt_level'],
        _count: true,
      }),
      prisma.userProgress.findMany({
        where: { user_id: user.id, category: 'grammar' },
        select: {
          item_id: true,
          interval: true,
        },
      }),
    ])

    // Get all grammar pattern IDs with their JLPT levels
    const allPatterns = await prisma.grammarPattern.findMany({
      select: { id: true, jlpt_level: true },
    })

    const patternLevelMap = new Map(
      allPatterns.map((p) => [p.id, p.jlpt_level]),
    )

    const countByLevel = new Map(
      patternCounts.map((c) => [c.jlpt_level, c._count]),
    )

    const progressByLevel = new Map<string, { learned: number; mastered: number }>()
    for (const record of progressRecords) {
      const level = patternLevelMap.get(record.item_id)
      if (!level) continue

      if (!progressByLevel.has(level)) {
        progressByLevel.set(level, { learned: 0, mastered: 0 })
      }

      const stats = progressByLevel.get(level)!
      stats.learned += 1
      if (record.interval >= 30) {
        stats.mastered += 1
      }
    }

    const result: Record<string, { total: number; learned: number; mastered: number }> = {}
    for (const level of levels) {
      const total = countByLevel.get(level) ?? 0
      const progress = progressByLevel.get(level) ?? { learned: 0, mastered: 0 }
      if (total > 0) {
        result[level] = {
          total,
          learned: progress.learned,
          mastered: progress.mastered,
        }
      }
    }

    return successResponse(result)
  } catch (error) {
    console.error(
      'Grammar progress by-level GET error:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return serverError()
  }
}
