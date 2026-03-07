'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { StrokeOrderViewer } from '@/components/kanji/stroke-order-viewer'
import { ReadingsDisplay } from '@/components/kanji/readings-display'
import { KanjiVocabList } from '@/components/kanji/kanji-vocab-list'
import { parseJsonArray } from '@/lib/utils/kanji'
import type { KanjiDetailItem } from '@/types/kanji'

export default function KanjiDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [kanji, setKanji] = useState<KanjiDetailItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAddingToSrs, setIsAddingToSrs] = useState(false)

  useEffect(() => {
    async function fetchKanji() {
      try {
        const res = await fetch(`/api/v1/kanji/${id}`)
        if (!res.ok) {
          setError('Kanji not found')
          setIsLoading(false)
          return
        }
        const json = await res.json()
        setKanji(json.data as KanjiDetailItem)
        setIsLoading(false)
      } catch {
        setError('Network error')
        setIsLoading(false)
      }
    }
    fetchKanji()
  }, [id])

  async function handleAddToSrs() {
    if (!kanji) return
    setIsAddingToSrs(true)
    try {
      await fetch('/api/v1/srs/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: kanji.id, category: 'kanji' }),
      })
      const res = await fetch(`/api/v1/kanji/${id}`)
      if (res.ok) {
        const json = await res.json()
        setKanji(json.data as KanjiDetailItem)
      }
    } catch {
      // silently fail
    }
    setIsAddingToSrs(false)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error || !kanji) {
    return (
      <div className="space-y-4 py-12 text-center">
        <p className="text-muted-foreground">{error ?? 'Kanji not found'}</p>
        <Link href="/kanji/browse" className="text-sm font-medium text-primary hover:underline">
          Back to Browse
        </Link>
      </div>
    )
  }

  const meanings = typeof kanji.meanings === 'string'
    ? parseJsonArray(kanji.meanings as unknown as string)
    : kanji.meanings
  const onYomi = typeof kanji.onYomi === 'string'
    ? parseJsonArray(kanji.onYomi as unknown as string)
    : kanji.onYomi
  const kunYomi = typeof kanji.kunYomi === 'string'
    ? parseJsonArray(kanji.kunYomi as unknown as string)
    : kanji.kunYomi
  const nanori = typeof kanji.nanori === 'string'
    ? parseJsonArray(kanji.nanori as unknown as string)
    : (kanji.nanori ?? [])

  return (
    <div className="space-y-6">
      <Link
        href="/kanji/browse"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Browse
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Character + Stroke Order */}
        <Card>
          <CardContent className="flex flex-col items-center gap-4 py-8">
            <div className="text-9xl font-bold text-foreground">{kanji.character}</div>
            <StrokeOrderViewer character={kanji.character} />
            <div className="flex gap-2">
              {kanji.jlptLevel && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {kanji.jlptLevel}
                </span>
              )}
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {kanji.strokeCount} strokes
              </span>
              {kanji.grade && (
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  Grade {kanji.grade}
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Right: Meanings + Readings */}
        <div className="space-y-4">
          <Card>
            <CardContent className="space-y-4 py-4">
              <div>
                <h2 className="text-sm font-medium text-muted-foreground">Meanings</h2>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {meanings.join(', ')}
                </p>
              </div>
              <ReadingsDisplay onYomi={onYomi} kunYomi={kunYomi} nanori={nanori} />
            </CardContent>
          </Card>

          {kanji.mnemonic && (
            <Card>
              <CardContent className="py-4">
                <h2 className="text-sm font-medium text-muted-foreground">Mnemonic</h2>
                <p className="mt-1 text-sm text-foreground">{kanji.mnemonic}</p>
              </CardContent>
            </Card>
          )}

          {/* SRS Status */}
          <Card>
            <CardContent className="py-4">
              {kanji.srs ? (
                <div className="space-y-2">
                  <h2 className="text-sm font-medium text-muted-foreground">SRS Status</h2>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Status: </span>
                      <span className="font-medium capitalize text-foreground">
                        {kanji.srs.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Reviews: </span>
                      <span className="font-medium text-foreground">{kanji.srs.totalReviews}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Accuracy: </span>
                      <span className="font-medium text-foreground">{kanji.srs.accuracy}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Interval: </span>
                      <span className="font-medium text-foreground">{kanji.srs.interval}d</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Not in your study deck</span>
                  <Button size="sm" onClick={handleAddToSrs} disabled={isAddingToSrs}>
                    {isAddingToSrs ? 'Adding...' : 'Add to SRS'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vocabulary */}
      {kanji.vocabulary.length > 0 && (
        <Card>
          <CardContent className="py-4">
            <h2 className="mb-3 text-sm font-medium text-muted-foreground">Related Vocabulary</h2>
            <KanjiVocabList vocabulary={kanji.vocabulary} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
