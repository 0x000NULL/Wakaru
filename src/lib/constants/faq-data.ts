export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  title: string
  items: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        question: 'What is Wakaru?',
        answer:
          'Wakaru (分かる, "to understand") is a research-backed Japanese learning platform that guides you from complete beginner to fluency. It uses comprehensible input, spaced repetition, and immersive learning — without gamification like streaks, badges, or XP.',
      },
      {
        question: 'Is Wakaru free?',
        answer:
          'Yes, Wakaru is currently free to use. Create an account to get started with hiragana, katakana, vocabulary, and grammar lessons.',
      },
      {
        question: 'Who is Wakaru for?',
        answer:
          'Wakaru is designed for anyone learning Japanese, from complete beginners to intermediate learners. Our placement assessment helps determine your starting point so you can jump in at the right level.',
      },
    ],
  },
  {
    id: 'methodology',
    title: 'Methodology',
    items: [
      {
        question: 'What is comprehensible input?',
        answer:
          'Comprehensible input is a language acquisition theory by Stephen Krashen. It states that we acquire language when we understand messages that are slightly above our current level (called "i+1"). Wakaru structures content to always be just ahead of what you already know.',
      },
      {
        question: 'How does spaced repetition work?',
        answer:
          'Spaced repetition schedules reviews at increasing intervals based on how well you remember each item. When you remember correctly, the next review is pushed further into the future. When you forget, it comes back sooner. This fights the natural forgetting curve and makes study time more efficient. Wakaru uses the SM-2 algorithm, proven across millions of learners.',
      },
      {
        question: 'Why no gamification?',
        answer:
          'Streaks, badges, and XP are designed to keep you coming back, not to help you learn. Research shows that extrinsic motivators can undermine intrinsic motivation over time. Wakaru focuses on genuine progress — seeing yourself read Japanese, understand conversations, and pass milestones is more motivating than any badge.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    items: [
      {
        question: 'What JLPT levels does Wakaru cover?',
        answer:
          'Currently, Wakaru covers vocabulary and grammar for JLPT N5, N4, and N3 levels. This range takes learners from complete beginner through upper-intermediate. Additional levels may be added in the future.',
      },
      {
        question: 'How does the immersion feature work?',
        answer:
          'The immersion section provides real Japanese media (like anime) with interactive subtitles. You can click on any word or sentence to see its meaning, readings, and grammar breakdown. You can also "mine" sentences — saving interesting sentences to your personal SRS review deck.',
      },
      {
        question: 'Can I use Wakaru on my phone?',
        answer:
          'Wakaru is a responsive web application that works in any modern browser, including mobile. While there is no dedicated mobile app yet, the web interface is optimized for mobile screens.',
      },
    ],
  },
  {
    id: 'account',
    title: 'Account',
    items: [
      {
        question: 'How do I reset my password?',
        answer:
          'Click "Forgot password?" on the login page and enter your email address. You will receive instructions to reset your password.',
      },
      {
        question: 'Can I delete my account?',
        answer:
          'Account deletion is not currently available through the interface. Contact us if you need your account removed.',
      },
      {
        question: 'Is my progress saved automatically?',
        answer:
          'Yes. All your learning progress, SRS data, and quiz results are saved automatically to your account. You can pick up where you left off on any device by logging in.',
      },
    ],
  },
]
