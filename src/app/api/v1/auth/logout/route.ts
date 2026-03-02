import { clearAuthCookies } from '@/lib/utils/cookies'
import { successResponse, serverError } from '@/lib/utils/api-response'

export async function POST() {
  try {
    await clearAuthCookies()
    return successResponse({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error:', error)
    return serverError()
  }
}
