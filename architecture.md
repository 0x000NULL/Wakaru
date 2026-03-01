# ManabU - Technical Architecture

## System Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │  Web Browser   │  │  Mobile Browser │  │  PWA (App)   │ │
│  │  (Desktop)     │  │  (iOS/Android)  │  │  (Installed) │ │
│  └────────────────┘  └─────────────────┘  └──────────────┘ │
└───────────────────────────────┬─────────────────────────────┘
                                │ HTTPS
┌───────────────────────────────┴─────────────────────────────┐
│                      Application Layer                       │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Next.js Application                      │  │
│  │  ┌─────────────────┐    ┌────────────────────────┐   │  │
│  │  │  Frontend (React)│    │  API Routes (Node.js)  │   │  │
│  │  │  - Components    │    │  - REST API            │   │  │
│  │  │  - State Mgmt    │    │  - Business Logic      │   │  │
│  │  │  - UI/UX         │    │  - Authentication      │   │  │
│  │  └─────────────────┘    └────────────────────────┘   │  │
│  └───────────────────────────────────────────────────────┘  │
└───────────────────────────────┬─────────────────────────────┘
                                │
┌───────────────────────────────┴─────────────────────────────┐
│                        Data Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  PostgreSQL  │  │   File       │  │   External APIs   │  │
│  │  Database    │  │   Storage    │  │   - JMdict        │  │
│  │  - User Data │  │   - Subtitles│  │   - Audio Files   │  │
│  │  - Content   │  │   - Audio    │  │   - Media Links   │  │
│  │  - Progress  │  │   - Images   │  │                   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

**Frontend**:
- **Framework**: Next.js 14+ (React 18+)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (utility-first, responsive design)
- **State Management**: Zustand or Jotai (lightweight, modern)
- **Forms**: React Hook Form + Zod (validation)
- **HTTP Client**: Fetch API with custom wrapper
- **PWA**: next-pwa for service worker and offline support

**Backend**:
- **Runtime**: Node.js 20+ LTS
- **Framework**: Next.js API Routes (serverless functions)
- **Language**: TypeScript
- **Validation**: Zod (type-safe schema validation)
- **Authentication**: NextAuth.js or custom JWT implementation
- **ORM**: Prisma (type-safe database access)

**Database**:
- **Primary**: PostgreSQL 15+
- **Hosting**: Managed service (Supabase, Railway, or AWS RDS)
- **Connection Pooling**: PgBouncer (for serverless environments)
- **Migration**: Prisma Migrate

**File Storage**:
- **Service**: AWS S3, Cloudflare R2, or Supabase Storage
- **Content**: Subtitle files (.srt), audio clips, images
- **CDN**: Cloudflare for caching and delivery

**Infrastructure**:
- **Hosting**: Vercel (Next.js optimized) or Railway
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry (error tracking), Vercel Analytics
- **Email**: Resend or SendGrid (password reset, notifications)

---

## Database Architecture

### Database Choice Rationale

**PostgreSQL** chosen for:
- Excellent performance with complex queries
- JSONB support for flexible schema in content areas
- Full-text search capabilities (for dictionary lookup)
- Strong consistency and ACID compliance
- Mature ecosystem and tooling
- Scalability (vertical and horizontal)

### Schema Design

#### Core Tables

**1. users**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(100),
  native_language VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP,
  email_verified BOOLEAN DEFAULT FALSE,
  settings JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_users_email ON users(email);
```

**Settings JSONB structure**:
```json
{
  "dailyNewCardLimit": 20,
  "autoplayAudio": true,
  "showFurigana": true,
  "interfaceLanguage": "en",
  "studyReminders": {
    "enabled": true,
    "time": "09:00",
    "timezone": "America/New_York"
  }
}
```

---

**2. user_progress**
```sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL, -- 'hiragana', 'katakana', 'vocabulary', 'grammar', 'kanji'
  item_id VARCHAR(100) NOT NULL, -- reference to specific item (e.g., hiragana 'あ', vocab word id)
  status VARCHAR(20), -- 'learning', 'reviewing', 'mastered'
  correct_count INTEGER DEFAULT 0,
  incorrect_count INTEGER DEFAULT 0,
  last_reviewed_at TIMESTAMP,
  next_review_at TIMESTAMP,
  interval_days NUMERIC(10,2), -- SRS interval in days
  ease_factor NUMERIC(5,2) DEFAULT 2.5, -- SRS ease factor
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, category, item_id)
);

