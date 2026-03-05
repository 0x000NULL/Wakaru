# Food Wars Subtitle Extraction - Final Report

**Date:** 2026-03-04 20:50 PST

## Summary

- **Total MKV files:** 91
- **Successfully extracted:** 55 files (60.4%)
- **Failed (bitmap subtitles):** 36 files (39.6%)
- **Final status:** 55/91 subtitle files available

## Issue Identified

The 36 remaining files contain **PGS (hdmv_pgs_subtitle)** bitmap subtitles, which are image-based and cannot be directly converted to SRT text format. These require OCR (Optical Character Recognition) tools to convert.

### Files with Bitmap Subtitles

**Season 1 (no release tag):** 12 files
- Food Wars - 01 through Food Wars - 12

**Season 3:** 24 files
- Food Wars! S3 - 01 through Food Wars! S3 - 24

## Successfully Extracted Files

The following files had **ASS or SRT text-based** subtitles and were successfully extracted:

**[Anime Time] Release:** 24 files (Season 1)
**Other Releases:**
- Food Wars! S01 - OVA1, OVA2
- Food Wars! S02 - OVA1, OVA2  
- Food Wars! S03 - OVA
- Food Wars! S2 - 01 through S2 - 13 (13 episodes)
- Food Wars S5 - 01 through S5 - 13 (13 episodes)

All 55 successfully extracted subtitle files have been uploaded to:
`s3://wakaru-media/subtitles/food-wars/`

## Options for Remaining Files

To extract the 36 bitmap subtitle files, you would need to:

1. **Use OCR tools** like:
   - `SubtitleEdit` with Tesseract OCR
   - `VobSub2SRT`
   - `subtitle-converter` with OCR support

2. **Find alternative sources** with text-based subtitles for:
   - Season 1 episodes (non-Anime Time release)
   - Season 3 complete

3. **Accept limitation** - Use the 55 available subtitle files

## Technical Details

**Bitmap subtitle codec:** `hdmv_pgs_subtitle` (Blu-ray PGS format)
**Text subtitle codecs found:** `ass`, `srt`, `subrip`

**Processing time:** ~2 seconds (all 36 files failed immediately)
**Log file:** `/tmp/food-wars-extraction-1772686236.log`

## Conclusion

The extraction task completed as specified, processing all 91 files. However, 36 files contain bitmap subtitles that require OCR conversion, which was outside the scope of the direct SRT extraction task.

**Achievement:** 55/91 files successfully extracted and uploaded (60.4% success rate for text-based subs)
