// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Header } from '@/components/layout/header'

let mockPathname = '/dashboard'

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
    onClick,
  }: {
    children: React.ReactNode
    href: string
    className?: string
    onClick?: () => void
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
}))

const mockLogout = vi.fn()
let mockAuthState: {
  user: { email: string; displayName: string } | null
  isAuthenticated: boolean
  isLoading: boolean
  logout: ReturnType<typeof vi.fn>
  login: ReturnType<typeof vi.fn>
  register: ReturnType<typeof vi.fn>
  checkAuth: ReturnType<typeof vi.fn>
} = {
  user: { email: 'test@example.com', displayName: 'Test User' },
  isAuthenticated: true,
  isLoading: false,
  logout: mockLogout,
  login: vi.fn(),
  register: vi.fn(),
  checkAuth: vi.fn(),
}

vi.mock('@/store/auth-store', () => ({
  useAuthStore: () => mockAuthState,
}))

describe('Header', () => {
  beforeEach(() => {
    mockPathname = '/dashboard'
    mockLogout.mockReset()
    mockAuthState = {
      user: { email: 'test@example.com', displayName: 'Test User' },
      isAuthenticated: true,
      isLoading: false,
      logout: mockLogout,
      login: vi.fn(),
      register: vi.fn(),
      checkAuth: vi.fn(),
    }
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Wakaru')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const hamburger = screen.getByLabelText('Toggle menu')

    // Menu should be hidden initially
    const mobileMenu = hamburger.closest('header')!.querySelector('.border-t')!
    expect(mobileMenu).toHaveClass('hidden')

    // Click to open
    await user.click(hamburger)
    expect(mobileMenu).not.toHaveClass('hidden')

    // Click to close
    await user.click(hamburger)
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('shows dashboard nav items when showDashboardNav + authenticated', async () => {
    const user = userEvent.setup()
    render(<Header showDashboardNav />)

    // Open mobile menu
    await user.click(screen.getByLabelText('Toggle menu'))

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Vocabulary')).toBeInTheDocument()
    expect(screen.getByText('Grammar')).toBeInTheDocument()
    expect(screen.getByText('Immersion')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('hides dashboard nav items when showDashboardNav={false}', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByLabelText('Toggle menu'))

    // The mobile menu should not show nav items
    expect(screen.queryByText('Vocabulary')).not.toBeInTheDocument()
    expect(screen.queryByText('Grammar')).not.toBeInTheDocument()
  })

  it('hides dashboard nav items when unauthenticated', async () => {
    mockAuthState = {
      ...mockAuthState,
      user: null,
      isAuthenticated: false,
    }
    const user = userEvent.setup()
    render(<Header showDashboardNav />)

    await user.click(screen.getByLabelText('Toggle menu'))

    expect(screen.queryByText('Vocabulary')).not.toBeInTheDocument()
    expect(screen.queryByText('Grammar')).not.toBeInTheDocument()
  })

  it('active nav item has correct styling classes', async () => {
    mockPathname = '/vocabulary'
    const user = userEvent.setup()
    render(<Header showDashboardNav />)

    await user.click(screen.getByLabelText('Toggle menu'))

    const vocabLink = screen.getByText('Vocabulary').closest('a')!
    expect(vocabLink).toHaveClass('bg-primary/10')
    expect(vocabLink).toHaveClass('text-primary')

    const dashboardLink = screen.getByText('Dashboard').closest('a')!
    expect(dashboardLink).toHaveClass('text-muted-foreground')
  })

  it('clicking nav item closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header showDashboardNav />)

    const hamburger = screen.getByLabelText('Toggle menu')
    await user.click(hamburger)

    const mobileMenu = hamburger.closest('header')!.querySelector('.border-t')!
    expect(mobileMenu).not.toHaveClass('hidden')

    await user.click(screen.getByText('Vocabulary'))

    expect(mobileMenu).toHaveClass('hidden')
  })
})
