# Quantum Simplex — Test Suite

## Overview

| Suite | Runner | Files | Tests | Status |
|---|---|---|---|---|
| Unit / Component | Vitest + React Testing Library | 10 | 95 | ✅ All passing |
| E2E | Playwright (Chromium) | 6 | 52 | ✅ All passing |
| **Total** | | **16** | **147** | **✅ 147/147** |

---

## Unit & Component Tests (`src/__tests__/`)

Run with: `npm test`

### `lib/data.test.ts` — Data layer (22 tests)
- Nav array: 4 items, correct hrefs, each has id/label/href
- About: name, LinkedIn URL shape
- Services: 3 items, correct levels (1–3), names (Inspire/Mobilize/Transform), every offering has name/engagement/description
- Content array: ≥30 items, every item has valid type / non-empty title / non-empty URL
- Publications: ≥10 string items
- YouTube channel URL format
- Featured video IDs: all 6 IDs present in the content array

### `components/ContentCard.test.tsx` — ContentCard component (9 tests)
- Renders href link to item.url
- Shows type label (Video / Podcast / Article)
- Shows year when present; omits year element when null
- Renders YouTube thumbnail `<img>` for video `?v=` URLs
- Renders title `<p>` (no thumbnail) for non-video items
- `target="_blank" rel="noopener noreferrer"` on all links
- Renders source name

### `components/Footer.test.tsx` — Footer component (7 tests)
- Services heading with Level 1/2/3 links
- Thought Leadership heading with YouTube channel link
- Connect column: About / LinkedIn / Engage links
- Copyright text contains "2026 Quantum Simplex"
- Version string `v.2026.06`
- Both logo images have `alt="Quantum Simplex"`
- LinkedIn link has `target="_blank"`

### `components/Nav.test.tsx` — Nav component (7 tests)
- All 4 nav link labels rendered
- Brand link goes to `/`
- Theme toggle button has aria-label for dark/light mode
- Menu toggle button has aria-label "Menu"
- Engage link has class `qs-nav-engage`
- Services link gets `is-active` class when `pathname=/services`
- No active class on other links when on home

### `components/FeaturedReel.test.tsx` — FeaturedReel component (1 test)
- Connect heading with About / LinkedIn / Engage links

### `pages/HomePage.test.tsx` — Home page (6 tests)
- Hero headline: INSPIRE. / MOBILIZE. / TRANSFORM.
- Sequence strip: `.qs-sequence-name` elements equal `['INSPIRE', 'MOBILIZE', 'TRANSFORM']`
- "As seen in" publications strip
- `about.name` in about-teaser h2
- FEATURED VIDEOS. heading
- `booking.headline` in CTA banner

### `pages/AboutPage.test.tsx` — About page (7 tests)
- DR. MICHAEL WU heading
- SPEAKING heading
- WRITING heading
- Portrait image `alt=about.name`
- Speaking items all have video links
- Writing items are all `major-press` articles
- External LinkedIn link

### `pages/ServicesPage.test.tsx` — Services page (7 tests)
- SERVICES heading
- `level-1`, `level-2`, `level-3` section IDs
- LEVEL 01 / LEVEL 02 / LEVEL 03 labels
- INSPIRE / MOBILIZE / TRANSFORM level names
- Each service renders its thread text
- All offerings rendered by name
- CTA banner booking headline

### `pages/InsightsPage.test.tsx` — Insights page (6 tests)
- THOUGHT LEADERSHIP heading
- 4 theme filter buttons
- 4 type filter buttons
- All Topics / All Formats active by default
- Clicking Video filter calls `router.push` with `?type=video`
- Shows only video items when `type=video`
- Shows only inspire-theme articles when `type=article&theme=inspire`

### `pages/EngagePage.test.tsx` — Engage page (8 tests)
- LET'S TALK. heading
- 3 booking step numbers (01, 02, 03)
- All 3 step titles
- Calendar iframe with `src=booking.url`
- Calendar iframe has `background: white` style
- "What to expect" sidebar heading
- "Who you're talking to" sidebar heading
- `about.name` in sidebar
- External LinkedIn link

---

## E2E Tests (`e2e/`) — Playwright, Chromium

Run with: `npm run test:e2e`  
Requires dev server at `http://localhost:3000` (auto-started by Playwright config).