CREATE INDEX idx_progress_user_category ON user_progress(user_id, category);
CREATE INDEX idx_progress_next_review ON user_progress(user_id, next_review_at) WHERE status != 'mastered';
```

---

**3. vocabulary**
```sql
CREATE TABLE vocabulary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  word VARCHAR(100) NOT NULL, -- Kanji form (e.g., 食べる)
  reading VARCHAR(100) NOT NULL, -- Hiragana/Katakana reading (e.g., たべる)
  meaning_en TEXT NOT NULL, -- English meaning(s)
  part_of_speech VARCHAR(50), -- 'verb', 'noun', 'adjective', etc.
  jlpt_level VARCHAR(10), -- 'N5', 'N4', 'N3', 'N2', 'N1', null
  frequency_rank INTEGER, -- 1 = most common
  tags JSONB DEFAULT '[]'::jsonb, -- ['food', 'daily-life', etc.]
  audio_url VARCHAR(255), -- URL to pronunciation audio
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vocab_jlpt ON vocabulary(jlpt_level);
CREATE INDEX idx_vocab_frequency ON vocabulary(frequency_rank);
CREATE INDEX idx_vocab_word ON vocabulary(word);
CREATE INDEX idx_vocab_tags ON vocabulary USING GIN(tags);
```

---

**4. example_sentences**
```sql
CREATE TABLE example_sentences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  japanese TEXT NOT NULL, -- Full sentence in Japanese
  english TEXT NOT NULL, -- English translation
  reading TEXT, -- Reading with furigana markup if needed
  difficulty_level VARCHAR(10), -- 'beginner', 'intermediate', 'advanced'
  source VARCHAR(255), -- 'tatoeba', 'media:anime-name', 'manual', etc.
  audio_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_sentences_difficulty ON example_sentences(difficulty_level);
CREATE INDEX idx_sentences_source ON example_sentences(source);
```

---

**5. vocabulary_sentences** (Many-to-Many)
```sql
CREATE TABLE vocabulary_sentences (
  vocabulary_id UUID REFERENCES vocabulary(id) ON DELETE CASCADE,
  sentence_id UUID REFERENCES example_sentences(id) ON DELETE CASCADE,
  PRIMARY KEY (vocabulary_id, sentence_id)
);

CREATE INDEX idx_vocab_sent_vocab ON vocabulary_sentences(vocabulary_id);
CREATE INDEX idx_vocab_sent_sentence ON vocabulary_sentences(sentence_id);
```

---

**6. kanji**
```sql
CREATE TABLE kanji (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character CHAR(1) UNIQUE NOT NULL, -- Single kanji character
  meanings TEXT[] NOT NULL, -- Array of English meanings
  onyomi TEXT[], -- On-yomi readings (Chinese-origin)
  kunyomi TEXT[], -- Kun-yomi readings (native Japanese)
  radicals VARCHAR(50)[], -- Component radicals
  stroke_count INTEGER,
  grade_level INTEGER, -- School grade (1-6, 8 for joyo)
  jlpt_level VARCHAR(10),
  frequency_rank INTEGER,
  mnemonic TEXT, -- Memory aid story
  svg_stroke_order TEXT, -- SVG data for stroke order animation
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_kanji_character ON kanji(character);
CREATE INDEX idx_kanji_jlpt ON kanji(jlpt_level);
CREATE INDEX idx_kanji_frequency ON kanji(frequency_rank);
```

---

**7. kanji_vocabulary** (Many-to-Many)
```sql
CREATE TABLE kanji_vocabulary (
  kanji_id UUID REFERENCES kanji(id) ON DELETE CASCADE,
  vocabulary_id UUID REFERENCES vocabulary(id) ON DELETE CASCADE,
  position INTEGER, -- Position of kanji in word
  PRIMARY KEY (kanji_id, vocabulary_id)
);
```

---

**8. grammar_patterns**
```sql
CREATE TABLE grammar_patterns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pattern VARCHAR(255) NOT NULL, -- e.g., "～ている"
  meaning_en TEXT NOT NULL,
  formation TEXT NOT NULL, -- How to construct
  jlpt_level VARCHAR(10),
  difficulty INTEGER, -- 1-10 scale for ordering
  explanation TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_grammar_jlpt ON grammar_patterns(jlpt_level);
CREATE INDEX idx_grammar_difficulty ON grammar_patterns(difficulty);
```

---

**9. grammar_examples**
```sql
CREATE TABLE grammar_examples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  grammar_id UUID REFERENCES grammar_patterns(id) ON DELETE CASCADE,
  japanese TEXT NOT NULL,
  english TEXT NOT NULL,
  reading TEXT,
  audio_url VARCHAR(255)
);

