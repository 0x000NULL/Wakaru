'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useKanjiBrowseStore } from '@/store/kanji-browse-store'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { KanjiBrowseSearchBar } from '@/components/kanji/kanji-browse-search-bar'
import { KanjiBrowseFilters } from '@/components/kanji/kanji-browse-filters'
import { KanjiBrowseGrid } from '@/components/kanji/kanji-browse-grid'
import { KanjiBrowsePagination } from '@/components/kanji/kanji-browse-pagination'
import { KanjiDetailModal } from '@/components/kanji/kanji-detail-modal'

export default function KanjiBrowsePage() {
  const {
    search,
    jlptLevel,
    grade,
    items,
    total,
    page,
    pageSize,
    isLoading,
    error,
    selectedItemId,
    detailItem,
    isDetailLoading,
    isAddingToSrs,
    setSearch,
    setJlptLevel,
    setGrade,
    setPage,
    fetchItems,
    openDetail,
    closeDetail,
    addToSrs,
  } = useKanjiBrowseStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const totalPages = Math.ceil(total / pageSize)

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/kanji"
          className="mb-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Kanji
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Browse Kanji</h1>
        <p className="mt-1 text-muted-foreground">
          Explore all available kanji and add them to your SRS deck.
        </p>
      </div>

      <div className="space-y-3">
        <KanjiBrowseSearchBar value={search} onChange={setSearch} />
        <KanjiBrowseFilters
          jlptLevel={jlptLevel}
          grade={grade}
          onJlptChange={setJlptLevel}
          onGradeChange={setGrade}
        />
      </div>

      {!isLoading && !error && (
        <p className="text-sm text-muted-foreground">
          {total} {total === 1 ? 'kanji' : 'kanji'} found
        </p>
      )}

      {isLoading && (
        <div className="flex flex-col items-center gap-3 py-12">
          <LoadingSpinner size="lg" />
          <p className="text-sm text-muted-foreground">Loading kanji...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <KanjiBrowseGrid items={items} onCardClick={openDetail} />
          <KanjiBrowsePagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}

      <KanjiDetailModal
        open={selectedItemId !== null}
        item={detailItem}
        isLoading={isDetailLoading}
        isAddingToSrs={isAddingToSrs}
        onClose={closeDetail}
        onAddToSrs={addToSrs}
      />
    </div>
  )
}
