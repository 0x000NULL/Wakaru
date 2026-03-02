# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ManabU** (学ぶ - "to learn") is a research-backed Japanese learning platform guiding beginners to fluency through comprehensible input, spaced repetition (SRS), and immersion — without gamification. No streaks, badges, XP, or artificial engagement tactics.

See `plan.md` for the implementation roadmap, `architecture.md` for technical design, and `goal.md` for project vision.

## Current Status

Phase 1A (Foundation), Phase 1B (Hiragana Data), Phase 1C (Hiragana Learning Interface), Hiragana Practice Modes, and Hiragana Progress Tracking are complete. The project has 17 Prisma models, full JWT auth system, basic UI components, responsive navigation, Zustand stores (auth, quiz, progress), auth pages, dashboard layout, the complete hiragana data layer (79 characters with mnemonics, example words, stroke order SVGs, special rules, and utility functions), the full hiragana learning interface (course overview, group lessons with keyboard navigation, and special rules page), 4 quiz modes (recognition, typing, audio, mixed) with session-based scoring, and persistent progress tracking with SRS-lite scheduling, per-group progress badges, and a 7-achievement milestone system.

## Commands

```bash
# Development
npm run dev                                    # Start dev server
npm run build                                  # Production build
npm run lint                                   # ESLint
npm run format                                 # Prettier (writes files)
npx tsc --noEmit                               # Type check

# Testing (Vitest)
npm test                                       # Watch mode
npm run test:run                               # Single run (CI)
npx vitest run src/lib/utils/__tests__/        # Run specific test directory
npx vitest run src/lib/utils/__tests__/jwt     # Run tests matching pattern

# Database (requires Docker: docker compose up -d postgres)
npx prisma migrate dev --name <name>           # Create + apply migration
npx prisma generate                            # Regenerate client after schema changes
npx prisma db seed                             # Seed sample data
npx prisma studio                              # Visual database browser
npx prisma migrate reset                       # Reset DB (destructive)
```

## Tech Stack

- **Next.js 16.1.6** (App Router) / **React 19** / **TypeScript 5**
- **Tailwind CSS 4** / **Zustand 5** (state) / **React Hook Form** + **Zod 4** (validation)
- **Prisma 5.22** with **PostgreSQL 15** (Docker)
- **jsonwebtoken** (JWT) / **bcryptjs** (password hashing, cost 12)
- **Vitest 4** + **Testing Library** (testing)

## Architecture

### Database Access

Always import the Prisma singleton — never instantiate `new PrismaClient()` elsewhere:

```typescript
import prisma from '@/lib/db'
```

### Authentication Flow

JWT-based auth with HTTP-only cookies (`access_token` 7d, `refresh_token` 30d). Key files:

| Layer | File | Purpose |
|-------|------|---------|
| Proxy | `src/proxy.ts` | Protects `/dashboard/*` and `/hiragana/*`, redirects authed users from auth pages (Node.js runtime) |
| Auth helper | `src/lib/auth.ts` | `getAuthUser()` — reads cookie, verifies JWT, fetches user |
| JWT | `src/lib/utils/jwt.ts` | `signAccessToken`, `signRefreshToken`, `verifyAccessToken`, `verifyRefreshToken` |
| Cookies | `src/lib/utils/cookies.ts` | `setAuthCookies`, `clearAuthCookies` (HTTP-only, Secure, SameSite=Strict) |
| Password | `src/lib/utils/password.ts` | `hashPassword`, `verifyPassword` (bcrypt, cost 12) |
| Rate limit | `src/lib/utils/rate-limit.ts` | In-memory rate limiter per IP |
| Validation | `src/lib/validations/auth.ts` | Zod schemas: `registerSchema`, `loginSchema`, `forgotPasswordSchema`, `resetPasswordSchema` |
| Store | `src/store/auth-store.ts` | Zustand store with `persist` middleware (localStorage) |
| Email | `src/lib/utils/email.ts` | `sendPasswordResetEmail` — console.log stub, swap for Resend/SendGrid |

### API Response Pattern

All API routes use helpers from `src/lib/utils/api-response.ts`:

```typescript
// Success responses
return successResponse(data)          // 200
return createdResponse(data)          // 201

// Error responses
return validationError(message, details)  // 400
return unauthorizedError()                // 401
return notFoundError()                    // 404
return rateLimitError()                   // 429
return serverError()                      // 500
```

