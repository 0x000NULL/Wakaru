import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              Wakaru
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Research-backed Japanese learning. From first kana to fluency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Learn</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Methodology</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Comprehensible Input</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Spaced Repetition (SM-2)</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Immersive Learning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wakaru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
