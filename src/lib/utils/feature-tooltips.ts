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
    id: 'srs-reviews',
    targetSelector: '[data-tooltip-target="srs-reviews"]',
    title: 'SRS Reviews',
    content:
      'Characters and words you have learned appear here when they are due for review. Keeping up with reviews is key to long-term retention.',
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