CREATE INDEX idx_grammar_ex_grammar ON grammar_examples(grammar_id);
```

---

**10. media_content**
```sql
CREATE TABLE media_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  title_japanese VARCHAR(255),
  type VARCHAR(50), -- 'anime', 'drama', 'movie', 'youtube'
  genre VARCHAR(100)[], -- Array of genres
  difficulty_level VARCHAR(20), -- 'beginner', 'intermediate', 'advanced'
  episode_count INTEGER,
  description TEXT,
  cover_image_url VARCHAR(255),
  external_link VARCHAR(255), -- Link to streaming service
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_media_difficulty ON media_content(difficulty_level);
CREATE INDEX idx_media_type ON media_content(type);
```

---

**11. media_episodes**
```sql
CREATE TABLE media_episodes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  media_id UUID REFERENCES media_content(id) ON DELETE CASCADE,
  episode_number INTEGER NOT NULL,
  title VARCHAR(255),
  duration_seconds INTEGER,
  subtitle_file_url VARCHAR(255), -- URL to .srt/.ass file
  external_video_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(media_id, episode_number)
);

CREATE INDEX idx_episodes_media ON media_episodes(media_id);
```

---

**12. user_media_progress**
```sql
CREATE TABLE user_media_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  episode_id UUID REFERENCES media_episodes(id) ON DELETE CASCADE,
  last_position_seconds INTEGER DEFAULT 0, -- Resume position
  completed BOOLEAN DEFAULT FALSE,
  watched_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

CREATE INDEX idx_media_progress_user ON user_media_progress(user_id);
```

---

**13. mined_sentences** (User's personal collection)
```sql
CREATE TABLE mined_sentences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  japanese TEXT NOT NULL,
  english TEXT,
  reading TEXT,
  audio_url VARCHAR(255), -- Clip from media
  screenshot_url VARCHAR(255),
  source_media_id UUID REFERENCES media_content(id),
  source_episode_id UUID REFERENCES media_episodes(id),
  timestamp_seconds INTEGER, -- When in the episode
  notes TEXT, -- User's personal notes
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_mined_user ON mined_sentences(user_id);
CREATE INDEX idx_mined_source ON mined_sentences(source_episode_id);
```

---

**14. user_study_sessions**
```sql
CREATE TABLE user_study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  session_type VARCHAR(50), -- 'vocabulary_review', 'grammar_study', 'immersion', etc.
  duration_seconds INTEGER,
  items_reviewed INTEGER,
  items_learned INTEGER,
  started_at TIMESTAMP NOT NULL,
  ended_at TIMESTAMP
);

CREATE INDEX idx_sessions_user ON user_study_sessions(user_id);
CREATE INDEX idx_sessions_started ON user_study_sessions(started_at);
```

---

**15. hiragana_katakana** (Reference table)
```sql
CREATE TABLE kana (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character CHAR(1) UNIQUE NOT NULL,
  romaji VARCHAR(10) NOT NULL,
  type VARCHAR(10) NOT NULL, -- 'hiragana' or 'katakana'
  group_name VARCHAR(50), -- 'vowels', 'k-row', etc.
  display_order INTEGER,
  mnemonic TEXT,
  audio_url VARCHAR(255)
);

CREATE INDEX idx_kana_type ON kana(type);
CREATE INDEX idx_kana_group ON kana(group_name);
```

---

### Indexing Strategy

**Purpose**: Optimize common queries

**Most Common Queries**:
1. Get user's due reviews: `user_id + next_review_at`
2. Fetch vocabulary by JLPT level: `jlpt_level`
3. Search vocabulary: `word` (consider full-text search)
4. User progress lookup: `user_id + category`
5. Media browsing: `difficulty_level + type`

**Composite Indexes** (created above):
- `idx_progress_user_category` for filtering progress by user and category
- `idx_progress_next_review` for SRS review queries

**GIN Indexes** (for JSONB):
- `idx_vocab_tags` for tag-based filtering

---

## API Architecture

### API Design Principles

- **RESTful**: Resources follow REST conventions
- **Type-Safe**: TypeScript on both ends, Zod for validation
- **Versioned**: `/api/v1/...` for future compatibility
- **Consistent**: Standard response format, error codes
- **Paginated**: Large lists use cursor or offset pagination
- **Authenticated**: JWT tokens, secure HTTP-only cookies

### Authentication Flow

**Strategy**: JWT (JSON Web Tokens) with HTTP-only cookies

```
1. User submits login (email + password)
   POST /api/v1/auth/login

