'use client'

import Link from 'next/link'
import { HELP_SECTIONS } from '@/lib/constants/help-content'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Help & Documentation</h1>
        <p className="mt-1 text-muted-foreground">
          Learn how to get the most out of Wakaru
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {HELP_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/help/${section.id}`}
            className="transition-opacity hover:opacity-80"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={section.icon} />
                    </svg>
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{section.description}</p>
                <p className="mt-3 text-xs font-medium text-primary">
                  {section.articles.length} article{section.articles.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
