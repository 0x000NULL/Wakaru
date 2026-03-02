import { describe, it, expect } from 'vitest'
import { hashPassword, verifyPassword } from '@/lib/utils/password'

describe('password utilities', () => {
  it('hashPassword returns a bcrypt hash', async () => {
    const hash = await hashPassword('testpassword')
    expect(hash).toMatch(/^\$2[aby]\$/)
    expect(hash).not.toBe('testpassword')
  })

  it('verifyPassword returns true for correct password', async () => {
    const hash = await hashPassword('correctpassword')
    const result = await verifyPassword('correctpassword', hash)
    expect(result).toBe(true)
  })

  it('verifyPassword returns false for wrong password', async () => {
    const hash = await hashPassword('correctpassword')
    const result = await verifyPassword('wrongpassword', hash)
    expect(result).toBe(false)
  })

  it('produces different hashes for the same password', async () => {
    const hash1 = await hashPassword('samepassword')
    const hash2 = await hashPassword('samepassword')
    expect(hash1).not.toBe(hash2)
  })
})
