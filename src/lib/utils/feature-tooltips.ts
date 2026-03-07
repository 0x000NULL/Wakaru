const STORAGE_KEY = 'wakaru-tooltips-dismissed'

export interface TooltipConfig {
  id: string
  targetSelector: string
  title: string
  content: string
}

export const FEATURE_TOOLTIPS: TooltipConfig[] = [
  {
    id: 'daily-lesson',
    targetSelector: '[data-tooltip-target="daily-lesson"]',
    title: 'Daily Lesson',
    content:
      'This card shows what you should study today. It prioritizes due reviews, then suggests new material based on your learning path.',
  },
  {
    id: 'learning-path',
    targetSelector: '[data-tooltip-target="learning-path"]',
    title: 'Learning Path',
    content:
      'Track your progress through structured milestones. Complete each step to unlock the next — from kana to immersion.',
  },
  {
    id: 'kana-section',
    targetSelector: '[data-tooltip-target="kana-section"]',
    title: 'Kana: Your First Step',
    content:
      'Start here — learning hiragana and katakana is the foundation for reading Japanese. Master these first.',
  },
  {
    id: 'vocabulary-card',
    targetSelector: '[data-tooltip-target="vocabulary-card"]',
    title: 'Vocabulary',
    content:
      'Build your word bank with spaced repetition. Words you learn are scheduled for review at optimal intervals so you never forget them.',
  },
  {
    id: 'grammar-card',
    targetSelector: '[data-tooltip-target="grammar-card"]',
    title: 'Grammar Patterns',
    content:
      'Learn Japanese grammar through clear pattern explanations and practice exercises, organized by JLPT level.',
  },
  {
    id: 'weekly-stats',
    targetSelector: '[data-tooltip-target="weekly-stats"]',
    title: 'Your Progress',
    content:
      'Track your weekly learning stats here — items learned, study time, and retention rate. Use this to stay on track.',
  },
  {
    id: 'streak-display',
    targetSelector: '[data-tooltip-target="streak-display"]',
    title: 'Study Activity',
    content:
      'This shows your daily study consistency. No pressure — it is purely informational, never punitive.',
  },
]

function getDismissedIds(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function saveDismissedIds(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
}

export function getVisibleTooltips(): TooltipConfig[] {
  const dismissed = getDismissedIds()
  return FEATURE_TOOLTIPS.filter((t) => !dismissed.has(t.id))
}

export function dismissTooltip(id: string) {
  const dismissed = getDismissedIds()
  dismissed.add(id)
  saveDismissedIds(dismissed)
}

export function dismissAllTooltips() {
  const ids = new Set(FEATURE_TOOLTIPS.map((t) => t.id))
  saveDismissedIds(ids)
}