### `home.spec.ts` — Home page (9 tests)
- Page title is "Quantum Simplex — AI Transformation Advisory"
- Hero headline contains INSPIRE. / MOBILIZE. / TRANSFORM.
- Stat numbers visible (200+, 40+, 150+)
- All 3 service levels in sequence strip
- "As seen in" publications strip
- About section contains "DR. MICHAEL WU" (scrolls to element first)
- FEATURED VIDEOS section visible
- Engage CTA button links to `/engage`
- Services ghost button links to `/services`

### `about.spec.ts` — About page (8 tests)
- DR. MICHAEL WU heading
- Portrait image visible
- Background bio block
- SPEAKING archive section
- WRITING archive section
- External LinkedIn link
- Social icons present
- Engage CTA button present

### `services.spec.ts` — Services page (8 tests)
- SERVICES heading
- All 3 level sections (level-1, level-2, level-3)
- Level names (`.qs-level-name` locator for exact match)
- Each level shows tagline
- Level 1 shows Strategic Keynotes offering
- Level 2 shows AI Product Strategy and Internal AI Adoption offerings
- Level 3 shows AI-Centric Workflow offering
- CTA banner links to `/engage`
- Hash navigation scrolls to level-2

### `insights.spec.ts` — Insights page (9 tests)
- THOUGHT LEADERSHIP heading
- Theme filter buttons (4)
- Type filter buttons (4)
- Clicking Video filter updates URL and shows only video items
- Clicking Inspire theme filter shows only inspire items
- Combination filter: Article + Mobilize (waits for URL after first click)
- Shows empty state for impossible filter combination
- YouTube Channel link present

### `engage.spec.ts` — Engage page (7 tests)
- LET'S TALK. heading
- Booking steps 01, 02, 03
- Calendar iframe present
- Engage nav link has `qs-nav-engage` class
- Sidebar "What to expect" heading
- Sidebar "Who you're talking to" heading
- Sidebar shows Dr. Michael Wu
- Sidebar has LinkedIn link

### `navigation.spec.ts` — Navigation (11 tests)
- Clicking About nav link navigates to `/about`
- Clicking Services nav link navigates to `/services`
- Clicking Insights nav link navigates to `/insights`
- Engage nav link has `qs-nav-engage` class
- Active link has `is-active` class on services page
- Logo link returns to `/`
- Mobile menu toggle opens menu
- Mobile menu closes after navigation
- Theme toggle sets `data-theme="dark"` on `<html>` (ThemeProvider uses `attribute="data-theme"`)
- Footer Services column links scoped to `.qs-footer` to avoid conflict with sequence-strip links

---

## Setup & Configuration

| File | Purpose |
|---|---|
| `vitest.config.ts` | Vitest config: jsdom env, globals, setup file, excludes `e2e/` |
| `playwright.config.ts` | Playwright config: baseURL=localhost:3000, auto-starts dev server, 1 retry |
| `src/test/setup.ts` | Jest-DOM matchers, mocks for next/link, next/navigation, next-themes, browser API stubs |

## Package Scripts

```bash
npm test              # vitest run (unit + component, no e2e)
npm run test:watch    # vitest watch mode
npm run test:e2e      # playwright test (e2e, starts dev server)
npm run test:e2e:ui   # playwright UI mode
```

## Key Design Decisions

- **Vitest excludes `e2e/`** — Playwright uses its own test runner; Vitest would crash on `@playwright/test` describe blocks if e2e files were included.
- **`src/test/setup.ts` mocks** — `next/link`, `next/navigation`, and `next-themes` are mocked globally so components render without a Next.js runtime.
- **Services level name locator** — `getByText('INSPIRE')` triggers strict mode (matches 4 elements: hero lede, `.qs-level-name`, thread text, and footer link). Fixed with `.qs-level-name` class selector.
- **Footer links scoped to `.qs-footer`** — The home sequence strip also generates `/services#level-N` links; `a[href="/services#level-1"]` alone matches 2 elements. Scoped to avoid strict mode violation.
- **Theme toggle assertion** — `ThemeProvider` is configured with `attribute="data-theme"`, so dark mode sets `<html data-theme="dark">`, not a CSS class.
- **About section scroll** — The `h2.qs-about-name` is inside a `data-reveal` container below the fold; `scrollIntoViewIfNeeded()` + `toContainText` is used instead of `toBeVisible()` to avoid opacity/viewport concerns.
- **Insights combination filter** — `waitForURL(/theme=mobilize/)` between clicks ensures the component re-renders with updated `searchParams` before the second filter is applied.
