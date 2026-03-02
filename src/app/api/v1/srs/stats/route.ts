import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

const DAY_RESET_HOUR = 4
const DEFAULT_DAILY_LIMIT = 20

function getTodayBoundary(): Date {
  const now = new Date()
  const boundary = new Date(now)
  boundary.setHours(DAY_RESET_HOUR, 0, 0, 0)

  if (now < boundary) {
    boundary.setDate(boundary.getDate() - 1)
  }

  return boundary
}

export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const todayBoundary = getTodayBoundary()

    const [dueCount, learnedToday, totalLearned, dbUser] = await Promise.all([
      prisma.userProgress.count({
        where: {
          user_id: user.id,
          category: 'vocabulary',
          next_review_at: { lte: new Date() },
        },
      }),
      prisma.userProgress.count({
        where: {
          user_id: user.id,
          category: 'vocabulary',
          created_at: { gte: todayBoundary },
        },
      }),
      prisma.userProgress.count({
        where: {
          user_id: user.id,
          category: 'vocabulary',
        },
      }),
      prisma.user.findUnique({
        where: { id: user.id },
        select: { settings: true },
      }),
    ])

    const settings = (dbUser?.settings as Record<string, unknown>) ?? {}
    const dailyNewWordLimit =
      typeof settings.dailyNewWordLimit === 'number'
        ? settings.dailyNewWordLimit
        : DEFAULT_DAILY_LIMIT

    return successResponse({
      dueCount,
      learnedToday,
      totalLearned,
      dailyNewWordLimit,
    })
  } catch (error) {
    console.error('SRS stats GET error:', error)
    return serverError()
  }
}
