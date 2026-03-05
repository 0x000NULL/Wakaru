import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import prisma from '@/lib/db'
import { assessmentSubmitSchema } from '@/lib/validations/onboarding'
import {
  ASSESSMENT_QUESTIONS,
  deriveLevel,
  derivePreviousStudy,
  getSectionScores,
  getTotalScore,
} from '@/lib/constants/assessment-questions'
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
    const result = assessmentSubmitSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid assessment data', details)
    }

    const { answers } = result.data
    const totalScore = getTotalScore(answers, ASSESSMENT_QUESTIONS)
    const maxScore = ASSESSMENT_QUESTIONS.length
    const level = deriveLevel(totalScore)
    const previousStudy = derivePreviousStudy(answers, ASSESSMENT_QUESTIONS)
    const sections = getSectionScores(answers, ASSESSMENT_QUESTIONS)

    const currentUser = await prisma.user.findUniqueOrThrow({
      where: { id: user.id },
      select: { settings: true },
    })

    const currentSettings = (currentUser.settings as Record<string, unknown>) ?? {}

    await prisma.user.update({
      where: { id: user.id },
      data: {
        settings: {
          ...currentSettings,
          assessmentScore: totalScore,
          assessmentLevel: level,
          assessmentPreviousStudy: previousStudy,
          assessmentSections: sections,
          assessmentTakenAt: new Date().toISOString(),
        },
      },
    })

    return successResponse({ totalScore, maxScore, level, previousStudy, sections })
  } catch (error) {
    console.error('Assessment submission error:', error)
    return serverError()
  }
}
