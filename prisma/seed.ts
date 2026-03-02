import { Prisma, PrismaClient } from '@prisma/client'
import { HIRAGANA_CHARACTERS } from '../src/lib/constants/hiragana-data'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // ============================================================================
  // SEED HIRAGANA (79 characters with mnemonics, example words, stroke data)
  // ============================================================================
  console.log('Seeding Hiragana characters...')
  for (const kana of HIRAGANA_CHARACTERS) {
    await prisma.kana.upsert({
      where: { character: kana.character },
      update: {
        romaji: kana.romaji,
        type: kana.type,
        group: kana.group,
        display_order: kana.display_order,
        is_combination: kana.is_combination,
        stroke_count: kana.stroke_count,
        mnemonic: kana.mnemonic,
        stroke_order_svg: kana.stroke_order_svg,
        audio_url: kana.audio_url,
        example_words: kana.example_words as unknown as Prisma.InputJsonValue,
      },
      create: {
        character: kana.character,
        romaji: kana.romaji,
        type: kana.type,
        group: kana.group,
        display_order: kana.display_order,
        is_combination: kana.is_combination,
        stroke_count: kana.stroke_count,
        mnemonic: kana.mnemonic,
        stroke_order_svg: kana.stroke_order_svg,
        audio_url: kana.audio_url,
        example_words: kana.example_words as unknown as Prisma.InputJsonValue,
      },
    })
  }
  console.log(`✓ Seeded ${HIRAGANA_CHARACTERS.length} hiragana characters`)

  // ============================================================================
  // SEED SAMPLE VOCABULARY
  // ============================================================================
  const vocabData = [
    {
      word: '学ぶ',
      reading: 'まなぶ',
      meaning: 'to learn; to study',
      part_of_speech: 'verb',
      jlpt_level: 'N5',
      frequency_rank: 1250,
      tags: ['verb', 'education'],
    },
    {
      word: 'こんにちは',
      reading: 'こんにちは',
      meaning: 'hello; good afternoon',
      part_of_speech: 'expression',
      jlpt_level: 'N5',
      frequency_rank: 150,
      tags: ['greeting', 'common'],
    },
    {
      word: 'ありがとう',
      reading: 'ありがとう',
      meaning: 'thank you',
      part_of_speech: 'expression',
      jlpt_level: 'N5',
      frequency_rank: 200,
      tags: ['greeting', 'common'],
    },
    {
      word: '日本',
      reading: 'にほん',
      meaning: 'Japan',
      part_of_speech: 'noun',
      jlpt_level: 'N5',
      frequency_rank: 50,
      tags: ['country', 'geography'],
    },
    {
      word: '学生',
      reading: 'がくせい',
      meaning: 'student',
      part_of_speech: 'noun',
      jlpt_level: 'N5',
      frequency_rank: 300,
      tags: ['person', 'education'],
    },
  ]

  console.log('Seeding sample vocabulary...')
  for (const vocab of vocabData) {
    await prisma.vocabulary.upsert({
      where: { word: vocab.word },
      update: {},
      create: vocab,
    })
  }
  console.log(`✓ Seeded ${vocabData.length} vocabulary items`)

  // ============================================================================
  // SEED SAMPLE GRAMMAR PATTERNS
  // ============================================================================
  const grammarData = [
    {
      pattern: 'は',
      meaning: 'topic marker particle',
      formation: 'Noun + は',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation:
        'The particle は (wa) marks the topic of a sentence. It indicates what the sentence is about.',
      notes: 'Pronounced "wa" not "ha" when used as a particle.',
    },
    {
      pattern: 'です',
      meaning: 'to be (polite)',
      formation: 'Noun/Adjective + です',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation: 'Copula verb in polite form. Used to state that something "is" something.',
      notes: 'Used to make statements polite.',
    },
    {
      pattern: 'を',
      meaning: 'direct object marker',
      formation: 'Noun + を + Verb',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation: 'The particle を (wo/o) marks the direct object of an action.',
      notes: 'Usually pronounced "o" not "wo".',
    },
  ]

  console.log('Seeding grammar patterns...')
  for (const pattern of grammarData) {
    await prisma.grammarPattern.create({
      data: pattern,
    })
  }
  console.log(`✓ Seeded ${grammarData.length} grammar patterns`)

  console.log('✅ Database seed completed!')
}

main()
  .catch(e => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
