'use client'

import { useCallback, useEffect, useState } from 'react'
import { FeatureTooltip } from '@/components/ui/feature-tooltip'
import {
  getVisibleTooltips,
  dismissTooltip,
  dismissAllTooltips,
  type TooltipConfig,
} from '@/lib/utils/feature-tooltips'

export function FeatureTour() {
  const [tooltips, setTooltips] = useState<TooltipConfig[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Delay to let dashboard render and targets mount
    const timer = setTimeout(() => {
      const visible = getVisibleTooltips()
      setTooltips(visible)
      setReady(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleNext = useCallback(() => {
    const current = tooltips[currentIndex]
    if (current) dismissTooltip(current.id)

    if (currentIndex < tooltips.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setTooltips([])
    }
  }, [tooltips, currentIndex])

  const handleSkip = useCallback(() => {
    dismissAllTooltips()
    setTooltips([])
  }, [])

  if (!ready || tooltips.length === 0) return null

  const current = tooltips[currentIndex]
  if (!current) return null

  return (
    <FeatureTooltip
      targetSelector={current.targetSelector}
      title={current.title}
      content={current.content}
      step={currentIndex + 1}
      totalSteps={tooltips.length}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  )
}