2. Server validates credentials
   - Hash password and compare
   - Generate JWT token (expiry: 7 days)
   - Set HTTP-only cookie

3. Client includes cookie in subsequent requests
   - Middleware validates JWT on protected routes
   - Extract user_id from token

4. Token refresh
   POST /api/v1/auth/refresh
   - Issue new token before expiry

5. Logout
   POST /api/v1/auth/logout
   - Clear cookie
   - Optionally: token blacklist (if needed)
```

**Security**:
- Password hashing: bcrypt (cost factor 12)
- HTTPS only in production
- CSRF protection (Next.js built-in)
- Rate limiting on auth endpoints
- Email verification for new accounts

---

### API Endpoints

#### Authentication (`/api/v1/auth`)

```typescript
POST   /api/v1/auth/register
  Body: { email, password, displayName }
  Response: { user: { id, email, displayName }, token }

POST   /api/v1/auth/login
  Body: { email, password }
  Response: { user: { id, email, displayName }, token }

POST   /api/v1/auth/logout
  Response: { success: true }

POST   /api/v1/auth/refresh
  Response: { token }

POST   /api/v1/auth/forgot-password
  Body: { email }
  Response: { message: "Reset email sent" }

POST   /api/v1/auth/reset-password
  Body: { token, newPassword }
  Response: { success: true }
```

---

#### User (`/api/v1/user`)

```typescript
GET    /api/v1/user/profile
  Response: { user: { id, email, displayName, settings, createdAt } }

PATCH  /api/v1/user/profile
  Body: { displayName?, settings? }
  Response: { user: {...updated} }

GET    /api/v1/user/stats
  Response: {
    totalVocabulary: number,
    masteredVocabulary: number,
    totalKanji: number,
    reviewsDueToday: number,
    studyStreak: number,
    totalImmersionMinutes: number
  }
```

---

#### Vocabulary (`/api/v1/vocabulary`)

```typescript
GET    /api/v1/vocabulary
  Query: { jlptLevel?, limit?, offset?, tags? }
  Response: {
    vocabulary: [{ id, word, reading, meaning, ... }],
    total: number,
    hasMore: boolean
  }

GET    /api/v1/vocabulary/:id
  Response: {
    vocabulary: { id, word, reading, meaning, ... },
    sentences: [...],
    kanji: [...],
    userProgress: { status, nextReview, ... }
  }

GET    /api/v1/vocabulary/search
  Query: { q: string }
  Response: { results: [...] }
```

---

#### SRS / Review (`/api/v1/srs`)

```typescript
GET    /api/v1/srs/due
  Query: { category?: 'vocabulary' | 'kanji' | 'grammar' }
  Response: {
    reviews: [{
      itemId, category, type,
      content: { word, reading, meaning, ... }
    }],
    count: number
  }

POST   /api/v1/srs/review
  Body: {
    itemId: string,
    category: string,
    rating: 'again' | 'hard' | 'good' | 'easy'
  }
  Response: {
    nextReview: timestamp,
    interval: number,
    newStatus: string
  }

GET    /api/v1/srs/new
  Query: { category, limit }
  Response: { newItems: [...] }

POST   /api/v1/srs/learn
  Body: { itemId, category }
  Response: { progress: {...} }
```

---

#### Kanji (`/api/v1/kanji`)

```typescript
GET    /api/v1/kanji
  Query: { jlptLevel?, limit?, offset? }
  Response: { kanji: [...], total, hasMore }

GET    /api/v1/kanji/:character
  Response: {
    kanji: { character, meanings, onyomi, kunyomi, ... },
    vocabulary: [{ word, reading, meaning }],
    userProgress: {...}
  }
```

---

#### Grammar (`/api/v1/grammar`)

```typescript
GET    /api/v1/grammar
  Query: { jlptLevel?, limit?, offset? }
  Response: { patterns: [...], total, hasMore }

