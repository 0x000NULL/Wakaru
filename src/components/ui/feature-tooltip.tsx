'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/button'

const emptySubscribe = () => () => {}

interface FeatureTooltipProps {
  targetSelector: string
  title: string
  content: string
  step: number
  totalSteps: number
  onNext: () => void
  onSkip: () => void
}

export function FeatureTooltip({
  targetSelector,
  title,
  content,
  step,
  totalSteps,
  onNext,
  onSkip,
}: FeatureTooltipProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null)

  useEffect(() => {
    if (!mounted) return

    const target = document.querySelector(targetSelector)
    if (!target) return

    function updatePosition() {
      const rect = target!.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: Math.max(16, rect.left + window.scrollX),
      })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [mounted, targetSelector])

  if (!mounted || !position) return null

  const isLast = step === totalSteps

  return createPortal(
    <div className="fixed inset-0 z-50" onClick={onSkip}>
      <div
        ref={tooltipRef}
        onClick={(e) => e.stopPropagation()}
        className="absolute w-72 rounded-lg border border-border bg-background p-4 shadow-lg animate-[fadeSlideUp_0.3s_ease-out]"
        style={{ top: position.top, left: position.left }}
      >
        <div className="mb-1 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <span className="text-xs text-muted-foreground">
            {step}/{totalSteps}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onSkip}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip tour
          </button>
          <Button size="sm" onClick={onNext}>
            {isLast ? 'Done' : 'Next'}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
