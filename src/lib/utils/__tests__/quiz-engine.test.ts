import { describe, it, expect } from 'vitest'
import {
  shuffleArray,
  generateDistractors,
  generateRecognitionQuestion,
  generateTypingQuestion,
  generateAudioQuestion,
  generateQuizQuestions,
  validateAnswer,
  calculateSessionStats,
} from '@/lib/utils/quiz-engine'
import { HIRAGANA_CHARACTERS } from '@/lib/constants/hiragana-data'
import type { KanaCharacter } from '@/types/kana'
import type { QuizAnswer } from '@/types/quiz'

const vowels = HIRAGANA_CHARACTERS.filter((c) => c.group === 'vowel')
const aChar = vowels.find((c) => c.romaji === 'a')!

describe('shuffleArray', () => {
  it('returns a new array with the same elements', () => {
    const original = [1, 2, 3, 4, 5]
    const shuffled = shuffleArray(original)
    expect(shuffled).toHaveLength(original.length)
    expect(shuffled.sort()).toEqual(original.sort())
  })

  it('does not mutate the original array', () => {
    const original = [1, 2, 3]
    const copy = [...original]
    shuffleArray(original)
    expect(original).toEqual(copy)
  })

  it('handles empty arrays', () => {
    expect(shuffleArray([])).toEqual([])
  })

  it('handles single-element arrays', () => {
    expect(shuffleArray([42])).toEqual([42])
  })
})

describe('generateDistractors', () => {
  it('returns the requested number of distractors', () => {
    const distractors = generateDistractors(aChar, HIRAGANA_CHARACTERS, 3)
    expect(distractors).toHaveLength(3)
  })

  it('does not include the correct character', () => {
    const distractors = generateDistractors(aChar, HIRAGANA_CHARACTERS, 3)
    expect(distractors.every((d) => d.character !== aChar.character)).toBe(true)
  })

  it('prefers same-group characters', () => {
    const distractors = generateDistractors(aChar, HIRAGANA_CHARACTERS, 3)
    // Vowel group has 5 chars, so 4 possible distractors — should fill 3 from same group
    const sameGroupCount = distractors.filter((d) => d.group === 'vowel').length
    expect(sameGroupCount).toBeGreaterThanOrEqual(3)
  })

  it('handles small pools by returning fewer distractors', () => {
    const smallPool: KanaCharacter[] = [aChar, vowels[1]]
    const distractors = generateDistractors(aChar, smallPool, 3)
    expect(distractors).toHaveLength(1)
  })
})

describe('generateRecognitionQuestion', () => {
  it('creates a question with 4 romaji options', () => {
    const q = generateRecognitionQuestion(aChar, HIRAGANA_CHARACTERS)
    expect(q.type).toBe('recognition')
    expect(q.prompt).toBe('あ')
    expect(q.correctAnswer).toBe('a')
    expect(q.options).toHaveLength(4)
    expect(q.options).toContain('a')
  })

  it('includes the correct answer in options', () => {
    for (let i = 0; i < 10; i++) {
      const q = generateRecognitionQuestion(aChar, HIRAGANA_CHARACTERS)
      expect(q.options).toContain(q.correctAnswer)
    }
  })
})

describe('generateTypingQuestion', () => {
  it('creates a question without options', () => {
    const q = generateTypingQuestion(aChar)
    expect(q.type).toBe('typing')
    expect(q.prompt).toBe('a')
    expect(q.correctAnswer).toBe('あ')
    expect(q.options).toBeUndefined()
  })
})

describe('generateAudioQuestion', () => {
  it('creates a question with 4 character options', () => {
    const q = generateAudioQuestion(aChar, HIRAGANA_CHARACTERS)
    expect(q.type).toBe('audio')
    expect(q.correctAnswer).toBe('あ')
    expect(q.options).toHaveLength(4)
    expect(q.options).toContain('あ')
  })
})