GET    /api/v1/grammar/:id
  Response: {
    pattern: { id, pattern, meaning, formation, explanation, ... },
    examples: [{ japanese, english, reading, audio }],
    userProgress: {...}
  }
```

---

#### Media (`/api/v1/media`)

```typescript
GET    /api/v1/media
  Query: { type?, difficulty?, limit?, offset? }
  Response: { media: [...], total, hasMore }

GET    /api/v1/media/:id
  Response: {
    media: { id, title, description, ... },
    episodes: [{ id, episodeNumber, title, ... }],
    userProgress: { completedEpisodes, currentEpisode }
  }

GET    /api/v1/media/:mediaId/episodes/:episodeId
  Response: {
    episode: { id, title, duration, subtitleUrl, videoUrl },
    subtitles: [{ start, end, japanese, english }]
  }

POST   /api/v1/media/progress
  Body: { episodeId, positionSeconds, completed? }
  Response: { success: true }
```

---

#### Sentence Mining (`/api/v1/sentences`)

```typescript
POST   /api/v1/sentences/mine
  Body: {
    japanese, english?, reading?,
    audioUrl?, screenshotUrl?,
    sourceEpisodeId?, timestampSeconds?
  }
  Response: { sentence: {...created} }

GET    /api/v1/sentences/mine
  Query: { limit?, offset? }
  Response: { sentences: [...], total, hasMore }

DELETE /api/v1/sentences/:id
  Response: { success: true }

PATCH  /api/v1/sentences/:id
  Body: { notes?, ... }
  Response: { sentence: {...updated} }
```

---

#### Study Sessions (`/api/v1/sessions`)

```typescript
POST   /api/v1/sessions/start
  Body: { sessionType }
  Response: { sessionId }

PATCH  /api/v1/sessions/:id/end
  Body: { itemsReviewed, itemsLearned }
  Response: { session: {...} }

GET    /api/v1/sessions/history
  Query: { limit?, offset?, startDate?, endDate? }
  Response: { sessions: [...], total }
```

---

### Response Format Standards

**Success Response**:
```typescript
{
  success: true,
  data: { ... }, // or array
  meta?: { // For paginated responses
    total: number,
    limit: number,
    offset: number,
    hasMore: boolean
  }
}
```

**Error Response**:
```typescript
{
  success: false,
  error: {
    code: string, // e.g., 'VALIDATION_ERROR', 'NOT_FOUND'
    message: string,
    details?: any
  }
}
```

**HTTP Status Codes**:
- 200: Success
- 201: Created
- 400: Bad Request (validation error)
- 401: Unauthorized (not authenticated)
- 403: Forbidden (authenticated but not authorized)
- 404: Not Found
- 429: Too Many Requests (rate limit)
- 500: Internal Server Error

---

## Frontend Architecture

### Component Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth layout group
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   ├── (dashboard)/         # Main app layout
│   │   ├── dashboard/
│   │   ├── vocabulary/
│   │   ├── kanji/
│   │   ├── grammar/
│   │   ├── immersion/
│   │   └── settings/
│   ├── api/                 # API routes
│   │   └── v1/
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   ├── features/            # Feature-specific components
│   │   ├── srs/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewSession.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── media/
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── SubtitleDisplay.tsx
│   │   │   └── DictionaryPopup.tsx
│   │   ├── kana/
│   │   │   ├── KanaLessonCard.tsx
│   │   │   └── KanaQuiz.tsx
│   │   └── ...
│   └── layout/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
├── lib/
│   ├── api/                 # API client functions
│   │   ├── auth.ts
│   │   ├── vocabulary.ts
│   │   ├── srs.ts
│   │   └── ...
│   ├── utils/
│   │   ├── srs-algorithm.ts
│   │   ├── furigana.ts
│   │   ├── jmdict-parser.ts
│   │   └── ...
│   └── hooks/               # Custom React hooks
│       ├── useAuth.ts
│       ├── useSRS.ts
│       └── useMediaPlayer.ts
├── store/                   # State management
│   ├── authStore.ts
│   ├── reviewStore.ts
│   └── settingsStore.ts
├── types/                   # TypeScript types
│   ├── models.ts
│   ├── api.ts
│   └── ...
└── styles/
    └── globals.css
```

---

### State Management

**Tool**: Zustand (lightweight, simple, performant)

**Example Store**:

