import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const dueRecords = await prisma.userProgress.findMany({
      where: {
        user_id: user.id,
        category: 'hiragana',
        next_review_at: { lte: new Date() },
      },
      select: { item_id: true },
    })

    if (dueRecords.length === 0) {
      return successResponse({ dueCount: 0, characters: [] })
    }

    const kanaIds = dueRecords.map((r) => r.item_id)
    const kanaRecords = await prisma.kana.findMany({
      where: { id: { in: kanaIds } },
      select: { character: true, romaji: true, group: true },
      orderBy: { display_order: 'asc' },
    })

    return successResponse({
      dueCount: kanaRecords.length,
      characters: kanaRecords,
    })
  } catch (error) {
    console.error('Due reviews GET error:', error)
    return serverError()
  }
}
