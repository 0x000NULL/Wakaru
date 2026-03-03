# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wakaru** (分かる - "to understand") is a research-backed Japanese learning platform guiding beginners to fluency through comprehensible input, spaced repetition (SRS), and immersion — without gamification. No streaks, badges, XP, or artificial engagement tactics.

See `plan.md` for the implementation roadmap, `architecture.md` for technical design, and `goal.md` for project vision.

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
- **Prisma 5.22** with **PostgreSQL 16** (Docker locally, DigitalOcean managed in production)
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
| Proxy | `src/proxy.ts` | Protects `/dashboard/*`, `/hiragana/*`, `/katakana/*`, `/vocabulary/*`, `/grammar/*`; redirects authed users from auth pages (Node.js runtime) |
| Auth helper | `src/lib/auth.ts` | `getAuthUser()` — reads cookie, verifies JWT, fetches user |
| JWT | `src/lib/utils/jwt.ts` | `signAccessToken`, `signRefreshToken`, `verifyAccessToken`, `verifyRefreshToken` |
| Cookies | `src/lib/utils/cookies.ts` | `setAuthCookies`, `clearAuthCookies` (HTTP-only, Secure, SameSite=Strict) |
| Password | `src/lib/utils/password.ts` | `hashPassword`, `verifyPassword` (bcrypt, cost 12) |
| Rate limit | `src/lib/utils/rate-limit.ts` | In-memory rate limiter per IP |
| Validation | `src/lib/validations/auth.ts` | Zod schemas: `registerSchema`, `loginSchema`, `forgotPasswordSchema`, `resetPasswordSchema` |
| Store | `src/store/auth-store.ts` | Zustand store with `persist` middleware (localStorage, key: `wakaru-auth`) |
| Email | `src/lib/utils/email.ts` | `sendPasswordResetEmail` — console.log stub, swap for Resend/SendGrid |

### API Response Pattern

All API routes use helpers from `src/lib/utils/api-response.ts`:

```typescript
return successResponse(data)                      // 200
return createdResponse(data)                      // 201
return validationError(message, details)          // 400
return unauthorizedError()                        // 401
return notFoundError()                            // 404
return rateLimitError()                           // 429
return serverError()                              // 500
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

### Kana System (Hiragana + Katakana)

Hiragana and katakana share the same architecture. Katakana reuses hiragana components with a `kanaType` parameter.

**Routes** (identical structure under `/hiragana/` and `/katakana/`):

| Route | Purpose |
|-------|---------|
| `/hiragana` or `/katakana` | Course overview — 14 groups in 3 sections, progress badges, achievements |
| `/hiragana/[groupId]` or `/katakana/[groupId]` | Group lesson — characters one at a time with keyboard navigation (ArrowLeft/ArrowRight) |
| `/hiragana/practice` or `/katakana/practice` | Quiz — 4 modes (recognition, typing, audio, mixed) with setup/active/results phases |
| `/hiragana/rules` or `/katakana/rules` | 5 special rules with examples |

**Data layer** — Static TypeScript constants in `src/lib/constants/`:

| File | Content |
|------|---------|
| `hiragana-data.ts` / `katakana-data.ts` | 79 characters each: character, romaji, group, mnemonic, example_words |
| `hiragana-groups.ts` / `katakana-groups.ts` | 14 groups each: id, name, description, character_count |
| `hiragana-rules.ts` / `katakana-rules.ts` | 5 special rules each with examples |

Types: `src/types/kana.ts` (`KanaCharacter`, `KanaGroup`, `KanaType`, `KanaRule`)

**Utilities** (`src/lib/utils/kana.ts`):
- `getStrokeOrderSvgPath(character)` — derives path from Unicode codepoint: `/svg/kana/{codepoint}.svg`
- `speakKana(text, rate)` — Web Speech API TTS with `ja-JP` voice
- `getGroupById(groupId)` / `getCharactersByGroup(characters, groupId)`

Stroke order SVGs: 142 files in `public/svg/kana/` (from [animCJK](https://github.com/parsimonhi/animCJK), LGPL). Download with `bash scripts/download-kana-svg.sh`.

**Quiz engine** (`src/lib/utils/quiz-engine.ts`) — pure functions, no framework deps:
- **Recognition**: shows character, pick correct romaji from 4 options (keyboard 1-4)
- **Typing**: shows romaji, pick character from grouped grid (`CharacterPicker`)
- **Audio**: auto-plays via `speakKana`, pick character from 4 options (keyboard 1-4, Space to replay)
- **Mixed**: round-robin of all 3 types

**Progress tracking** — SRS-lite algorithm (`src/lib/utils/srs-lite.ts`):
- Interval ladder: `[0, 1, 3, 7, 14, 30]` days indexed by repetition count
- Correct → `repetitions + 1`, incorrect → `max(0, repetitions - 1)`
- Status: 0=new, 1-2=learning, 3-4=reviewing, 5+=mastered

**Shared kana progress logic** (`src/lib/utils/kana-progress.ts`): `handleProgressGET` and `handleProgressPOST` — reused by both `/api/v1/hiragana/progress` and `/api/v1/katakana/progress` routes.

**API endpoints** (identical for hiragana and katakana):
- `GET /api/v1/{hiragana|katakana}/progress` — Returns progress summary merging all 79 kana with user's `UserProgress` records
- `POST /api/v1/{hiragana|katakana}/progress` — Accepts `{ answers: [{ character, isCorrect }] }`, upserts via `prisma.$transaction`
- `GET /api/v1/{hiragana|katakana}/progress/due` — Returns characters with `next_review_at <= now`

**Achievements** (`src/lib/constants/achievements.ts`) — computed client-side from progress summary, no DB table. 7 milestones: First Step, Vowel Master, Basic Complete, Halfway There, Full Set, Sharp Eye (90%+ accuracy), Hiragana Master.

### Vocabulary System

Full vocabulary learning system with browse, learn, and review flows.

**Routes**:

| Route | Purpose |
|-------|---------|
| `/vocabulary` | Hub page with stats, due reviews, and action cards |
| `/vocabulary/browse` | Browse/search vocabulary with JLPT level and frequency tier filters |
| `/vocabulary/learn` | Learn new words (20/day limit) with example sentences |
| `/vocabulary/review` | Review due words with SRS (rating: again/hard/good/easy) |

**API endpoints**:

| Endpoint | Purpose |
|----------|---------|
| `GET /api/v1/vocabulary` | Browse with pagination, search, JLPT level, frequency tier filters |
| `GET /api/v1/vocabulary/[id]` | Detail with SRS status and example sentences |
| `GET /api/v1/vocabulary/search` | Text search endpoint |
| `POST /api/v1/srs/learn` | Mark word as learning (creates UserProgress) |
| `GET /api/v1/srs/new` | Get new words (respects daily limit) |
| `GET /api/v1/srs/due` | Get words due for review with SRS data |
| `POST /api/v1/srs/review` | Submit review rating, updates SRS state |
| `GET /api/v1/srs/stats` | Stats with due count, learned today, weekly learning velocity |

**SM-2 SRS algorithm** (`src/lib/utils/srs-algorithm.ts`) — full SM-2 for vocabulary/grammar (distinct from SRS-lite used for kana):
- 4 ratings: again, hard, good, easy
- Ease factor adjusted per SM-2 formula (min 1.3)
- Exports: `calculateNextReview`, `getNextReviewDate`, `createNewCard`, `deriveStatus`

**Frequency tiers**: essential, core, intermediate, expanding, advanced
**JLPT levels**: N5, N4, N3 (extensible)

Components in `src/components/vocabulary/`. Stores: `learnStore`, `reviewStore`, `browseStore` (all ephemeral).

### Grammar System

Grammar patterns with browsing, detail views, and quiz practice.

**Routes**:

| Route | Purpose |
|-------|---------|
| `/grammar` | Pattern overview with category grouping and difficulty/JLPT/search filtering |
| `/grammar/[id]` | Pattern detail with explanations, examples, and SRS tracking |
| `/grammar/practice` | Quiz with fill-in-blank and multiple-choice questions |

**Data** (`src/lib/constants/`):
- `grammar-data.ts` — N5 patterns (40+)
- `grammar-data-n4.ts` — N4 patterns (50+)
- `grammar-exercises.ts` — 200+ exercises (fill-in-blank and multiple-choice)

**7 categories**: particles, copula-existence, verbs, adjectives, sentence-patterns, connectors, giving-receiving

**API endpoints**:
- `GET /api/v1/grammar` — List with pagination, JLPT level, difficulty, search filters
- `GET /api/v1/grammar/[id]` — Detail with SRS status
- `GET /api/v1/grammar/progress` — Progress stats

**Grammar quiz engine** (`src/lib/utils/grammar-quiz-engine.ts`) — pure functions parallel to kana quiz engine.

Components in `src/components/grammar/`. Stores: `grammarStore`, `grammarQuizStore` (both ephemeral).

### State Management

8 Zustand stores in `src/store/`:

| Store | File | Persistence | Purpose |
|-------|------|-------------|---------|
| `authStore` | `auth-store.ts` | localStorage (`wakaru-auth`) | User auth state |
| `quizStore` | `quiz-store.ts` | Ephemeral | Kana quiz sessions (hiragana + katakana) |
| `progressStore` | `progress-store.ts` | Ephemeral | Kana progress (mirrors server) |
| `learnStore` | `learn-store.ts` | Ephemeral | Vocabulary learn sessions |
| `reviewStore` | `review-store.ts` | Ephemeral | Vocabulary review (SRS) sessions |
| `browseStore` | `browse-store.ts` | Ephemeral | Vocabulary browsing with filters |
| `grammarStore` | `grammar-store.ts` | Ephemeral | Grammar pattern browsing |
| `grammarQuizStore` | `grammar-quiz-store.ts` | Ephemeral | Grammar quiz sessions |

Only `authStore` persists to localStorage. All others are ephemeral and mirror server state.

### Database Models (17 Prisma models)

Core models in `prisma/schema.prisma`:
- **User management**: `User`, `PasswordResetToken`
- **SRS tracking**: `UserProgress` (shared by kana, vocabulary, grammar — keyed by `category` + `item_id`)
- **Content**: `Kana`, `Vocabulary`, `Kanji`, `GrammarPattern`, `GrammarExample`, `ExampleSentence`
- **Relationships**: `VocabularySentence` (junction)
- **Media** (future immersion): `MediaContent`, `MediaEpisode`, `UserMediaProgress`, `MinedSentence`

### Deployment

Deployed on **DigitalOcean App Platform** (SFO region). Config in `.do/app.yaml`.

- **Service**: Next.js on `apps-s-1vcpu-0.5gb`, auto-deploys on push to `master`
- **Database**: Managed PostgreSQL 16 cluster (`wakaru-db`)
- **Build**: `DATABASE_URL="postgresql://placeholder:..." npx prisma generate && npm run build` (dummy URL because DB isn't available at build time)
- **Run**: `npx prisma db push --skip-generate --accept-data-loss && npm start` (uses `db push` instead of `migrate deploy` due to DO managed DB permissions)
- **Env vars**: `DATABASE_URL` (bound from DB), `JWT_SECRET`, `JWT_REFRESH_SECRET`, `NODE_ENV=production`
- **GitHub repo**: `0x000NULL/Wakaru`

To add a new protected route, add it to both `PROTECTED_ROUTES` in `src/proxy.ts` and `config.matcher`.

## Conventions

- **Imports**: Always use `@/` path alias, never relative paths
- **Prettier**: No semicolons, single quotes, trailing comma es5, 100 char width, avoid arrow parens
- **Database columns**: snake_case in Prisma/SQL (e.g., `password_hash`, `created_at`)
- **IDs**: CUID via `@default(cuid())`
- **Flexible fields**: JSONB for tags, settings, array-like data
- **Component files**: UI primitives in `src/components/ui/`, layout in `src/components/layout/`, feature components in `src/components/{feature}/` (e.g., `src/components/hiragana/`, `src/components/vocabulary/`, `src/components/grammar/`)
- **Utility files**: kebab-case in `src/lib/utils/` (e.g., `rate-limit.ts`, `srs-algorithm.ts`)
- **Constants files**: Static data in `src/lib/constants/` — importable by both app code and `prisma/seed.ts`
- **Type files**: Shared interfaces in `src/types/` (e.g., `kana.ts`, `vocabulary.ts`, `grammar.ts`, `grammar-quiz.ts`)
- **Validation files**: Zod schemas in `src/lib/validations/` (e.g., `auth.ts`, `vocabulary.ts`, `grammar.ts`, `srs.ts`)