```typescript
// store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
```

```typescript
// store/reviewStore.ts
import { create } from 'zustand';

interface ReviewState {
  currentCard: any | null;
  reviewQueue: any[];
  completedToday: number;
  fetchReviews: () => Promise<void>;
  submitReview: (rating: string) => Promise<void>;
  nextCard: () => void;
}

export const useReviewStore = create<ReviewState>((set, get) => ({
  currentCard: null,
  reviewQueue: [],
  completedToday: 0,

  fetchReviews: async () => {
    const response = await fetch('/api/v1/srs/due');
    const data = await response.json();
    set({
      reviewQueue: data.reviews,
      currentCard: data.reviews[0] || null
    });
  },

  submitReview: async (rating) => {
    const { currentCard } = get();
    await fetch('/api/v1/srs/review', {
      method: 'POST',
      body: JSON.stringify({
        itemId: currentCard.itemId,
        category: currentCard.category,
        rating
      })
    });
    set((state) => ({ completedToday: state.completedToday + 1 }));
    get().nextCard();
  },

  nextCard: () => {
    set((state) => ({
      reviewQueue: state.reviewQueue.slice(1),
      currentCard: state.reviewQueue[1] || null
    }));
  }
}));
```

---

### Key Frontend Features Implementation

#### 1. SRS Review Interface

**Component**: `ReviewSession.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import { useReviewStore } from '@/store/reviewStore';
import ReviewCard from './ReviewCard';

export default function ReviewSession() {
  const { currentCard, reviewQueue, fetchReviews, submitReview } = useReviewStore();

  useEffect(() => {
    fetchReviews();
  }, []);

  if (!currentCard) {
    return <div>No reviews due! Great job!</div>;
  }

  return (
    <div className="review-session">
      <div className="progress-bar">
        {reviewQueue.length} cards remaining
      </div>

      <ReviewCard
        card={currentCard}
        onRate={submitReview}
      />
    </div>
  );
}
```

**ReviewCard.tsx**:
```typescript
'use client';

import { useState } from 'react';

interface ReviewCardProps {
  card: {
    content: {
      word: string;
      reading: string;
      meaning: string;
    };
  };
  onRate: (rating: string) => void;
}

export default function ReviewCard({ card, onRate }: ReviewCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="card">
      {!revealed ? (
        <>
          <div className="card-front">
            <div className="word">{card.content.word}</div>
            <div className="reading">{card.content.reading}</div>
          </div>
          <button onClick={() => setRevealed(true)}>
            Show Answer
          </button>
        </>
      ) : (
        <>
          <div className="card-back">
            <div className="meaning">{card.content.meaning}</div>
          </div>
          <div className="rating-buttons">
            <button onClick={() => onRate('again')}>Again</button>
            <button onClick={() => onRate('hard')}>Hard</button>
            <button onClick={() => onRate('good')}>Good</button>
            <button onClick={() => onRate('easy')}>Easy</button>
          </div>
        </>
      )}
    </div>
  );
}
```

---

#### 2. Interactive Video Player

**Component**: `VideoPlayer.tsx`

```typescript
'use client';

import { useRef, useState } from 'react';
import SubtitleDisplay from './SubtitleDisplay';
import DictionaryPopup from './DictionaryPopup';

interface Subtitle {
  start: number;
  end: number;
  japanese: string;
  english: string;
}

interface VideoPlayerProps {
  videoUrl: string;
  subtitles: Subtitle[];
}

export default function VideoPlayer({ videoUrl, subtitles }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const currentSubtitle = subtitles.find(
    sub => currentTime >= sub.start && currentTime <= sub.end
  );

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videoUrl}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        controls
      />

      {currentSubtitle && (
        <SubtitleDisplay
          subtitle={currentSubtitle}
          onWordClick={setSelectedWord}
        />
      )}

      {selectedWord && (
        <DictionaryPopup
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
        />
      )}
    </div>
  );
}
```

---

## SRS Algorithm Implementation

### Modified SM-2 Algorithm

**File**: `lib/utils/srs-algorithm.ts`

