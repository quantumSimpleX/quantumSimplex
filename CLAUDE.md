# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The production Next.js (App Router + TypeScript) rebuild of the Quantum Simplex website (Dr. Michael Wu, AI Transformation Advisor). The original design handoff package — high-fidelity HTML/JSX prototypes and brand assets — lives in `DesignSys/` and is kept as the reference spec; the live app is under `src/`.

## Commands

```bash
npm run dev          # start dev server (localhost:3000)
npm run build         # production build
npm run start          # serve production build
npm run test          # unit/component tests (vitest run)
npm run test:watch    # vitest watch mode
npm run test:e2e      # playwright e2e (auto-starts dev server)
npm run test:all       # vitest + playwright
```

Single test file: `npx vitest run src/__tests__/pages/HomePage.test.tsx`
Single e2e file: `npx playwright test e2e/home.spec.ts`

No lint script is configured.

## Architecture

- **Routes** (`src/app/*/page.tsx`) are thin — they render a page component. Content and copy come from `src/lib/data.ts` (typed exports: `nav`, `about`, `services`, etc.), which is the TypeScript successor to `DesignSys/website/data.js`'s `window.QSData`.
- **Shared layout** (`src/app/layout.tsx`): wraps every page in `next-themes` `ThemeProvider` (attribute `data-theme`, system default) plus `Nav`, `Footer`, and `RevealProvider` (client component, `src/components/RevealProvider.tsx`) — a single `IntersectionObserver` + `MutationObserver` pair that adds `data-visible` to any `[data-reveal]` element as it scrolls into view, replacing the prototype's `reveal.js`.
- **Components** (`src/components/`): `Nav`, `Footer`, `FeaturedReel`, `ContentCard`. Reuse these rather than re-deriving markup from `DesignSys/website/*.jsx` — the DesignSys JSX is reference only, not source of truth for current markup.
- **Tests** (`src/__tests__/`) mirror `src/` structure: `components/`, `pages/`, `lib/`. Vitest config: `vitest.config.ts` (jsdom, `@/` alias to `src/`, setup file `src/test/setup.ts`). Playwright e2e specs are in `e2e/` (`home.spec.ts`, `about.spec.ts`, `engage.spec.ts`) and run against a real dev server per `playwright.config.ts`.

## Design system (DesignSys/)

- `colors_and_type.css` — CSS custom properties (`qs-*` tokens). No Tailwind.
- Dark mode: `[data-theme="dark"]` on `<html>`, driven by `next-themes`.
- Fonts: `MOMCAKE` (display/headlines, caps-only) via `next/font/local`; `Bourbon Grotesque` (display-alt, only the "X" in the wordmark); `Source Code Pro` (mono, eyebrows/meta); `Barlow Condensed` (sans, body/UI) from Google Fonts.
- Footer logo swaps `logo-black.svg`/`logo-white.svg` by theme, rendered at 108px tall.
- `.qs-calendar-wrap` on `/engage` must stay `background: white` — the Google Calendar iframe always renders light mode regardless of parent theme.

## Content

`NEXT_PUBLIC_BOOKING_URL` (in `.env.local`) holds the booking link used on `/engage`. **Do not edit copy** in `src/lib/data.ts` unless the user explicitly asks — ask first.
