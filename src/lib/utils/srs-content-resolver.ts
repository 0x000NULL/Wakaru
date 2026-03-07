import prisma from '@/lib/db'

export type SrsCategory = 'vocabulary' | 'kanji'

export async function validateContentItem(category: SrsCategory, itemId: string) {
  if (category === 'kanji') {
    return prisma.kanji.findUnique({
      where: { id: itemId },
      select: { id: true },
    })
  }
  return prisma.vocabulary.findUnique({
    where: { id: itemId },
    select: { id: true },
  })
}

export function getNotFoundMessage(category: SrsCategory): string {
  return category === 'kanji' ? 'Kanji item not found' : 'Vocabulary item not found'
}

export async function fetchNewItems(
  category: SrsCategory,
  excludeIds: string[],
  limit: number,
) {
  if (category === 'kanji') {
    const items = await prisma.kanji.findMany({
      where: {
        id: excludeIds.length > 0 ? { notIn: excludeIds } : undefined,
        jlpt_level: { not: null },
      },
      orderBy: [{ jlpt_level: 'desc' }, { frequency_rank: 'asc' }],
      take: limit,
      select: {
        id: true,
        character: true,
        meanings: true,
        on_yomi: true,
        kun_yomi: true,
        stroke_count: true,
        grade: true,
        jlpt_level: true,
        frequency_rank: true,
        mnemonic: true,
        vocabulary: {
          take: 5,
          select: {
            vocabulary: {
              select: {
                id: true,
                word: true,
                reading: true,
                meaning: true,
              },
            },
          },
        },
      },
    })

    return items.map((item) => ({
      ...item,
      vocabulary: item.vocabulary.map((kv) => kv.vocabulary),
    }))
  }

  // vocabulary
  const items = await prisma.vocabulary.findMany({
    where: {
      id: excludeIds.length > 0 ? { notIn: excludeIds } : undefined,
      frequency_rank: { not: null },
    },
    orderBy: { frequency_rank: 'asc' },
    take: limit,
    select: {
      id: true,
      word: true,
      reading: true,
      meaning: true,
      part_of_speech: true,
      jlpt_level: true,
      frequency_rank: true,
      tags: true,
      audio_url: true,
      sentences: {
        take: 3,
        select: {
          sentence: {
            select: {
              id: true,
              japanese: true,
              english: true,
              furigana: true,
            },
          },
        },
      },
    },
  })

  return items.map((item) => ({
    ...item,
    sentences: item.sentences.map((s) => s.sentence),
  }))
}

export async function fetchDueItems(
  category: SrsCategory,
  dueRecords: Array<{
    item_id: string
    repetitions: number
    ease_factor: number
    interval: number
    status: string
    next_review_at: Date | null
    last_reviewed_at: Date | null
    total_reviews: number
    correct_reviews: number
  }>,
) {
  const itemIds = dueRecords.map((r) => r.item_id)

  if (category === 'kanji') {
    const kanjiItems = await prisma.kanji.findMany({
      where: { id: { in: itemIds } },
      select: {
        id: true,
        character: true,
        meanings: true,
        on_yomi: true,
        kun_yomi: true,
        stroke_count: true,
        grade: true,
        jlpt_level: true,
        frequency_rank: true,
        mnemonic: true,
        vocabulary: {
          take: 5,
          select: {
            vocabulary: {
              select: {
                id: true,
                word: true,
                reading: true,
                meaning: true,
              },
            },
          },
        },
      },
    })

    const kanjiMap = new Map(kanjiItems.map((k) => [k.id, k]))

    return dueRecords
      .map((record) => {
        const kanji = kanjiMap.get(record.item_id)
        if (!kanji) return null
        return {
          ...kanji,
          vocabulary: kanji.vocabulary.map((kv) => kv.vocabulary),
          srs: {
            repetitions: record.repetitions,
            easeFactor: record.ease_factor,
            interval: record.interval,
            status: record.status,
            nextReviewAt: record.next_review_at?.toISOString() ?? null,
            lastReviewedAt: record.last_reviewed_at?.toISOString() ?? null,
            totalReviews: record.total_reviews,
            correctReviews: record.correct_reviews,
          },
        }
      })
      .filter(Boolean)
  }

  // vocabulary
  const vocabItems = await prisma.vocabulary.findMany({
    where: { id: { in: itemIds } },
    select: {
      id: true,
      word: true,
      reading: true,
      meaning: true,
      part_of_speech: true,
      jlpt_level: true,
      frequency_rank: true,
      tags: true,
      audio_url: true,
      sentences: {
        take: 3,
        select: {
          sentence: {
            select: {
              id: true,
              japanese: true,
              english: true,
              furigana: true,
            },
          },
        },
      },
    },
  })

  const vocabMap = new Map(vocabItems.map((v) => [v.id, v]))

  return dueRecords
    .map((record) => {
      const vocab = vocabMap.get(record.item_id)
      if (!vocab) return null
      return {
        ...vocab,
        sentences: vocab.sentences.map((s) => s.sentence),
        srs: {
          repetitions: record.repetitions,
          easeFactor: record.ease_factor,
          interval: record.interval,
          status: record.status,
          nextReviewAt: record.next_review_at?.toISOString() ?? null,
          lastReviewedAt: record.last_reviewed_at?.toISOString() ?? null,
          totalReviews: record.total_reviews,
          correctReviews: record.correct_reviews,
        },
      }
    })
    .filter(Boolean)
}