```typescript
export interface SRSCard {
  easeFactor: number;      // Difficulty multiplier (default 2.5)
  interval: number;         // Days until next review
  repetitions: number;      // Consecutive correct reviews
}

export type Rating = 'again' | 'hard' | 'good' | 'easy';

export function calculateNextReview(
  card: SRSCard,
  rating: Rating
): SRSCard {
  let { easeFactor, interval, repetitions } = card;

  // Update ease factor based on rating
  const qualityMap = {
    'again': 0,
    'hard': 1,
    'good': 3,
    'easy': 5
  };

  const quality = qualityMap[rating];

  // SM-2 ease factor formula
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Update interval and repetitions
  if (quality < 3) {
    // Incorrect or hard: reset
    repetitions = 0;
    interval = 1;
  } else {
    repetitions += 1;

    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }

    // Apply rating modifiers
    if (rating === 'easy') {
      interval = Math.round(interval * 1.3);
    } else if (rating === 'hard') {
      interval = Math.round(interval * 0.8);
    }
  }

  return {
    easeFactor: Number(easeFactor.toFixed(2)),
    interval: Math.round(interval),
    repetitions
  };
}

export function getNextReviewDate(interval: number): Date {
  const next = new Date();
  next.setDate(next.getDate() + interval);
  next.setHours(4, 0, 0, 0); // Reset to 4 AM for consistency
  return next;
}
```

**Usage in API**:

```typescript
// api/v1/srs/review/route.ts
import { calculateNextReview, getNextReviewDate } from '@/lib/utils/srs-algorithm';

export async function POST(request: Request) {
  const { itemId, category, rating } = await request.json();

  // Fetch current progress
  const progress = await prisma.user_progress.findUnique({
    where: {
      user_id_category_item_id: {
        user_id: userId,
        category,
        item_id: itemId
      }
    }
  });

  // Calculate new values
  const newCard = calculateNextReview(
    {
      easeFactor: progress.ease_factor,
      interval: progress.interval_days,
      repetitions: progress.correct_count
    },
    rating
  );

  const nextReviewAt = getNextReviewDate(newCard.interval);

  // Update database
  await prisma.user_progress.update({
    where: { id: progress.id },
    data: {
      ease_factor: newCard.easeFactor,
      interval_days: newCard.interval,
      next_review_at: nextReviewAt,
      correct_count: newCard.repetitions,
      last_reviewed_at: new Date(),
      status: newCard.interval >= 30 ? 'mastered' : 'reviewing'
    }
  });

  return Response.json({
    nextReview: nextReviewAt,
    interval: newCard.interval
  });
}
```

---

## PWA Implementation

### Service Worker Strategy

**File**: `public/sw.js` (managed by next-pwa)

**Caching Strategy**:
- **Static Assets**: Cache-first (HTML, CSS, JS, images)
- **API Calls**: Network-first with fallback to cache
- **User Data**: Network-only (always fresh, queue offline)

**Configuration**: `next.config.js`

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
        },
      },
    },
    {
      urlPattern: /^\/api\/v1\/(vocabulary|kanji|grammar)\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'content-api',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
        },
      },
    },
    {
      urlPattern: /^\/api\/v1\/srs\/.*/i,
      handler: 'NetworkOnly', // Always fresh for review data
      options: {
        backgroundSync: {
          name: 'srs-queue',
          options: {
            maxRetentionTime: 24 * 60 // Retry for 24 hours
          }
        }
      }
    },
  ],
});

module.exports = withPWA({
  // Next.js config
});
```

---

### Offline Data Sync

**Strategy**: IndexedDB for offline queue

```typescript
// lib/offline-queue.ts
import { openDB, DBSchema } from 'idb';

interface OfflineDB extends DBSchema {
  'review-queue': {
    key: string;
    value: {
      id: string;
      itemId: string;
      category: string;
      rating: string;
      timestamp: number;
    };
  };
}

export async function queueReview(data: any) {
  const db = await openDB<OfflineDB>('offline-db', 1, {
    upgrade(db) {
      db.createObjectStore('review-queue', { keyPath: 'id' });
    },
  });

  await db.add('review-queue', {
    id: crypto.randomUUID(),
    ...data,
    timestamp: Date.now()
  });
}

export async function syncOfflineReviews() {
  const db = await openDB<OfflineDB>('offline-db', 1);
  const reviews = await db.getAll('review-queue');

  for (const review of reviews) {
    try {
      await fetch('/api/v1/srs/review', {
        method: 'POST',
        body: JSON.stringify(review)
      });

      await db.delete('review-queue', review.id);
    } catch (error) {
      console.error('Sync failed for review:', review.id);
      // Will retry later
    }
  }
}

