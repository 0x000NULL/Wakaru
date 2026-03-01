# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

**Current Phase**: Phase 1A Foundation (Partially Complete)
- ✅ Next.js 14+ project initialized with TypeScript and Tailwind CSS
- ✅ Complete database schema defined in Prisma
- ✅ Project folder structure created
- ✅ Development environment configured
- ⏳ Database migration pending (requires Docker Desktop)
- 🔜 Next: Authentication system implementation

See `plan.md` for detailed implementation roadmap, `architecture.md` for complete technical architecture, and `goal.md` for project vision.

## Project Overview

**ManabU** (学ぶ - "to learn") is a comprehensive, research-backed Japanese learning platform that guides complete beginners to fluency through evidence-based methodologies, comprehensible input, spaced repetition (SRS), and immersive learning—without gamification.

### Core Philosophy
- **No gamification**: Focus on genuine progress over artificial engagement metrics
- **Evidence-based**: Every feature grounded in language acquisition research (Krashen, SRS studies, immersion methodologies)
- **Comprehensive**: From first hiragana character to advanced native media comprehension
- **Learning stages**: Foundation (0-3 months) → Building Blocks (3-12 months) → Immersion & Expansion (Year 2+)

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ with React 18+ and TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (lightweight, modern)
- **Forms**: React Hook Form + Zod validation
- **PWA**: next-pwa for offline support

### Backend
- **Runtime**: Node.js 20+ LTS
- **API**: Next.js API Routes (serverless functions)
- **ORM**: Prisma with PostgreSQL 15+
- **Authentication**: NextAuth.js or custom JWT implementation
- **Validation**: Zod for type-safe schema validation

### Database
- **PostgreSQL 15+** (Managed service: Supabase, Railway, or AWS RDS)
- **Connection Pooling**: PgBouncer for serverless environments
- **Migrations**: Prisma Migrate

### Infrastructure
- **Hosting**: Vercel or Railway
- **File Storage**: AWS S3, Cloudflare R2, or Supabase Storage (subtitles, audio, images)
- **CDN**: Cloudflare
- **Monitoring**: Sentry for error tracking
- **Email**: Resend or SendGrid

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth layout group (login, register, reset-password)
│   ├── (dashboard)/         # Main app (dashboard, vocabulary, kanji, grammar, immersion, settings)
│   ├── api/v1/              # API routes
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── features/            # Feature-specific (srs, media, kana)
│   └── layout/              # Header, Sidebar, Footer
├── lib/
│   ├── api/                 # API client functions
│   ├── utils/               # Utilities (srs-algorithm, furigana, jmdict-parser)
│   └── hooks/               # Custom React hooks
├── store/                   # Zustand state management
├── types/                   # TypeScript type definitions
└── styles/
```

## Key System Components

### 1. Database Schema

**Location**: `prisma/schema.prisma`

The complete schema is already defined with 13 models representing the entire application data structure. The schema uses:
- **CUID** for primary keys (`@default(cuid())`)
- **JSONB** for flexible data (tags, settings, array fields)
- **Cascading deletes** to maintain referential integrity
- **Strategic indexes** on frequently queried fields

**Core Tables**:
- `users`: User accounts with settings JSONB column
- `user_progress`: SRS tracking (category, item_id, intervals, ease_factor, next_review_at)
- `vocabulary`: 3000+ core words (word, reading, meaning, JLPT level, frequency_rank, tags JSONB)
- `example_sentences`: Japanese-English sentence pairs
- `kanji`: 2136 Jōyō kanji with radicals, readings, mnemonics, stroke order SVG
- `grammar_patterns`: Grammar explanations with JLPT levels
- `media_content` + `media_episodes`: Anime/drama library with subtitle URLs
- `mined_sentences`: User's personal sentence collection from immersion
- `kana`: Hiragana/katakana reference table

**Critical Indexes** (already defined in schema):
- `user_progress`: `[user_id, next_review_at]` - SRS due review queries
- `user_progress`: `[user_id, category]` - Progress filtering
- `vocabulary`: `[frequency_rank]` - Sorting by frequency
- `vocabulary`: `[jlpt_level]` - JLPT level filtering
- `kanji`: `[jlpt_level]`, `[frequency_rank]`, `[grade]` - Multiple access patterns
- `kana`: `[type]`, `[group]` - Character lookups

**Database Seeding**: Sample data includes 25 hiragana characters, 5 vocabulary words, and 3 grammar patterns. See `prisma/seed.ts`.

See `architecture.md` for complete schema definitions and detailed explanations.

### 2. Prisma Client Singleton

**Location**: `src/lib/db.ts`

The Prisma client is exported as a singleton to prevent connection issues in development (Next.js hot reload). Always import from this file:

```typescript
import prisma from '@/lib/db'

