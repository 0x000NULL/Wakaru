'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getHelpSection } from '@/lib/constants/help-content'
import { cn } from '@/lib/utils/cn'

export default function HelpSectionPage() {
  const params = useParams()
  const sectionId = params.sectionId as string
  const section = getHelpSection(sectionId)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (!section) {
    return (
      <div className="space-y-4">
        <Link
          href="/help"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to Help
        </Link>
        <p className="text-muted-foreground">Section not found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/help"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to Help
        </Link>
        <h1 className="mt-3 text-2xl font-bold text-foreground">{section.title}</h1>
        <p className="mt-1 text-muted-foreground">{section.description}</p>
      </div>

      <div className="space-y-3">
        {section.articles.map((article) => {
          const isExpanded = expandedId === article.id

          return (
            <div key={article.id} className="rounded-lg border border-border">
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-foreground">{article.title}</span>
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
                  className={cn(
                    'text-muted-foreground transition-transform duration-200',
                    isExpanded && 'rotate-180',
                  )}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isExpanded && (
                <div className="border-t border-border px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{article.content}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
