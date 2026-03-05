import { getAuthUser } from '@/lib/auth'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

export async function GET() {
  try {
    const user = await getAuthUser()
    if (!user) return unauthorizedError()

    return successResponse({ onboardingCompleted: user.onboardingCompleted })
  } catch (error) {
    console.error('Onboarding status error:', error)
    return serverError()
  }
}