// Use in API routes, server components, server actions
const users = await prisma.user.findMany()
```

**Critical**: Never instantiate `new PrismaClient()` directly elsewhere in the codebase.

### 3. SRS Algorithm (Modified SM-2)

Will be located in `src/lib/utils/srs-algorithm.ts` (not yet implemented):

**Core Logic**:
- Intervals: 1d → 6d → ~2w → ~1m → ~2m → ~4m → ~8m (adjusted by ease factor)
- Ratings: 'again' (reset), 'hard' (0.8x interval), 'good' (1x interval), 'easy' (1.3x interval)
- Ease factor: Starts at 2.5, adjusted based on performance (minimum 1.3)
- Mastery threshold: interval >= 30 days

**Key Functions**:
- `calculateNextReview(card, rating)`: Returns updated SRSCard
- `getNextReviewDate(interval)`: Converts interval to Date (normalized to 4 AM)

See `architecture.md` for complete implementation with TypeScript code.

### 4. API Structure

**Note**: API routes not yet implemented. Will be located in `src/app/api/v1/`.

**Authentication**: JWT with HTTP-only cookies, bcrypt password hashing

**Planned Endpoints** (all under `/api/v1/`):
- `auth/*`: register, login, logout, refresh, forgot-password, reset-password
- `user/profile`, `user/stats`: User data and progress statistics
- `vocabulary`, `vocabulary/:id`, `vocabulary/search`: Vocabulary management
- `srs/due`, `srs/review`, `srs/new`, `srs/learn`: SRS review system
- `kanji`, `kanji/:character`: Kanji learning
- `grammar`, `grammar/:id`: Grammar patterns
- `media`, `media/:id`, `media/:mediaId/episodes/:episodeId`: Immersion content
- `sentences/mine`: Sentence mining from media

**Response Format**:
```typescript
Success: { success: true, data: {...}, meta?: { total, limit, offset, hasMore } }
Error: { success: false, error: { code, message, details? } }
```

See `architecture.md` for complete endpoint specifications.

### 5. Interactive Media Player

**Note**: Not yet implemented. Planned for Phase 1E.

**Core Features**:
- Dual subtitles (Japanese with furigana + English)
- Click-to-lookup dictionary on any word
- Sentence mining: save sentence + audio clip + screenshot + timestamp
- Playback controls: replay subtitle, slow speed, loop for shadowing

**Implementation**: Video.js or similar, subtitle parsing (.srt/.ass), dictionary API (JMdict)

### 6. PWA Offline Support

**Note**: Not yet implemented. Planned for Phase 2.

**Planned Caching Strategy**:
- Static assets: Cache-first
- Content API (vocabulary/kanji/grammar): NetworkFirst with 1-week cache
- SRS API: NetworkOnly with background sync queue
- Offline reviews queued in IndexedDB and synced when online

## Development Commands

### First-Time Setup (Docker Required)

The database requires Docker Desktop to be installed and running.

```bash
# 1. Start PostgreSQL container
docker compose up -d postgres

# 2. Verify database is running
docker compose ps
docker compose logs postgres

# 3. Generate initial migration and apply to database
npx prisma migrate dev --name init

# 4. Seed database with sample data (hiragana, vocabulary, grammar)
npx prisma db seed

# 5. Test database connection
npx tsx src/lib/__test-db.ts

# 6. Start development server
npm run dev
```

### Daily Development

```bash
# Start dev server (hot reload enabled)
npm run dev

# Open Prisma Studio (visual database browser)
npx prisma studio
```

### Database Operations

```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create new migration (auto-applies in dev)
npx prisma migrate dev --name <migration_name>

# Apply pending migrations (production)
npx prisma migrate deploy

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Seed database with sample data
npx prisma db seed
```

### Docker Commands

```bash
# Start PostgreSQL
docker compose up -d postgres

# Stop PostgreSQL (preserves data)
docker compose stop postgres

# Stop and remove containers (preserves data in volume)
docker compose down

# View PostgreSQL logs
docker compose logs -f postgres

# Access PostgreSQL CLI
docker compose exec postgres psql -U manabu_dev -d manabu_dev
```

### Code Quality

```bash
# Lint code
npm run lint

# Format all code with Prettier
npm run format

# Check formatting without modifying files
npm run format:check

# Type check (no output = success)
npx tsc --noEmit
```

### Build & Deployment

```bash
# Build for production
npm run build

# Start production server (after build)
npm run start

# Test production build locally
npm run build && npm run start
```

## Development Principles

### Database Migrations
- **Never drop columns** in production (deprecate instead for backward compatibility)
- Test all migrations on staging first
- Automated backups before production migrations

### API Design
- All inputs validated with Zod schemas
- Use Prisma ORM for SQL injection prevention
- Implement rate limiting on auth endpoints
- Paginate large lists (cursor or offset pagination)

### Frontend Performance
- Use React.memo for expensive renders (especially SRS review cards)
- Lazy load heavy components (video player, large lists)
- Virtual lists (react-window) for vocabulary/kanji browsing
- Next.js Image component for optimized images

### Security
- Passwords: bcrypt with cost factor 12
- JWT tokens expire after 7 days, refresh tokens after 30 days
- HTTP-only, Secure, SameSite=Strict cookies
- CSRF protection (Next.js built-in)
- Content Security Policy headers

### State Management (Zustand)
- `authStore`: User authentication state
- `reviewStore`: SRS review session state and queue
- `settingsStore`: User preferences
- Use `persist` middleware for auth state only

## Content Strategy

### Vocabulary Sources
1. **JMdict** (primary dictionary)
2. **Tatoeba** (example sentences - requires quality filtering)
3. **BCCWJ** frequency lists (for prioritization)
4. Manual curation for gaps and quality control

### Media Library
- **Do not host copyrighted video** - use curated links to legal streaming services
- Subtitle sources: Kitsunekko, community contributions (moderated), manual creation
- Metadata: difficulty level, JLPT level, genre tags, vocabulary coverage percentage

### Learning Progression
- **Stage 1 (0-3 months)**: Hiragana/Katakana → 500-1000 words → Basic grammar (N5) → Optional kanji introduction
- **Stage 2 (3-12 months)**: 2000-3000 words → 300-500 kanji → N4-N5 grammar → Graded immersion content
- **Stage 3 (Year 2+)**: 5000-10,000+ words → 1000-2000+ kanji → N3-N1 grammar → Native content immersion

## Implementation Phases

See `plan.md` for detailed task breakdowns. High-level phases:

**Phase 1: MVP (Minimum Viable Product)**
1. **Phase 1A - Foundation**: Project setup, auth system, basic UI
2. **Phase 1B - First Learning Module**: Hiragana curriculum and practice
3. **Phase 1C - Vocabulary System**: SRS algorithm, flashcard reviews, 3000 words
4. **Phase 1D - Expansion**: Katakana, basic grammar (N5-N4)
5. **Phase 1E - Immersion Tools**: Video player, subtitles, sentence mining
6. **Phase 1F - Polish**: Dashboard, mobile optimization, performance, launch prep

**Phase 2: Version 1.0**
- Full kanji curriculum (2000+ characters)
- Advanced grammar (N3-N1)
- Expanded media library (50+ titles)
- JLPT preparation modules
- Offline PWA functionality

**Phase 3: Version 2.0+**
- Community features
- Reading library
- Writing/speaking practice
- Advanced AI features

## Anti-Patterns to Avoid

- **No gamification**: No streaks, badges, XP, or artificial engagement tactics
- **No data selling**: User data used solely for learning optimization
- **No artificial scarcity**: Don't gate content unnecessarily
- **No time estimates**: Focus on what needs to be done, not when

## Success Metrics

**Learning Outcomes** (Primary):
- 50%+ user retention at 3 months, 30%+ at 6 months
- Users reaching 1000-word milestone within 4-6 months
- 80%+ daily SRS review completion rate
- JLPT pass rates above population average

**Platform Health** (Secondary):
- 95%+ uptime
- <3s average page load time
- <5% API error rate
- Positive NPS score (>30)

## Additional Documentation

- **architecture.md**: Complete technical architecture with detailed schemas, code examples, and implementation patterns
- **plan.md**: Detailed implementation roadmap with all tasks broken down by phase
- **goal.md**: Project vision, user personas, learning objectives, and long-term goals
