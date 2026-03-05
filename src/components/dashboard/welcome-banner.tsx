'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface WelcomeData {
  milestoneName: string
  milestoneHref: string
}

const STORAGE_KEY = 'wakaru-show-welcome'

function readWelcomeData(): WelcomeData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function WelcomeBanner() {
  const [data, setData] = useState<WelcomeData | null>(readWelcomeData)

  if (!data) return null

  const dismiss = () => {
    localStorage.removeItem(STORAGE_KEY)
    setData(null)
  }

  return (
    <div className="relative rounded-lg border border-primary/20 bg-primary/5 p-5 animate-[fadeSlideUp_0.6s_ease-out]">
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <p className="text-base font-semibold text-foreground">Setup complete!</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Your journey begins now. Your first step:{' '}
        <span className="font-medium text-foreground">{data.milestoneName}</span>
      </p>

      <Link href={data.milestoneHref} onClick={dismiss}>
        <Button size="sm" className="mt-3">
          Get Started
        </Button>
      </Link>
    </div>
  )
}
