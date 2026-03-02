-- AlterTable
ALTER TABLE "example_sentences" ADD COLUMN "source_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "example_sentences_source_id_key" ON "example_sentences"("source_id");
