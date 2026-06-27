# Quantum Simplex Website — Design Handoff

> **For Claude Code / VS Code.** Everything you need to rebuild this site is in this zip. Read this file first.

---

## What's in this package

```
fonts/
  BourbonGrotesque-Regular.otf   ← brand accent font (the "X" in the wordmark)
  MOMCAKE/
    MOMCAKE-Bold.otf             ← primary display font (headlines)
    MOMCAKE-Thin.otf
  SourceCodePro-Regular.otf.woff2
  SourceCodePro-Medium.otf.woff2
  SourceCodePro-It.otf.woff2    ← monospace voice (eyebrows, meta, code)

assets/
  logo-black.svg                 ← full wordmark, dark version
  logo-white.svg                 ← full wordmark, light version
  icon-black.svg                 ← simplex mark only
  icon-white.svg
  icon-q-black.svg               ← circular Q badge (used as favicon)
  icon-q-white.svg

website/
  index.html                     ← app shell + routing + SEO meta
  site.css                       ← all layout + component styles + dark mode
  data.js                        ← all content (services, nav, archive, booking)
  reveal.js                      ← scroll-reveal (IntersectionObserver)
  Nav.jsx                        ← sticky header, theme toggle, Engage pill
  Footer.jsx                     ← footer with scroll-to-level logic
  HomePage.jsx
  AboutPage.jsx
  ServicesPage.jsx
  ThoughtLeadershipPage.jsx
  BookPage.jsx                   ← the "Engage" page
  portrait.jpg                   ← Dr. Michael Wu portrait photo

colors_and_type.css              ← all CSS custom properties (color + type tokens)
base.css                         ← button, card, input component primitives
README.md                        ← this file
```

> **The portrait photo is at `website/portrait.jpg`.** It's already used in AboutPage.jsx.

---

## How to rebuild this in Claude Code

### Step 1 — Set up your repo

```bash
# Option A: Start fresh with Next.js (recommended for production)
npx create-next-app@latest quantum-simplex --typescript --tailwind=false --app
cd quantum-simplex

# Option B: Plain Vite + React
npm create vite@latest quantum-simplex -- --template react-ts
cd quantum-simplex && npm install
```

### Step 2 — Copy the handoff files into your repo

```bash
# Copy the entire handoff package into a subfolder called /design
cp -r /path/to/design_handoff_quantum_simplex ./design
```

Your repo should now look like:
```
quantum-simplex/
  design/
    README.md         ← this file
    website/          ← all the JSX prototypes
    assets/           ← SVG logos and icons
    fonts/            ← brand font files
    colors_and_type.css
    base.css
  src/
  package.json
  ...
```

### Step 3 — Copy assets into your project

```bash
# Fonts → public or src/fonts depending on your setup
cp -r design/fonts ./public/fonts

# Brand SVGs
cp -r design/assets ./public/assets

# Dr. Wu portrait
cp design/website/portrait.jpg ./public/portrait.jpg
```

### Step 4 — Open Claude Code and paste this prompt

Open VS Code, start Claude Code (`claude` in terminal or Cmd+Shift+P → Claude Code), and paste:

---

**Prompt to paste into Claude Code:**

```
I have a high-fidelity HTML/JSX prototype for the Quantum Simplex website in the /design folder.
Please rebuild it as a proper Next.js (App Router) application.

Read /design/README.md for the full spec. Then read the prototype files in /design/website/ to
understand the exact layout, copy, colors, and interactions.

Here is what to implement:

PAGES (one route each):
- / → HomePage.jsx
- /about → AboutPage.jsx
- /services → ServicesPage.jsx (with scroll-to #level-1, #level-2, #level-3 support)
- /insights → ThoughtLeadershipPage.jsx
- /engage → BookPage.jsx

SHARED:
- Nav.jsx → layout header (sticky, 72px, blur on scroll, dark/light mode toggle)
- Footer.jsx → layout footer (logo links to /, service links scroll to sections)

FONTS (already in /public/fonts/):
- MOMCAKE Bold/Thin → --font-display (headlines)
- Bourbon Grotesque → --font-display-alt (the X accent letter only)
- Source Code Pro → --font-mono (eyebrows, meta)
- Barlow Condensed → --font-sans (body, UI) — load from Google Fonts

DESIGN TOKENS:
Copy all CSS custom properties from /design/colors_and_type.css into your global CSS.
Dark mode uses [data-theme="dark"] on <html> — implement with next-themes.

KEY BEHAVIORS:
1. Dark mode: persisted in localStorage, toggles via moon/sun button in nav
2. Scroll-to-section: /services?section=level-2 or hash routing → smooth scroll 88px below target
3. Scroll reveal: elements with data-reveal animate in (opacity + translateY) using framer-motion whileInView
4. Footer logo (108px): links to home, swaps black↔white SVG based on theme
5. Google Calendar iframe (/engage): always white background — Google doesn't support dark mode in embeds

All content (nav labels, services copy, thought leadership archive, booking URL) lives in
/design/website/data.js — migrate this to constants or a CMS as appropriate.

Start with the global layout (fonts, tokens, Nav, Footer), then implement pages one at a time.
Ask me before making any content changes — only fix structure, not copy.
```

