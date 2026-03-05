import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AuthUser } from '@/types/auth'

interface AuthState {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, displayName?: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  completeOnboarding: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true })
        try {
          const res = await fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          })
          const data = await res.json()
          if (!data.success) {
            throw new Error(data.error?.message ?? 'Login failed')
          }
          set({ user: data.data, isAuthenticated: true })
        } finally {
          set({ isLoading: false })
        }
      },

      register: async (email, password, displayName) => {
        set({ isLoading: true })
        try {
          const res = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, displayName }),
          })
          const data = await res.json()
          if (!data.success) {
            throw new Error(data.error?.message ?? 'Registration failed')
          }
          set({ user: data.data, isAuthenticated: true })
        } finally {
          set({ isLoading: false })
        }
      },

      logout: async () => {
        try {
          await fetch('/api/v1/auth/logout', { method: 'POST' })
        } finally {
          set({ user: null, isAuthenticated: false })
        }
      },

      completeOnboarding: () => {
        set(state => ({
          user: state.user ? { ...state.user, onboardingCompleted: true } : null,
        }))
      },

      checkAuth: async () => {
        set({ isLoading: true })
        try {
          const res = await fetch('/api/v1/user/profile')
          const data = await res.json()
          if (data.success) {
            set({ user: data.data, isAuthenticated: true })
          } else {
            set({ user: null, isAuthenticated: false })
          }
        } catch {
          set({ user: null, isAuthenticated: false })
        } finally {
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'wakaru-auth',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
