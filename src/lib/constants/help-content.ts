export interface HelpArticle {
  id: string
  title: string
  content: string
}

export interface HelpSection {
  id: string
  title: string
  description: string
  icon: string
  articles: HelpArticle[]
}

export const HELP_SECTIONS: HelpSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'First steps and how to navigate Wakaru',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    articles: [
      {
        id: 'first-steps',
        title: 'Your first steps',
        content:
          'Welcome to Wakaru! After completing onboarding, your dashboard shows your current progress and what to study next. Start with hiragana — it is the foundation of Japanese reading. The Daily Lesson card on your dashboard will guide you to whatever is most important to study each day.',
      },
      {
        id: 'learning-path',
        title: 'Understanding your learning path',
        content:
          'Your learning path is a structured sequence of milestones. Each milestone unlocks when you complete the prerequisites. The recommended order is: Hiragana → Katakana → Vocabulary → Grammar → Immersion. You can always explore ahead, but the path ensures you build a solid foundation.',
      },
      {
        id: 'daily-routine',
        title: 'Building a daily routine',
        content:
          'Consistency beats intensity. Aim to complete your daily reviews first — these are words and kana that the SRS algorithm has scheduled for review. Then spend remaining time on new lessons. Even 15 minutes a day adds up to significant progress over weeks and months.',
      },
    ],
  },
  {
    id: 'spaced-repetition',
    title: 'Spaced Repetition',
    description: 'How SRS works and how to review effectively',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    articles: [
      {
        id: 'what-is-srs',
        title: 'What is spaced repetition?',
        content:
          'Spaced repetition is a learning technique that shows you information at increasing intervals. When you remember something correctly, the next review is scheduled further in the future. When you forget, it comes back sooner. This fights the natural forgetting curve discovered by Hermann Ebbinghaus, making your study time much more efficient.',
      },
      {
        id: 'review-ratings',
        title: 'How review ratings work',
        content:
          'When reviewing vocabulary and grammar, you rate your recall: Again (forgot completely — review again soon), Hard (struggled but recalled — shorter interval), Good (recalled with some effort — normal interval), Easy (recalled instantly — longer interval). Be honest with your ratings — underrating slows progress, overrating leads to forgotten items piling up.',
      },
      {
        id: 'srs-tips',
        title: 'Tips for effective reviews',
        content:
          'Do your reviews every day, even if just a few. Skipping days causes reviews to pile up. Try to review at the same time each day to build a habit. If your review queue grows too large, focus on clearing it before learning new items. The system works best when you stay on top of your reviews consistently.',
      },
    ],
  },
  {
    id: 'keyboard-shortcuts',
    title: 'Keyboard Shortcuts',
    description: 'Navigate and study faster with keyboard shortcuts',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    articles: [
      {
        id: 'quiz-shortcuts',
        title: 'Quiz shortcuts',
        content:
          'During kana quizzes: press 1-4 to select an answer option. In audio mode, press Space to replay the sound. During recognition quizzes, answers are mapped to keys 1 through 4 matching the on-screen option positions.',
      },
      {
        id: 'lesson-navigation',
        title: 'Lesson navigation',
        content:
          'In kana lesson views: use ArrowRight to advance to the next character, ArrowLeft to go back to the previous one. This works in both hiragana and katakana group lessons.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features Guide',
    description: 'How each feature works in detail',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    articles: [
      {
        id: 'hiragana-katakana',
        title: 'Hiragana & Katakana',
        content:
          'The kana sections teach all 79 hiragana and 79 katakana characters across 14 groups. Each group lesson shows characters one at a time with stroke order animations, mnemonics, and example words. Practice with four quiz modes: recognition (see character, pick romaji), typing (see romaji, pick character), audio (hear pronunciation, pick character), and mixed (all three in rotation). Progress is tracked with SRS-lite — simpler intervals for kana mastery.',
      },
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        content:
          'The vocabulary system covers 3000+ words across JLPT N5, N4, and N3 levels. Browse and search the full library, or let the system feed you new words at a daily pace. Each word includes readings, meanings, example sentences, and frequency information. Reviews use the full SM-2 algorithm with four rating levels for precise scheduling.',
      },
      {
        id: 'grammar',
        title: 'Grammar',
        content:
          'Grammar patterns are organized by JLPT level and category (particles, verbs, adjectives, sentence patterns, etc.). Each pattern page includes explanations, formation rules, and multiple example sentences. Practice with fill-in-the-blank and multiple-choice exercises that test your understanding of grammar in context.',
      },
      {
        id: 'immersion',
        title: 'Immersion',
        content:
          'The immersion section provides real Japanese media with interactive subtitles. Watch anime episodes with Japanese and English subtitles. Click any word or sentence to see its meaning, readings, and grammar breakdown. Mine sentences — save interesting sentences to your personal SRS deck for later review.',
      },
    ],
  },
]

export function getHelpSection(sectionId: string): HelpSection | undefined {
  return HELP_SECTIONS.find((s) => s.id === sectionId)
}