Response shape: `{ success: true, data, meta? }` or `{ success: false, error: { code, message, details? } }`

### API Route Pattern

Routes live under `src/app/api/v1/`. Each route validates input with Zod, checks rate limits on public endpoints, uses Prisma `select` to return only needed fields, and wraps everything in try-catch with `serverError()` fallback.

### Route Groups

- `src/app/(auth)/` — Login, register, reset-password pages (shared centered auth layout)
- `src/app/(dashboard)/` — Protected app pages (Header + Sidebar layout)

### UI Components

Components in `src/components/ui/` follow a consistent pattern: `'use client'`, named exports, `cn()` for class merging, variant props (e.g., `variant`, `size`). Sub-components (CardHeader, ModalBody, etc.) are simple functions, not forwardRef.

Navigation items are shared via `src/lib/constants/navigation.ts` — both Sidebar (desktop) and Header (mobile menu) import `dashboardNavItems` from there.

### Testing

Two test environments coexist:
- **Node** (default): API route and utility tests (`*.test.ts`)
- **jsdom** (per-file): Component tests (`*.test.tsx`) opt in with `// @vitest-environment jsdom` at the top of the file

Integration tests for auth routes mock `next/headers` (via `vi.mock`) since `cookies()` requires the Next.js request scope. Component tests mock `next/navigation` and `next/link`. Test files follow the `__tests__/` directory convention.

Setup file `src/test-setup.ts` imports `@testing-library/jest-dom/vitest` for DOM matchers.

### Hiragana Learning Interface

Routes under `src/app/(dashboard)/hiragana/`:

| Route | File | Purpose |
|-------|------|---------|
| `/hiragana` | `page.tsx` | Course overview — all 14 groups in 3 sections, progress overview, per-group progress badges, achievements |
| `/hiragana/[groupId]` | `[groupId]/page.tsx` | Group lesson — characters one at a time with keyboard navigation (ArrowLeft/ArrowRight) |
| `/hiragana/practice` | `practice/page.tsx` | Quiz practice — 4 modes (recognition, typing, audio, mixed) with setup/active/results phases |
| `/hiragana/rules` | `rules/page.tsx` | 5 special rules (long vowels, particles, confused pairs, etc.) |

Feature components live in `src/components/hiragana/`. The group lesson page uses local `useState` for character index — no Zustand store needed. All data is static TypeScript constants (no API calls). To add a new protected route, add it to both `PROTECTED_ROUTES` in `src/proxy.ts` and `config.matcher`.

### Hiragana Data Layer

Static educational content lives as TypeScript constants in `src/lib/constants/`, importable by both UI and seed script:

| File | Exports | Purpose |
|------|---------|---------|
| `hiragana-data.ts` | `HIRAGANA_CHARACTERS` (79 entries) | Full character data: character, romaji, group, display_order, stroke_count, mnemonic, example_words |
| `hiragana-groups.ts` | `HIRAGANA_GROUPS` (14 entries) | Group metadata: id, name, description, character_count, is_dakuten, is_combination |
| `hiragana-rules.ts` | `HIRAGANA_RULES` (5 entries) | Special rules: long vowels, spelling rules, small tsu, particle exceptions, confused pairs |

Types for kana data are in `src/types/kana.ts` (`KanaCharacter`, `KanaGroup`, `KanaExampleWord`, `HiraganaRule`).

Utilities in `src/lib/utils/kana.ts`:
- `getStrokeOrderSvgPath(character)` — derives path from Unicode codepoint: `/svg/kana/{codepoint}.svg`
- `speakKana(text, rate)` — Web Speech API TTS with `ja-JP` voice (MVP audio, no files needed)
- `getGroupById(groupId)` / `getCharactersByGroup(characters, groupId)` — data lookup helpers

