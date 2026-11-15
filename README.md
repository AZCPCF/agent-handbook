# Agent Engineering Handbook

کتاب دوزبانه (فارسی / English) برای Bootcamp مهندسی Agent. ساخته‌شده با Astro Starlight (MDX، دو تم روشن/تیره، RTL).

## Run locally
```bash
pnpm install
pnpm dev
```

## Deploy (GitHub Pages)
1. Push to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and deploys automatically.

## Add a new day
Create `src/content/docs/day-2/` (Persian) and `src/content/docs/en/day-2/` (English), then add one entry to `sidebar` in `astro.config.mjs`.
