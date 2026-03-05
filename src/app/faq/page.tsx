import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ_CATEGORIES } from '@/lib/constants/faq-data'
import { FaqAccordion } from '@/components/faq/faq-accordion'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'FAQ - Wakaru',
  description:
    'Frequently asked questions about Wakaru, the research-backed Japanese learning platform.',
}

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold text-foreground">
            Wakaru <span className="text-muted-foreground font-normal text-base">分かる</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about learning Japanese with Wakaru
            </p>
          </div>

          <div className="mt-12">
            <FaqAccordion categories={FAQ_CATEGORIES} />
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Create an account
              </Link>{' '}
              and explore the in-app help section.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