Stroke order SVGs live in `public/svg/kana/` (71 files from [animCJK](https://github.com/parsimonhi/animCJK), LGPL). Download with `bash scripts/download-kana-svg.sh`.

The seed script (`prisma/seed.ts`) imports `HIRAGANA_CHARACTERS` and upserts all 79 characters, so the constants file is the single source of truth.

### Hiragana Practice System

Quiz engine (`src/lib/utils/quiz-engine.ts`) is pure functions with no framework dependencies — generates questions, validates answers, calculates stats. Key concepts:

- **Recognition**: shows character, pick correct romaji from 4 options (keyboard 1-4)
- **Typing**: shows romaji, pick character from a grouped grid (`CharacterPicker`)
- **Audio**: auto-plays sound via `speakKana`, pick character from 4 options (keyboard 1-4, Space to replay)
- **Mixed**: round-robin distribution of all 3 types

Quiz store (`src/store/quiz-store.ts`) manages session lifecycle: `setup → active → results`. Ephemeral (no `persist`). Supports "Practice Again" (same config), "Practice Missed" (only missed characters), and "Change Settings" (back to setup).

Types in `src/types/quiz.ts`: `QuizMode`, `QuizPhase`, `QuestionType`, `QuizQuestion`, `QuizAnswer`, `QuizSessionConfig`, `QuizSessionStats`.

### Hiragana Progress Tracking

SRS-lite algorithm (`src/lib/utils/srs-lite.ts`) uses a fixed interval ladder instead of full SM-2 — simpler and appropriate for hiragana:
- **Interval ladder**: `[0, 1, 3, 7, 14, 30]` days indexed by repetition count
- **Correct answer** → `repetitions + 1`, **incorrect** → `max(0, repetitions - 1)`
- **Status derived from repetitions**: 0=new, 1-2=learning, 3-4=reviewing, 5+=mastered
- `ease_factor` left at default 2.5 (unused for hiragana, reserved for vocab SRS later)
- Exports: `processReview(currentRepetitions, isCorrect) → SrsUpdate`, `deriveStatus(repetitions)`, `calculateNextInterval(repetitions)`

Types in `src/types/progress.ts`: `ProgressStatus`, `CharacterProgress`, `HiraganaProgressSummary`, `GroupProgress`, `Achievement`, `SrsState`, `SrsUpdate`, `DueReviewsResponse`.

API endpoints:
- **GET `/api/v1/hiragana/progress`** — Returns `HiraganaProgressSummary` merging all 79 kana with user's `UserProgress` records
- **POST `/api/v1/hiragana/progress`** — Accepts `{ answers: [{ character, isCorrect }] }`, aggregates per-character (majority wins), upserts via `prisma.$transaction`, returns updated summary
- **GET `/api/v1/hiragana/progress/due`** — Returns characters with `next_review_at <= now`

Progress store (`src/store/progress-store.ts`) is ephemeral (mirrors server state). Actions: `fetchHiraganaProgress()`, `submitQuizResults(answers)`.

Quiz results component (`src/components/hiragana/quiz-results.tsx`) auto-submits progress on mount and shows a "Progress saved" indicator.

Achievements (`src/lib/constants/achievements.ts`) are computed client-side from `HiraganaProgressSummary` — no DB table. 7 milestones: First Step, Vowel Master, Basic Complete, Halfway There, Full Set, Sharp Eye (90%+ accuracy), Hiragana Master. `computeAchievements(progress)` evaluates them all.

UI components:
- `ProgressOverview` — completion bar, status counts (mastered/reviewing/learning), accuracy, due review CTA
- `GroupProgressBadge` — small X/Y badge per group card (green when all mastered, blue otherwise)
- `AchievementList` — grid of locked/unlocked achievements

### State Management

Zustand stores in `src/store/`. Auth state uses `persist` middleware (key: `manabu-auth`). Quiz and progress states are ephemeral (no persist). Planned stores: `settingsStore` (user preferences).

## Conventions

- **Imports**: Always use `@/` path alias, never relative paths
- **Prettier**: No semicolons, single quotes, trailing comma es5, 100 char width, avoid arrow parens
- **Database columns**: snake_case in Prisma/SQL (e.g., `password_hash`, `created_at`)
- **IDs**: CUID via `@default(cuid())`
- **Flexible fields**: JSONB for tags, settings, array-like data
- **Component files**: UI primitives in `src/components/ui/`, layout in `src/components/layout/`, feature components in `src/components/{feature}/` (e.g., `src/components/hiragana/`)
- **Utility files**: kebab-case in `src/lib/utils/` (e.g., `rate-limit.ts`, `api-response.ts`)
- **Constants files**: Static data in `src/lib/constants/` — importable by both app code and `prisma/seed.ts`
- **Type files**: Shared interfaces in `src/types/` (e.g., `kana.ts`, `auth.ts`, `api.ts`, `progress.ts`)
- **Validation files**: Zod schemas in `src/lib/validations/` (e.g., `auth.ts`, `progress.ts`)
