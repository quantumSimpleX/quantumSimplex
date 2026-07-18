# Quantum Simplex

**AI Transformation Advisory — Dr. Michael Wu**

Production website for Quantum Simplex, built with Next.js (App Router) and TypeScript.

---

## Why

Most enterprise AI transformation fails for a boringly consistent reason: organizations buy tools before they change minds, and change minds before they change behavior — or skip straight to "transformation" without either. A pilot ships, a dashboard lights up, adoption never happens, and eighteen months later the initiative is quietly shelved. The technology was rarely the bottleneck. The people were never brought along.

Quantum Simplex exists to fix the sequence, not just the tooling. AI transformation only sticks when it moves through three stages, in order:

- **Inspire** — *change mindset.* You can't mobilize a team that isn't inspired. Leaders and workforces need a concrete, de-hyped mental model of what AI actually is and isn't before they'll trust it with real work.
- **Mobilize** — *change behavior.* You can't transform a workforce that isn't mobilized. Strategy and tooling mean nothing until they're anchored into daily workflows and tracked with real adoption metrics — not "we deployed it."
- **Transform** — *change operations.* You can't futureproof a company that isn't transformed. This is where legacy bottlenecks get re-engineered and roles get deliberately redesigned around an AI-augmented reality, instead of drifting into one.

Skip a stage and the next one collapses. Most failed AI initiatives are missing mindset work, behavior work, or both — they went straight for the operational rebuild and had nothing underneath it.

## What

Quantum Simplex is a three-level advisory practice, one level per stage of the framework above. Each level pairs a high-visibility catalyst engagement with a longer-horizon stewardship engagement:

| Level | Focus | Catalytic Ignition | Enduring Stewardship |
|---|---|---|---|
| **1-Inspire** | Change mindset | Strategic keynotes for boards, executives, and conferences | Foundational AI/ML literacy education at workforce scale |
| **2-Mobilize** | Change behavior | AI product strategy — which initiatives create defensible advantage | Internal AI adoption — behavior-change programs tied to adoption KPIs |
| **3-Transform** | Change operations | AI-centric workflow re-engineering of core functions | Human-centric growth — reskilling and role redesign for an AI-augmented org |

The site itself is the front door to that practice: it explains the framework, showcases two decades of speaking and writing on AI, data, and human behavior, and routes qualified conversations into a booking flow.

## Who

Built for organizations that are past the "should we do something with AI" question and into "why isn't it working" — typically boards, executive committees, and leadership teams at mid-to-large enterprises who have already tried tools-first AI initiatives and hit an adoption wall. Also for teams earlier in the journey who want to get the sequence right the first time, rather than skip mindset and behavior work and pay for it later.

## How

Every level offers two ways in, matched to what the organization needs at that moment:

- **Catalytic Ignition** — a focused, high-impact engagement (a keynote, a strategy sprint, a re-engineering deep-dive) meant to shift a room or unblock a decision quickly.
- **Enduring Stewardship** — a sustained program (education at scale, adoption tracking, reskilling) meant to make the change durable after the engagement ends.

Engagement starts with a 30-minute, no-commitment call via `/engage`: describe where you're stuck, and you get a plain-language answer within two working days — even if there's no further engagement.

---

## Development

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to the Google Calendar booking link used on `/engage`.

### Commands

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

### Architecture

- **Routes** (`src/app/*/page.tsx`) — `/` (home), `/about`, `/services`, `/insights`, `/engage`. Routes are thin and render content sourced from `src/lib/data.ts` (typed exports: `nav`, `about`, `services`, `content`, `publications`, `booking`, etc.).
- **Layout** (`src/app/layout.tsx`) wraps every page in `next-themes` `ThemeProvider` (`data-theme` attribute, system default) plus shared `Nav`, `Footer`, and `RevealProvider` — a client component running a single `IntersectionObserver`/`MutationObserver` pair that adds `data-visible` to any `[data-reveal]` element as it scrolls into view.
- **Components** (`src/components/`): `Nav`, `Footer`, `FeaturedReel`, `ContentCard`.
- **Styling**: CSS custom properties (`qs-*` tokens) in `src/app/globals.css`. No Tailwind. Dark mode via `[data-theme="dark"]` on `<html>`.
- **Tests** (`src/__tests__/`) mirror `src/` structure (`components/`, `pages/`, `lib/`) and run under Vitest + jsdom + React Testing Library. Playwright e2e specs live in `e2e/` and run against a real dev server.

See `CLAUDE.md` for detailed guidance on working in this codebase, and `DesignSys/` for the original design handoff reference (JSX prototypes, copy source, brand assets).

### Testing

147 tests across unit/component (Vitest) and e2e (Playwright) suites. See `test.md` for full coverage breakdown.
