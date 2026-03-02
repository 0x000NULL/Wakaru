-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "display_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3),
    "settings" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "repetitions" INTEGER NOT NULL DEFAULT 0,
    "ease_factor" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "interval" INTEGER NOT NULL DEFAULT 0,
    "next_review_at" TIMESTAMP(3),
    "last_reviewed_at" TIMESTAMP(3),
    "total_reviews" INTEGER NOT NULL DEFAULT 0,
    "correct_reviews" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocabulary" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "reading" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "part_of_speech" TEXT,
    "jlpt_level" TEXT,
    "frequency_rank" INTEGER,
    "tags" JSONB NOT NULL DEFAULT '[]',
    "audio_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocabulary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "example_sentences" (
    "id" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "english" TEXT NOT NULL,
    "furigana" TEXT,
    "audio_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "example_sentences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocabulary_sentences" (
    "id" TEXT NOT NULL,
    "vocabulary_id" TEXT NOT NULL,
    "sentence_id" TEXT NOT NULL,

    CONSTRAINT "vocabulary_sentences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kanji" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "meanings" TEXT NOT NULL,
    "on_yomi" TEXT,
    "kun_yomi" TEXT,
    "nanori" TEXT,
    "radicals" TEXT,
    "stroke_count" INTEGER NOT NULL,
    "grade" INTEGER,
    "jlpt_level" TEXT,
    "frequency_rank" INTEGER,
    "mnemonic" TEXT,
    "stroke_order_svg" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kanji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kana" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "romaji" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "is_combination" BOOLEAN NOT NULL DEFAULT false,
    "mnemonic" TEXT,
    "stroke_order_svg" TEXT,
    "audio_url" TEXT,

    CONSTRAINT "kana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grammar_patterns" (
    "id" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "formation" TEXT NOT NULL,
    "jlpt_level" TEXT,
    "difficulty" TEXT,
    "explanation" TEXT NOT NULL,
    "notes" TEXT,
    "common_mistakes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grammar_patterns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grammar_examples" (
    "id" TEXT NOT NULL,
    "pattern_id" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "english" TEXT NOT NULL,
    "furigana" TEXT,

    CONSTRAINT "grammar_examples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "title_english" TEXT,
    "type" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "jlpt_level" TEXT,
    "description" TEXT,
    "cover_image_url" TEXT,
    "genres" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_episodes" (
    "id" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "title" TEXT,
    "duration_seconds" INTEGER,
    "video_url" TEXT,
    "subtitle_ja_url" TEXT,
    "subtitle_en_url" TEXT,

    CONSTRAINT "media_episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_media_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "watched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress_seconds" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_media_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mined_sentences" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "english" TEXT,
    "furigana" TEXT,
    "source_media_id" TEXT,
    "source_episode" INTEGER,
    "source_timestamp" INTEGER,
    "audio_url" TEXT,
    "screenshot_url" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mined_sentences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_progress_user_id_next_review_at_idx" ON "user_progress"("user_id", "next_review_at");

-- CreateIndex
CREATE INDEX "user_progress_user_id_category_idx" ON "user_progress"("user_id", "category");

-- CreateIndex
CREATE UNIQUE INDEX "user_progress_user_id_category_item_id_key" ON "user_progress"("user_id", "category", "item_id");

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_word_key" ON "vocabulary"("word");

-- CreateIndex
CREATE INDEX "vocabulary_frequency_rank_idx" ON "vocabulary"("frequency_rank");

-- CreateIndex
CREATE INDEX "vocabulary_jlpt_level_idx" ON "vocabulary"("jlpt_level");

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_sentences_vocabulary_id_sentence_id_key" ON "vocabulary_sentences"("vocabulary_id", "sentence_id");

-- CreateIndex
CREATE UNIQUE INDEX "kanji_character_key" ON "kanji"("character");

-- CreateIndex
CREATE INDEX "kanji_jlpt_level_idx" ON "kanji"("jlpt_level");

-- CreateIndex
CREATE INDEX "kanji_frequency_rank_idx" ON "kanji"("frequency_rank");

-- CreateIndex
CREATE INDEX "kanji_grade_idx" ON "kanji"("grade");

-- CreateIndex
CREATE UNIQUE INDEX "kana_character_key" ON "kana"("character");

-- CreateIndex
CREATE INDEX "kana_type_idx" ON "kana"("type");

-- CreateIndex
CREATE INDEX "kana_group_idx" ON "kana"("group");

-- CreateIndex
CREATE INDEX "grammar_patterns_jlpt_level_idx" ON "grammar_patterns"("jlpt_level");

-- CreateIndex
CREATE UNIQUE INDEX "media_episodes_media_id_episode_number_key" ON "media_episodes"("media_id", "episode_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_media_progress_user_id_media_id_episode_number_key" ON "user_media_progress"("user_id", "media_id", "episode_number");

-- CreateIndex
CREATE INDEX "mined_sentences_user_id_idx" ON "mined_sentences"("user_id");

-- AddForeignKey
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_sentences" ADD CONSTRAINT "vocabulary_sentences_vocabulary_id_fkey" FOREIGN KEY ("vocabulary_id") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_sentences" ADD CONSTRAINT "vocabulary_sentences_sentence_id_fkey" FOREIGN KEY ("sentence_id") REFERENCES "example_sentences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammar_examples" ADD CONSTRAINT "grammar_examples_pattern_id_fkey" FOREIGN KEY ("pattern_id") REFERENCES "grammar_patterns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_episodes" ADD CONSTRAINT "media_episodes_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_media_progress" ADD CONSTRAINT "user_media_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_media_progress" ADD CONSTRAINT "user_media_progress_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mined_sentences" ADD CONSTRAINT "mined_sentences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
