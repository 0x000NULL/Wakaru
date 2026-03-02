import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <main className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground">Wakaru</h1>
          <p className="mt-1 text-2xl text-muted-foreground">分かる</p>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          A research-backed Japanese learning platform. From your first hiragana character to
          fluency — through evidence-based methods, spaced repetition, and immersive learning.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            Login
          </Link>
        </div>

        <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-foreground">Evidence-Based</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Every feature grounded in language acquisition research and proven methodologies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Spaced Repetition</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Optimized review scheduling so you remember what you learn, long term.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Immersive Learning</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Learn through real Japanese media with interactive subtitles and sentence mining.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
