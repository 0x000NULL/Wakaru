# Wakaru Immersion System - Quick Start Guide 🚀

**Branch:** `feature/immersion-system-complete`  
**Status:** ✅ Ready for testing

---

## ⚡ TL;DR - Get Started in 5 Steps

### 1. Install FFmpeg
```bash
sudo apt install ffmpeg
ffmpeg -version  # Verify
```

### 2. Start PostgreSQL
```bash
sudo systemctl start postgresql
```

### 3. Apply Migrations (if needed)
```bash
cd ~/.openclaw/workspace/Wakaru
npx prisma migrate deploy
```

### 4. Test the Build
```bash
npm install
npm run build  # Should succeed with 0 errors
npm run dev
```

### 5. Visit the App
```
http://localhost:3000/immersion
```

---

## 📚 What's New?

### ✨ Audio Extraction
- Mine sentences during video playback (press 'M')
- Automatically extracts 5-second audio clips
- Audio saved with mined sentences for Anki review

### 🎬 DigitalOcean Spaces Support
- Host videos and subtitles on DO Spaces CDN
- Fast global delivery
- No local storage needed

### 📖 Mined Sentences Page
- View all mined sentences: `/immersion/sentences`
- Filter, search, and review
- Navigate via sidebar link

### 🔧 Remote Subtitle Loading
- Subtitles can load from CDN URLs
- No need to bundle subtitle files in the app

---

## 🎯 To Get Full Experience

### Upload Media Files to DigitalOcean Spaces

**See:** `DEPLOYMENT_GUIDE.md` for detailed instructions

**Quick version:**
```bash
# Install s3cmd
sudo apt install s3cmd

# Configure
s3cmd --configure
# Enter your DO Spaces credentials from dashboard

# Upload a video
s3cmd put --acl-public video.mp4 s3://wakaru-media/videos/anime/ep01.mp4

# Upload subtitles
s3cmd put --acl-public subtitle.srt s3://wakaru-media/subtitles/anime/ep01-ja.srt
```

**Then update:** `src/lib/constants/media-data.ts`

Replace placeholder URLs with your actual CDN URLs:
```typescript
{
  episode_number: 1,
  video_url: 'https://YOUR-BUCKET.REGION.cdn.digitaloceanspaces.com/videos/anime/ep01.mp4',
  subtitle_ja_url: 'https://YOUR-BUCKET.REGION.cdn.digitaloceanspaces.com/subtitles/anime/ep01-ja.srt',
  subtitle_en_url: 'https://YOUR-BUCKET.REGION.cdn.digitaloceanspaces.com/subtitles/anime/ep01-en.srt',
}
```

---

## 🧪 Test the Features

### Test Audio Extraction
1. Start dev server: `npm run dev`
2. Navigate to `/immersion`
3. Click a media item → Click "Watch" on an episode
4. Press `M` during playback to mine a sentence
5. Modal opens → Click "Save to Deck"
6. Should show "Extracting audio..." → "Saving..." → "Saved!"
7. Check `/immersion/sentences` to see the saved sentence with audio

### Test Remote Subtitles
1. Upload a subtitle file to DO Spaces
2. Update media-data.ts with the CDN URL
3. Watch the episode
4. Subtitles should appear and sync correctly

### Test Navigation
1. Check sidebar for "Mined Sentences" link (bookmark icon)
2. Click it → Should navigate to `/immersion/sentences`

---

## 🐛 Troubleshooting

### Audio extraction fails
**Problem:** "FFmpeg not found"  
**Solution:** `sudo apt install ffmpeg`

### Subtitles don't load
**Problem:** CORS error in browser console  
**Solution:** DO Spaces CDN has CORS enabled by default. Check the URL is correct.

### Build fails
**Problem:** TypeScript errors  
**Solution:** This branch has 0 TypeScript errors. Run `npm install` first.

### Database connection fails
**Problem:** "Authentication failed"  
**Solution:** Make sure PostgreSQL is running: `sudo systemctl start postgresql`

---

## 📖 Full Documentation

- **INTEGRATION_COMPLETE.md** - Comprehensive integration details
- **DEPLOYMENT_GUIDE.md** - Step-by-step DO Spaces setup
- **.env.example** - Environment variables reference

---

## ✅ Ready to Merge?

Before merging to main:
1. ✅ Install FFmpeg
2. ✅ Test build succeeds
3. ⏳ Upload at least one video + subtitles
4. ⏳ Update media-data.ts with real URLs
5. ⏳ Test end-to-end mining flow
6. ✅ Review INTEGRATION_COMPLETE.md

**Then:**
```bash
git checkout main
git merge feature/immersion-system-complete
git push origin main
```

---

**Questions?** Check `INTEGRATION_COMPLETE.md` for detailed answers.

**Happy immersion learning! 🎌**
