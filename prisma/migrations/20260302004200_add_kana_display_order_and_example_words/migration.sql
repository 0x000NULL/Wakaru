-- AlterTable
ALTER TABLE "kana" ADD COLUMN     "display_order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "example_words" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "stroke_count" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX "kana_type_display_order_idx" ON "kana"("type", "display_order");
