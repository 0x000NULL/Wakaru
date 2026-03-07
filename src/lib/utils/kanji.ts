export function getKanjiStrokeOrderSvgPath(character: string): string {
  const codepoint = character.codePointAt(0)
  return `/svg/kanji/${codepoint}.svg`
}

export function parseJsonArray(jsonStr: string | null): string[] {
  if (!jsonStr) return []
  try {
    return JSON.parse(jsonStr)
  } catch {
    return []
  }
}
