// Email abstraction layer
// TODO: Replace console.log with a real email provider (Resend, SendGrid)

export async function sendPasswordResetEmail(email: string, _resetUrl: string): Promise<void> {
  console.log(`[EMAIL] Password reset email queued for ${email.substring(0, 3)}***`)
}
