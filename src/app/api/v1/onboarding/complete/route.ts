import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { onboardingCompleteSchema } from '@/lib/validations/onboarding'
import {
  successResponse,
  validationError,
  unauthorizedError,
  serverError,
} from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    const body = await request.json()
    const result = onboardingCompleteSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid onboarding data', details)
    }

    const { welcome, experience, goals, path } = result.data

    await prisma.$transaction(async (tx) => {
      // Merge onboarding data into user settings and mark complete
      const currentUser = await tx.user.findUniqueOrThrow({
        where: { id: user.id },
        select: { settings: true },
      })

      const currentSettings = (currentUser.settings as Record<string, unknown>) ?? {}

      await tx.user.update({
        where: { id: user.id },
        data: {
          settings: {
            ...currentSettings,
            onboardingCompleted: true,
            motivations: welcome.motivations,
            experienceLevel: experience.level,
            previousStudy: experience.previousStudy,
            targetJlptLevel: goals.targetJlptLevel,
            dailyMinutes: goals.dailyMinutes,
            learningPace: goals.learningPace,
          },
        },
      })

      // Enroll user in selected learning path
      await tx.userLearningPath.upsert({
        where: {
          user_id_path_id: {
            user_id: user.id,
            path_id: path.selectedPathId,
          },
        },
        create: {
          user_id: user.id,
          path_id: path.selectedPathId,
        },
        update: {},
      })
    })

    return successResponse({ onboardingCompleted: true })
  } catch (error) {
    console.error('Onboarding complete error:', error)
    return serverError()
  }
}
