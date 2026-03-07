const CUID_PATTERN = /^c[a-z0-9]{7,29}$/

export function isValidId(id: string): boolean {
  return CUID_PATTERN.test(id)
}
