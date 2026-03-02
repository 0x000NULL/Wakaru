// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Sidebar } from '@/components/layout/sidebar'

let mockPathname = '/dashboard'

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode
    href: string
    className?: string
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}))

describe('Sidebar', () => {
  it('renders all 5 nav items', () => {
    render(<Sidebar />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Vocabulary')).toBeInTheDocument()
    expect(screen.getByText('Grammar')).toBeInTheDocument()
    expect(screen.getByText('Immersion')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('active item has bg-primary/10 text-primary classes', () => {
    mockPathname = '/dashboard'
    render(<Sidebar />)

    const dashboardLink = screen.getByText('Dashboard').closest('a')!
    expect(dashboardLink).toHaveClass('bg-primary/10')
    expect(dashboardLink).toHaveClass('text-primary')
  })

  it('inactive items have text-muted-foreground class', () => {
    mockPathname = '/dashboard'
    render(<Sidebar />)

    const vocabLink = screen.getByText('Vocabulary').closest('a')!
    expect(vocabLink).toHaveClass('text-muted-foreground')
    expect(vocabLink).not.toHaveClass('bg-primary/10')
  })

  it('has hidden and lg:block classes (desktop-only)', () => {
    render(<Sidebar />)

    const aside = screen.getByText('Dashboard').closest('aside')!
    expect(aside).toHaveClass('hidden')
    expect(aside).toHaveClass('lg:block')
  })
})
