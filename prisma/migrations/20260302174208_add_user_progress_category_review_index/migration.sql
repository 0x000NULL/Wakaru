-- CreateIndex
CREATE INDEX "user_progress_user_id_category_next_review_at_idx" ON "user_progress"("user_id", "category", "next_review_at");