// Auto-sync when online
if (typeof window !== 'undefined') {
  window.addEventListener('online', syncOfflineReviews);
}
```

---

## Security Considerations

### Authentication Security

- **Password Requirements**: Minimum 8 characters, complexity enforced
- **Rate Limiting**: 5 failed attempts → 15-minute lockout
- **Token Expiry**: Access tokens expire after 7 days
- **Refresh Tokens**: Separate refresh token with 30-day expiry
- **Secure Cookies**: HTTP-only, Secure, SameSite=Strict

### API Security

- **Input Validation**: Zod schemas on all inputs
- **SQL Injection**: Prevented by Prisma ORM
- **XSS**: React auto-escaping, CSP headers
- **CSRF**: Next.js built-in protection
- **Helmet**: Security headers (CSP, HSTS, etc.)

### Data Privacy

- **Minimal Collection**: Only necessary user data
- **Encryption at Rest**: Database encryption (managed by provider)
- **Encryption in Transit**: TLS 1.3 (HTTPS)
- **Data Export**: Users can download all their data
- **Data Deletion**: Hard delete on account removal

---

## Performance Optimization

### Frontend

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Dynamic imports for heavy components
- **Memoization**: React.memo for expensive renders
- **Virtual Lists**: For long vocabulary/kanji lists (react-window)

### Backend

- **Database Indexing**: Strategic indexes on common queries
- **Connection Pooling**: PgBouncer for serverless
- **Caching**: Redis for frequently accessed data (future)
- **Query Optimization**: Prisma query analysis, avoid N+1
- **CDN**: Static assets and media files

### Monitoring

- **Metrics**:
  - Response time (P50, P95, P99)
  - Error rate
  - Database query time
  - API endpoint usage
- **Alerts**:
  - Error rate > 5%
  - Response time > 2s
  - Database connection pool exhaustion

---

## Deployment & Infrastructure

### Environments

**Development**:
- Local machine with Docker for PostgreSQL
- Hot reload with Next.js dev server
- Seed database with sample data

**Staging**:
- Vercel preview deployment (or Railway)
- Separate PostgreSQL instance
- Mirrors production environment
- Used for testing before release

**Production**:
- Vercel (or Railway) for hosting
- Managed PostgreSQL (Supabase, Railway, or AWS RDS)
- Cloudflare for CDN and DDoS protection
- Multiple regions (if needed for scale)

### CI/CD Pipeline

**GitHub Actions Workflow**:

```yaml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm test

  deploy-staging:
    if: github.ref == 'refs/heads/develop'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/deploy@v1
        with:
          environment: staging

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/deploy@v1
        with:
          environment: production
```

### Database Migrations

**Prisma Migrate**:

```bash
# Development
npx prisma migrate dev --name add_kanji_table

# Production (automated in deployment)
npx prisma migrate deploy
```

**Strategy**:
- Never drop columns (deprecate instead)
- Backward-compatible migrations
- Test on staging first
- Automated backups before production migration

---

## Scalability Plan

### Current Architecture (MVP → 10,000 users)

- Vercel serverless functions
- Managed PostgreSQL (single instance)
- Sufficient for early growth

### Scaling to 100,000 users

- **Database**: Read replicas for read-heavy queries
- **Caching**: Redis for vocabulary, kanji lookups
- **CDN**: Aggressive caching of static content
- **Rate Limiting**: Protect against abuse

### Scaling to 1,000,000+ users

- **Database Sharding**: Partition by user_id
- **Microservices**: Split SRS, media, content into separate services
- **Queue System**: Background jobs (RabbitMQ or AWS SQS)
- **Load Balancing**: Multiple server instances
- **Global CDN**: Edge locations worldwide

---

## Development Workflow

### Local Setup

```bash
# Clone repo
git clone https://github.com/yourusername/manabu.git
cd manabu

# Install dependencies
npm install

# Setup database
docker-compose up -d postgres
npx prisma migrate dev
npx prisma db seed

# Run dev server
npm run dev
```

### Branching Strategy

- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Urgent production fixes

### Code Standards

- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Type Checking**: Strict TypeScript
- **Testing**: Jest + React Testing Library
- **Commit Messages**: Conventional Commits

---

This architecture provides a solid foundation for building ManabU—scalable, maintainable, and user-focused. The tech stack is modern, well-supported, and appropriate for a learning platform with complex data relationships and real-time interactions.
