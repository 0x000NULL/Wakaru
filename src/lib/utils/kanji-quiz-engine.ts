import type {
  KanjiItem,
  KanjiQuizQuestion,
  KanjiQuizAnswer,
  KanjiQuizSessionConfig,
  KanjiQuizSessionStats,
  KanjiQuizMode,
} from '@/types/kanji'
import { parseJsonArray } from '@/lib/utils/kanji'

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function getDistractors(
  correct: KanjiItem,
  pool: KanjiItem[],
  count: number,
): KanjiItem[] {
  const sameLevel = pool.filter(
    (k) => k.jlptLevel === correct.jlptLevel && k.id !== correct.id,
  )
  const otherLevel = pool.filter(
    (k) => k.jlptLevel !== correct.jlptLevel && k.id !== correct.id,
  )

  const shuffledSame = shuffleArray(sameLevel)
  const shuffledOther = shuffleArray(otherLevel)

  const distractors: KanjiItem[] = []
  for (const k of shuffledSame) {
    if (distractors.length >= count) break
    distractors.push(k)
  }
  for (const k of shuffledOther) {
    if (distractors.length >= count) break
    distractors.push(k)
  }

  return distractors.slice(0, count)
}

function getPrimaryMeaning(kanji: KanjiItem): string {
  const meanings = typeof kanji.meanings === 'string'
    ? parseJsonArray(kanji.meanings)
    : kanji.meanings
  return meanings[0] ?? kanji.character
}

function getPrimaryReading(kanji: KanjiItem): string {
  const onYomi = typeof kanji.onYomi === 'string'
    ? parseJsonArray(kanji.onYomi as string)
    : kanji.onYomi
  const kunYomi = typeof kanji.kunYomi === 'string'
    ? parseJsonArray(kanji.kunYomi as string)
    : kanji.kunYomi
  return kunYomi[0] ?? onYomi[0] ?? kanji.character
}

export function generateRecognitionQuestion(
  target: KanjiItem,
  pool: KanjiItem[],
): KanjiQuizQuestion {
  const distractors = getDistractors(target, pool, 3)
  const correctMeaning = getPrimaryMeaning(target)
  const options = shuffleArray([
    correctMeaning,
    ...distractors.map((d) => getPrimaryMeaning(d)),
  ])

  return {
    id: `rec-${target.id}-${Date.now()}`,
    type: 'recognition',
    kanji: target,
    prompt: target.character,
    correctAnswer: correctMeaning,
    options,
  }
}

export function generateReadingQuestion(
  target: KanjiItem,
  pool: KanjiItem[],
): KanjiQuizQuestion {
  const distractors = getDistractors(target, pool, 3)
  const correctReading = getPrimaryReading(target)
  const options = shuffleArray([
    correctReading,
    ...distractors.map((d) => getPrimaryReading(d)),
  ])

  return {
    id: `read-${target.id}-${Date.now()}`,
    type: 'reading',
    kanji: target,
    prompt: target.character,
    correctAnswer: correctReading,
    options,
  }
}

export function generateProductionQuestion(
  target: KanjiItem,
  pool: KanjiItem[],
): KanjiQuizQuestion {
  const distractors = getDistractors(target, pool, 3)
  const options = shuffleArray([
    target.character,
    ...distractors.map((d) => d.character),
  ])

  return {
    id: `prod-${target.id}-${Date.now()}`,
    type: 'production',
    kanji: target,
    prompt: getPrimaryMeaning(target),
    correctAnswer: target.character,
    options,
  }
}

export function generateKanjiQuizQuestions(
  config: KanjiQuizSessionConfig,
  allKanji: KanjiItem[],
): KanjiQuizQuestion[] {
  let filtered = allKanji
  if (config.jlptLevels.length > 0) {
    filtered = allKanji.filter((k) =>
      k.jlptLevel ? config.jlptLevels.includes(k.jlptLevel) : false,
    )
  }
  if (filtered.length === 0) return []

  const pool = allKanji
  const shuffled = shuffleArray(filtered)
  const count = config.questionCount > 0 ? config.questionCount : shuffled.length

  const targets: KanjiItem[] = []
  while (targets.length < count) {
    const remaining = count - targets.length
    targets.push(...shuffleArray(filtered).slice(0, remaining))
  }

  const questionTypes: KanjiQuizMode[] =
    config.mode === 'mixed'
      ? ['recognition', 'reading', 'production']
      : [config.mode]

  return targets.map((target, index) => {
    const type = questionTypes[index % questionTypes.length]

    switch (type) {
      case 'recognition':
        return generateRecognitionQuestion(target, pool)
      case 'reading':
        return generateReadingQuestion(target, pool)
      case 'production':
        return generateProductionQuestion(target, pool)
      default:
        return generateRecognitionQuestion(target, pool)
    }
  })
}

export function validateKanjiAnswer(
  question: KanjiQuizQuestion,
  userAnswer: string,
): boolean {
  return question.correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase()
}

export function calculateKanjiSessionStats(
  answers: KanjiQuizAnswer[],
  questions: KanjiQuizQuestion[],
): KanjiQuizSessionStats {
  const totalQuestions = questions.length
  const correctCount = answers.filter((a) => a.isCorrect).length
  const incorrectCount = answers.filter((a) => !a.isCorrect).length
  const totalTimeMs = answers.reduce((sum, a) => sum + a.timeMs, 0)
  const averageTimeMs = answers.length > 0 ? Math.round(totalTimeMs / answers.length) : 0

  const missedIds = new Set(
    answers.filter((a) => !a.isCorrect).map((a) => a.questionId),
  )
  const missedKanji = questions
    .filter((q) => missedIds.has(q.id))
    .map((q) => ({ character: q.kanji.character, kanjiId: q.kanji.id }))
    .filter((k, i, arr) => arr.findIndex((x) => x.kanjiId === k.kanjiId) === i)

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0,
    averageTimeMs,
    totalTimeMs,
    missedKanji,
  }
}