---

### Step 5 — Work page by page

After Claude Code sets up the layout shell, ask it to implement one page at a time:

```
Implement the Home page (/). Reference /design/website/HomePage.jsx for the exact layout.
Match the hero, sequence strip, publications strip, about teaser, featured content, and CTA banner sections exactly.
```

Repeat for About, Services, Insights, Engage.

---

## Design at a glance

### Brand colors
| Token | Hex | Usage |
|---|---|---|
| `--qs-amethyst-400` | `#8A60EB` | Primary brand — Engage button, amethyst accents |
| `--qs-aqua-400` | `#1FC3A4` | Accent — Level 1/Inspire, video type, momentum |
| `--qs-ink-900` | `#0A0E14` | Near-black text and dark surfaces |
| `--qs-paper` | `#FAFAF7` | Default light background |
| `--qs-paper-warm` | `#F5F2EA` | Alternate warm sections |

### Dark mode token overrides
```css
[data-theme="dark"] {
  --fg-1: #F4F5F7;
  --fg-2: #A6ADB7;
  --bg-1: #161B23;
  --bg-2: #242B35;
  --bg-3: #2E3742;
  --line: #2E3742;
  --line-strong: #3A434F;
  --qs-paper-warm: #1A2028;
}
```

### Typography roles
| Font | Role | Notes |
|---|---|---|
| MOMCAKE Bold | Headlines, section names | Caps-only; `letter-spacing: -0.03em` |
| Bourbon Grotesque | The "X" accent letter only | Caps-only; never for body |
| Barlow Condensed | Body, UI, buttons, nav | Google Fonts; narrow grotesque |
| Source Code Pro | Eyebrows, meta, mono voice | `letter-spacing: 0.2em; text-transform: uppercase` for eyebrows |

### Motion
```
Easing:   cubic-bezier(0.16, 1, 0.3, 1)   — fast in, slow out
Fast:     120ms   — press states
Default:  220ms   — hover transitions
Slow:     420ms   — scroll reveals
```

### Key measurements
- Nav height: `72px`
- Max content width: `1280px`
- Site padding: `56px` desktop → `36px` tablet → `20px` mobile
- Scroll-to-section offset: `88px` (nav height + breathing room)
- Portrait: `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: center 12%`
- Footer logo: `108px` tall
- Google Calendar iframe: `700px` tall, always `background: white`

---

## Content lives in `data.js`

All copy, services descriptions, thought-leadership archive, and booking config is in `/design/website/data.js`. In production:
- Migrate `content[]` (50+ articles/videos/podcasts) to a CMS (Contentful, Sanity, etc.)
- Keep `services[]` as static constants
- Store `booking.url` in an environment variable

---

## FAQ

**Q: The portrait photo isn't showing.**
A: It's at `design/website/portrait.jpg`. Copy it to `public/portrait.jpg` and update the `<img src>` in your About page component.

**Q: Fonts aren't loading.**
A: Check that `@font-face` declarations in `colors_and_type.css` point to the right paths relative to your CSS file. In Next.js App Router, use `next/font/local` instead.

**Q: The Google Calendar embed is black in dark mode.**
A: The `.qs-calendar-wrap` must always have `background: white`. The iframe itself renders its own light-mode UI regardless of parent theme.

**Q: How does scroll-to-section work?**
A: The prototype uses `sessionStorage` as a cross-page signal. In Next.js, use URL hash or `searchParams` instead: navigate to `/services#level-2`, then in the ServicesPage component use a `useEffect` that watches the hash and calls `window.scrollTo` with an 88px offset.
