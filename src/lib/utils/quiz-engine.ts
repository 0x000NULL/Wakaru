import type { KanaCharacter } from '@/types/kana'
import type {
  QuizQuestion,
  QuizAnswer,
  QuizSessionConfig,
  QuizSessionStats,
  QuestionType,
} from '@/types/quiz'

/**
 * Fisher-Yates shuffle. Returns a new array.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Pick `count` unique distractors from the pool, excluding the correct answer.
 * Prefers same-group characters when available.
 */
export function generateDistractors(
  correct: KanaCharacter,
  pool: KanaCharacter[],
  count: number,
): KanaCharacter[] {
  const sameGroup = pool.filter(
    (c) => c.group === correct.group && c.character !== correct.character,
  )
  const otherGroup = pool.filter(
    (c) => c.group !== correct.group && c.character !== correct.character,
  )

  const shuffledSame = shuffleArray(sameGroup)
  const shuffledOther = shuffleArray(otherGroup)

  const distractors: KanaCharacter[] = []
  for (const c of shuffledSame) {
    if (distractors.length >= count) break
    distractors.push(c)
  }
  for (const c of shuffledOther) {
    if (distractors.length >= count) break
    distractors.push(c)
  }

  return distractors.slice(0, count)
}

/**
 * Recognition question: shows the character, pick the correct romaji from 4 options.
 */
export function generateRecognitionQuestion(
  target: KanaCharacter,
  pool: KanaCharacter[],
): QuizQuestion {
  const distractors = generateDistractors(target, pool, 3)
  const options = shuffleArray([
    target.romaji,
    ...distractors.map((d) => d.romaji),
  ])

  return {
    id: `rec-${target.character}-${Date.now()}`,
    type: 'recognition',
    character: target,
    prompt: target.character,
    correctAnswer: target.romaji,
    options,
  }
}

/**
 * Typing question: shows the romaji, user picks the character from a grid (no options).
 */
export function generateTypingQuestion(target: KanaCharacter): QuizQuestion {
  return {
    id: `typ-${target.character}-${Date.now()}`,
    type: 'typing',
    character: target,
    prompt: target.romaji,
    correctAnswer: target.character,
  }
}

/**
 * Audio question: plays the sound, pick the correct character from 4 options.
 */
export function generateAudioQuestion(
  target: KanaCharacter,
  pool: KanaCharacter[],
): QuizQuestion {
  const distractors = generateDistractors(target, pool, 3)
  const options = shuffleArray([
    target.character,
    ...distractors.map((d) => d.character),
  ])

  return {
    id: `aud-${target.character}-${Date.now()}`,
    type: 'audio',
    character: target,
    prompt: target.character,
    correctAnswer: target.character,
    options,
  }
}

/**
 * Generate all quiz questions from config and character data.
 * Mixed mode distributes question types via round-robin.
 */
export function generateQuizQuestions(
  config: QuizSessionConfig,
  allCharacters: KanaCharacter[],
): QuizQuestion[] {
  const filtered = allCharacters.filter((c) => config.groupIds.includes(c.group))
  if (filtered.length === 0) return []

  const pool = allCharacters
  const shuffled = shuffleArray(filtered)

  // Determine how many questions: use questionCount or all available
  const count = config.questionCount > 0 ? config.questionCount : shuffled.length

  // If we need more questions than characters, cycle through
  const targets: KanaCharacter[] = []
  while (targets.length < count) {
    const remaining = count - targets.length
    targets.push(...shuffleArray(filtered).slice(0, remaining))
  }

  const questionTypes: QuestionType[] =
    config.mode === 'mixed'
      ? ['recognition', 'typing', 'audio']
      : [config.mode as QuestionType]

  return targets.map((target, index) => {
    const type = questionTypes[index % questionTypes.length]

    switch (type) {
      case 'recognition':
        return generateRecognitionQuestion(target, pool)
      case 'typing':
        return generateTypingQuestion(target)
      case 'audio':
        return generateAudioQuestion(target, pool)
    }
  })
}

/**
 * Validate user's answer against the question's correct answer.
 * Case-insensitive, trims whitespace.
 */
export function validateAnswer(question: QuizQuestion, userAnswer: string): boolean {
  return question.correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase()
}

/**
 * Calculate session stats from answers and questions.
 */
export function calculateSessionStats(
  answers: QuizAnswer[],
  questions: QuizQuestion[],
): QuizSessionStats {
  const totalQuestions = questions.length
  const correctCount = answers.filter((a) => a.isCorrect).length
  const incorrectCount = answers.filter((a) => !a.isCorrect).length
  const totalTimeMs = answers.reduce((sum, a) => sum + a.timeMs, 0)
  const averageTimeMs = answers.length > 0 ? Math.round(totalTimeMs / answers.length) : 0

  const missedIds = new Set(
    answers.filter((a) => !a.isCorrect).map((a) => a.questionId),
  )
  const missedCharacters = questions
    .filter((q) => missedIds.has(q.id))
    .map((q) => q.character)
    // Deduplicate by character
    .filter((char, i, arr) => arr.findIndex((c) => c.character === char.character) === i)

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0,
    averageTimeMs,
    totalTimeMs,
    missedCharacters,
  }
}
