#!/usr/bin/env bash
# Generate assets/Samira-Salah-CV.pdf from assets/cv.html (requires Chrome or Chromium)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HTML="$ROOT/assets/cv.html"
OUT="$ROOT/assets/Samira-Salah-CV.pdf"

CHROME=""
for candidate in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "google-chrome" \
  "chromium"; do
  if command -v "$candidate" >/dev/null 2>&1 || [[ -x "$candidate" ]]; then
    CHROME="$candidate"
    break
  fi
done

if [[ -z "$CHROME" ]]; then
  echo "Chrome/Chromium not found. Open assets/cv.html in a browser and Print → Save as PDF."
  exit 1
fi

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$HTML"

echo "✓ Generated $OUT"
