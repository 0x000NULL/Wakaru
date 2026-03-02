// Email abstraction layer
// TODO: Replace console.log with a real email provider (Resend, SendGrid)

export async function sendPasswordResetEmail(email: string, resetUrl: string): Promise<void> {
  console.log(`[EMAIL] Password reset for ${email}: ${resetUrl}`)
}
