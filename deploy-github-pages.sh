#!/usr/bin/env bash
# Deploy this portfolio folder to https://samirasalah.github.io/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
REPO_URL="${1:-https://github.com/samirasalah/samirasalah.github.io.git}"
WORKDIR="$ROOT/.deploy-workdir"

echo "→ Syncing from $ROOT"
rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"
git -C "$WORKDIR" init -b main
git -C "$WORKDIR" remote add origin "$REPO_URL"
git -C "$WORKDIR" fetch origin main
git -C "$WORKDIR" checkout -f main
rsync -av --delete \
  --exclude .git \
  --exclude .DS_Store \
  --exclude .deploy-workdir \
  --exclude deploy-github-pages.sh \
  "$ROOT/" "$WORKDIR/"

cd "$WORKDIR"
git add -A
if git diff --staged --quiet; then
  echo "✓ Nothing to commit — site already up to date."
  exit 0
fi

git commit -m "$(cat <<'EOF'
Portfolio: SEO hreflang, aligned CV, AI positioning refresh

Add hreflang and ?lang= URL support, refresh meta and JSON-LD, and replace the CV with facts aligned to the live portfolio (freelance France/EU, Maskan, Chambers, Cursor/Gemini).
EOF
)"
git push origin main
echo "✓ Published: https://samirasalah.github.io/"
