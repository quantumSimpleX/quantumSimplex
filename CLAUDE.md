# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **design handoff package** for the Quantum Simplex website (Dr. Michael Wu, AI Transformation Advisor). It contains high-fidelity HTML/JSX prototypes and brand assets to be rebuilt as a production Next.js or Vite+React app. There is no build system or package.json here — this is source material, not a runnable project.

## Target implementation

**Recommended stack:** Next.js (App Router) + TypeScript. Plain Vite+React is the alternative.

```bash
# Next.js (recommended)
npx create-next-app@latest quantum-simplex --typescript --tailwind=false --app
cd quantum-simplex

# Or Vite
npm create vite@latest quantum-simplex -- --template react-ts
cd quantum-simplex && npm install
```

After scaffolding, copy the handoff files:
```bash
cp -r /path/to/DesignSys ./design
cp -r design/fonts ./public/fonts
cp -r design/assets ./public/assets
cp design/website/portrait.jpg ./public/portrait.jpg
```

## Pages and routes

| Route | Source file |
|---|---|
| `/` | `website/HomePage.jsx` |
| `/about` | `website/AboutPage.jsx` |
| `/services` | `website/ServicesPage.jsx` |
| `/insights` | `website/ThoughtLeadershipPage.jsx` |
| `/engage` | `website/BookPage.jsx` |

Shared layout: `website/Nav.jsx` (sticky 72px header) and `website/Footer.jsx`.

## Design system

All CSS custom properties live in `colors_and_type.css`. Copy the entire `:root` block into your global CSS. Do not use Tailwind — the design uses the `qs-*` token system.

**Dark mode:** Uses `[data-theme="dark"]` on `<html>`. Implement with `next-themes`. Persisted in `localStorage`.

**Fonts:**
- `MOMCAKE` Bold/Thin → `--font-display` (headlines, caps-only)
- `Bourbon Grotesque` → `--font-display-alt` (the "X" letter in the wordmark only — never for body text)
- `Source Code Pro` → `--font-mono` (eyebrows, meta, code)
- `Barlow Condensed` → `--font-sans` (body, UI, buttons) — load from Google Fonts

In Next.js App Router, use `next/font/local` for the `.otf`/`.woff2` files instead of `@font-face` in CSS.

## Key behaviors

1. **Scroll-to-section on Services page:** The prototype uses `sessionStorage`. In Next.js, use URL hash: navigate to `/services#level-2`, then `useEffect` on hash change calling `window.scrollTo` with an `88px` offset.

2. **Scroll reveal:** The prototype uses `reveal.js` (custom `IntersectionObserver`). In production, replace with `framer-motion` `whileInView` on elements with `data-reveal`.

3. **Google Calendar embed** (`/engage`): The `.qs-calendar-wrap` must always have `background: white` — the iframe always renders light mode regardless of parent theme.

4. **Footer logo:** 108px tall, swaps between `logo-black.svg` and `logo-white.svg` based on current theme.

## Content and data

All copy lives in `website/data.js` (exported as `window.QSData`). Migrate to:
- `services[]` → static TypeScript constants
- `content[]` (50+ articles/videos/podcasts) → a CMS (Contentful, Sanity) in production, or a `.ts` constants file for now
- `booking.url` → environment variable (`NEXT_PUBLIC_BOOKING_URL`)

**Do not edit copy** unless the user explicitly asks — ask first.

## Key measurements

| Property | Value |
|---|---|
| Nav height | `72px` |
| Max content width | `1280px` |
| Site padding | `56px` desktop / `36px` tablet / `20px` mobile |
| Scroll-to-section offset | `88px` |
| Portrait aspect ratio | `3/4`, `object-fit: cover`, `object-position: center 12%` |
| Footer logo height | `108px` |
| Calendar iframe height | `700px` |

## Motion

```
Easing:  cubic-bezier(0.16, 1, 0.3, 1)  — fast in, slow out
Fast:    120ms   — press states
Default: 220ms   — hover transitions
Slow:    420ms   — scroll reveals
```
