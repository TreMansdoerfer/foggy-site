# Foggy Marketing Site

Public-facing site for foggy.ai. Separate from the platform (which lives at app.foggy.ai).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy

This site deploys to Cloudflare Pages on push to main.

1. Create a Cloudflare Pages project pointed at this repo
2. Build command: `npm run build`
3. Build output: `dist`
4. Set custom domain `foggy.ai` and `www.foggy.ai`

## Before going live, swap these placeholders

- `REPLACE_WITH_FORMSPREE_ID` in `src/components/CTA.astro` — get from formspree.io
- Calendar URL in `src/components/CTA.astro` — replace `cal.com/tremansdoerfer` with real link
- Plausible domain in `src/layouts/Base.astro` — set to `foggy.ai` once domain is live
- `public/og-image.png` — replace placeholder with real 1200x630 OG image
- `public/demo.mp4` (does not exist yet) — drop a 30-second screen recording here, then update `LiveDemoEmbed.astro` to play it

## Architecture

- Astro static site, no React
- Tailwind for styling
- Inter Variable self-hosted via @fontsource-variable/inter
- Single page, all sections anchored
- Zero client-side JavaScript except Plausible analytics + scroll border + form submit

## What this site is NOT

This site is for prospective customers and partners. It does not:
- Host the platform (that lives at app.foggy.ai)
- Document the API (that lives in the platform)
- Have a blog (yet)
- Have user authentication