describe('generateQuizQuestions', () => {
  it('generates the requested number of questions', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['vowel'], questionCount: 3 },
      HIRAGANA_CHARACTERS,
    )
    expect(questions).toHaveLength(3)
    questions.forEach((q) => expect(q.type).toBe('recognition'))
  })

  it('limits to available characters when questionCount exceeds pool', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['y-row'], questionCount: 100 },
      HIRAGANA_CHARACTERS,
    )
    // y-row has 3 characters, so we cycle through them
    expect(questions).toHaveLength(100)
  })

  it('returns empty array when no characters match groups', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['nonexistent'], questionCount: 5 },
      HIRAGANA_CHARACTERS,
    )
    expect(questions).toEqual([])
  })

  it('generates all characters when questionCount is 0', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['vowel'], questionCount: 0 },
      HIRAGANA_CHARACTERS,
    )
    expect(questions).toHaveLength(5)
  })

  it('distributes types evenly in mixed mode', () => {
    const questions = generateQuizQuestions(
      { mode: 'mixed', groupIds: ['vowel', 'k-row'], questionCount: 9 },
      HIRAGANA_CHARACTERS,
    )
    expect(questions).toHaveLength(9)
    const types = questions.map((q) => q.type)
    expect(types.filter((t) => t === 'recognition')).toHaveLength(3)
    expect(types.filter((t) => t === 'typing')).toHaveLength(3)
    expect(types.filter((t) => t === 'audio')).toHaveLength(3)
  })

  it('filters characters by selected groups', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['vowel'], questionCount: 5 },
      HIRAGANA_CHARACTERS,
    )
    questions.forEach((q) => expect(q.character.group).toBe('vowel'))
  })
})

describe('validateAnswer', () => {
  const question = generateRecognitionQuestion(aChar, HIRAGANA_CHARACTERS)

  it('returns true for correct answer', () => {
    expect(validateAnswer(question, 'a')).toBe(true)
  })

  it('is case-insensitive', () => {
    expect(validateAnswer(question, 'A')).toBe(true)
  })

  it('trims whitespace', () => {
    expect(validateAnswer(question, '  a  ')).toBe(true)
  })

  it('returns false for wrong answer', () => {
    expect(validateAnswer(question, 'ka')).toBe(false)
  })
})

describe('calculateSessionStats', () => {
  it('calculates correct stats', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['vowel'], questionCount: 5 },
      HIRAGANA_CHARACTERS,
    )
    const answers: QuizAnswer[] = questions.map((q, i) => ({
      questionId: q.id,
      userAnswer: i < 3 ? q.correctAnswer : 'wrong',
      isCorrect: i < 3,
      timeMs: 1000,
    }))

    const stats = calculateSessionStats(answers, questions)
    expect(stats.totalQuestions).toBe(5)
    expect(stats.correctCount).toBe(3)
    expect(stats.incorrectCount).toBe(2)
    expect(stats.accuracy).toBe(60)
    expect(stats.averageTimeMs).toBe(1000)
    expect(stats.totalTimeMs).toBe(5000)
    expect(stats.missedCharacters).toHaveLength(2)
  })

  it('handles perfect score', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['vowel'], questionCount: 3 },
      HIRAGANA_CHARACTERS,
    )
    const answers: QuizAnswer[] = questions.map((q) => ({
      questionId: q.id,
      userAnswer: q.correctAnswer,
      isCorrect: true,
      timeMs: 500,
    }))

    const stats = calculateSessionStats(answers, questions)
    expect(stats.accuracy).toBe(100)
    expect(stats.missedCharacters).toHaveLength(0)
  })

  it('handles empty session', () => {
    const stats = calculateSessionStats([], [])
    expect(stats.totalQuestions).toBe(0)
    expect(stats.accuracy).toBe(0)
    expect(stats.averageTimeMs).toBe(0)
  })

  it('deduplicates missed characters', () => {
    const questions = generateQuizQuestions(
      { mode: 'recognition', groupIds: ['y-row'], questionCount: 6 },
      HIRAGANA_CHARACTERS,
    )
    // Mark all wrong — y-row has 3 chars, so 6 questions = each char appears twice
    const answers: QuizAnswer[] = questions.map((q) => ({
      questionId: q.id,
      userAnswer: 'wrong',
      isCorrect: false,
      timeMs: 1000,
    }))

    const stats = calculateSessionStats(answers, questions)
    // Should be at most 3 unique missed characters
    expect(stats.missedCharacters.length).toBeLessThanOrEqual(3)
  })
})
