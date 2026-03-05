import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export default function Home() {
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

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn Japanese the way your brain wants to
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A research-backed platform that guides you from your first hiragana character to
              fluency — through comprehensible input, spaced repetition, and immersion. No streaks,
              no XP, no gamification.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/register"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-hover sm:w-auto"
              >
                Start Free
              </Link>
              <a
                href="#methodology"
                className="inline-flex h-12 w-full items-center justify-center rounded-md border border-border px-8 text-base font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Built on proven science</h2>
              <p className="mt-3 text-muted-foreground">
                Every feature is grounded in language acquisition research
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Comprehensible Input</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn through material just above your level — the proven &quot;i+1&quot; approach
                  from Krashen&apos;s research.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Spaced Repetition</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  SM-2 algorithm schedules reviews at optimal intervals, fighting the forgetting
                  curve discovered by Ebbinghaus.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Immersive Learning</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Practice with real Japanese media, interactive subtitles, and sentence mining from
                  anime and more.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">No Gamification</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No streaks, badges, or XP. Just genuine learning progress that keeps you motivated
                  through real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Journey */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Your learning journey</h2>
              <p className="mt-3 text-muted-foreground">
                A structured path from zero to fluency
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Kana',
                  description: 'Master hiragana and katakana — the foundation of Japanese reading.',
                },
                {
                  step: '2',
                  title: 'Vocabulary',
                  description: 'Build your word bank with 3000+ essential words using SRS.',
                },
                {
                  step: '3',
                  title: 'Grammar',
                  description: 'Learn patterns from N5 to N3 with clear explanations and practice.',
                },
                {
                  step: '4',
                  title: 'Immersion',
                  description: 'Apply everything through real Japanese media and sentence mining.',
                },
              ].map((item) => (
                <div key={item.step} className="relative rounded-lg border border-border p-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Features that matter</h2>
              <p className="mt-3 text-muted-foreground">
                Every tool designed with language acquisition in mind
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Stroke Order Animation',
                  description: 'Learn to write kana correctly with animated stroke-by-stroke guides.',
                },
                {
                  title: 'Adaptive SRS',
                  description: 'Review scheduling adapts to your performance — spend time where it matters.',
                },
                {
                  title: 'Placement Assessment',
                  description: 'Quick quiz determines your level so you start at the right place.',
                },
                {
                  title: 'Grammar Exercises',
                  description: 'Fill-in-the-blank and multiple-choice quizzes reinforce patterns.',
                },
                {
                  title: 'Sentence Mining',
                  description: 'Save sentences from immersion content to review with SRS.',
                },
                {
                  title: 'Progress Tracking',
                  description: 'See your real progress across all skills — no vanity metrics.',
                },
              ].map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Backing */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Grounded in research</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wakaru&apos;s approach is built on decades of language acquisition research.
              Stephen Krashen&apos;s Input Hypothesis informs our comprehensible input approach.
              Hermann Ebbinghaus&apos;s forgetting curve research drives our spaced repetition
              scheduling. The SM-2 algorithm, proven across millions of learners, ensures you review
              at the optimal moment for long-term retention.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-t border-border bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Ready to start?</h2>
            <p className="mt-4 text-muted-foreground">
              Join Wakaru and begin your Japanese learning journey with a method that works.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Create Free Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
