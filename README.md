# Quantum Simplex

Production website for **Quantum Simplex** — Dr. Michael Wu's AI Transformation Advisory. Built with Next.js (App Router) and TypeScript.

The site presents three sequential AI transformation service levels (Inspire → Mobilize → Transform), Dr. Wu's speaking/writing archive, thought leadership content, and a booking flow backed by Google Calendar.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to the Google Calendar booking link used on `/engage`.

## Commands

```bash
npm run dev          # start dev server (localhost:3000)
npm run build        # production build
npm run start        # serve production build
npm run test         # unit/component tests (vitest run)
npm run test:watch   # vitest watch mode
npm run test:e2e     # playwright e2e (auto-starts dev server)
npm run test:all     # vitest + playwright
```

Single test file: `npx vitest run src/__tests__/pages/HomePage.test.tsx`
Single e2e file: `npx playwright test e2e/home.spec.ts`

## Architecture

- **Routes** (`src/app/*/page.tsx`) — `/` (home), `/about`, `/services`, `/insights`, `/engage`. Routes are thin and render content sourced from `src/lib/data.ts` (typed exports: `nav`, `about`, `services`, `content`, `publications`, `booking`, etc.).
- **Layout** (`src/app/layout.tsx`) wraps every page in `next-themes` `ThemeProvider` (`data-theme` attribute, system default) plus shared `Nav`, `Footer`, and `RevealProvider` — a client component running a single `IntersectionObserver`/`MutationObserver` pair that adds `data-visible` to any `[data-reveal]` element as it scrolls into view.
- **Components** (`src/components/`): `Nav`, `Footer`, `FeaturedReel`, `ContentCard`.
- **Styling**: CSS custom properties (`qs-*` tokens) in `src/app/globals.css`. No Tailwind. Dark mode via `[data-theme="dark"]` on `<html>`.
- **Tests** (`src/__tests__/`) mirror `src/` structure (`components/`, `pages/`, `lib/`) and run under Vitest + jsdom + React Testing Library. Playwright e2e specs live in `e2e/` and run against a real dev server.

See `CLAUDE.md` for detailed guidance on working in this codebase, and `DesignSys/` for the original design handoff reference (JSX prototypes, copy source, brand assets).

## Testing

147 tests across unit/component (Vitest) and e2e (Playwright) suites. See `test.md` for full coverage breakdown.
