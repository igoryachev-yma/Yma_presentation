# AI Agent Guide — Yma Presentations

This document is for the AI coding agent (Cursor, Claude Code, or similar). It describes how this project works, how to add content, and how to deploy. Read this file and `docs/DESIGN.md` before making any changes.

## Quick rules

1. Each slide is a `<section className="slide">` with content inside `<div className="slide-inner">`.
2. Wrap every visible element in `<A>` for animation. Use `d={n}` for stagger order.
3. Use design tokens from `styles.css` — never hardcode colors or font families.
4. After adding or removing a slide, update `SLIDE_COUNT` in `App.jsx`.
5. Keep slide files focused — one concept per slide.
6. **NEVER generate SVG animations in code.** Use `<A>` variants, CSS `@keyframes`, or framer-motion hooks instead.
7. Run `npm run dev` to preview, `npm run build` to check production build.

## What is this project?

An interactive web presentation for **Yma**. It runs in the browser with smooth scroll-snap navigation, entrance animations, and a modern card-based layout. It is NOT a PowerPoint or Google Slides — it's a React web app that looks and feels like a polished deck.

The target audience for presentations varies: investors, clients, partners, internal stakeholders. The template is universal.

## Tech stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI framework | React | 19 |
| Build tool | Vite | 7 |
| Animations | framer-motion | 12 |
| Hosting | Vercel | — |

No routing, no state management, no CSS-in-JS. Keep it simple.

## Project structure

```
├── public/
│   ├── fonts/                  # Geist + GT Alpina font files
│   └── yma_logo.svg            # Yma wordmark
├── src/
│   ├── components/
│   │   ├── A.jsx               # Animation wrapper (most important)
│   │   ├── Progress.jsx        # Navigation dots (right side)
│   │   ├── AnimatedNumber.jsx  # Count-up animation for numbers
│   │   ├── ChatMockup.jsx      # Chat UI with sequential message reveal
│   │   └── DecoCircle.jsx      # Decorative ring element
│   ├── slides/
│   │   ├── TitleSlide.jsx      # Opening slide with logo + title
│   │   ├── ContentSlide.jsx    # Cards grid example
│   │   ├── TimelineSlide.jsx   # Horizontal timeline with color-coded cards
│   │   ├── DividerSlide.jsx    # Dark section divider with stats
│   │   ├── FlipSlide.jsx       # Click-to-flip cards (front → back)
│   │   ├── ComparisonSlide.jsx # Before/after comparison with chat mockups
│   │   └── ClosingSlide.jsx    # Typewriter-style closing
│   ├── App.jsx                 # Main component — assembles slides
│   ├── main.jsx                # Entry point
│   └── styles.css              # Design system (tokens, layouts, components)
├── docs/
│   ├── AGENT.md                # This file
│   └── DESIGN.md               # Branding & design rules
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## How slides work

### Anatomy of a slide

Every slide follows this pattern:

```jsx
<section className="slide">
  <div className="slide-inner">
    <A><p className="tag">SECTION LABEL</p></A>
    <A d={1}><h2>Slide Title</h2></A>
    <A d={2}>
      {/* slide content: cards, tables, metrics, text */}
    </A>
  </div>
</section>
```

Key rules:
- The outer `<section className="slide">` provides full-viewport layout with scroll-snap.
- `slide-inner` constrains content to 960px. Use `slide-inner slide-inner-wide` for 1100px.
- The `<A>` component handles entrance animations. Use `d={n}` to stagger elements.

### Slide variants

| Type | Class on `<section>` | Description |
|------|---------------------|-------------|
| Default | `slide` | Light gray background (#f3f4f6) |
| Title | `slide slide-title` | White bg with gradient overlay and decorative swirl |
| Divider | `slide slide-divider` | Black background, white text, used as section separators |
| Closing | `slide slide-closing` | Black background, typewriter text reveal |
| Custom bg | `slide` + inline style | Any background via style prop |

### Adding a new slide

1. Create a new file in `src/slides/`, e.g. `MetricsSlide.jsx`.
2. Follow the anatomy pattern above.
3. Import and add it to `src/App.jsx` in the desired position.
4. Update `SLIDE_COUNT` in `App.jsx` to match the total number of slides.

### Removing the example slides

When building a real presentation, replace the example slides:
1. Delete or modify files in `src/slides/`.
2. Update imports and component usage in `App.jsx`.
3. Update `SLIDE_COUNT`.

## Animation system

### Important: animation rules

1. **All animations replay.** Every `<A>`, `AnimatedNumber`, and `DecoCircle` re-animate each time the slide scrolls into view. Exit animations play when scrolling away.
2. **NEVER generate SVG animations in code.** Do not create animated SVG paths, morphing, stroke-dashoffset animations, or any procedural SVG. The results are unreliable.
3. **Use these tools for animation — nothing else:**
   - `<A>` component with built-in variants (blur, scaleIn, slideUp, slideLeft, slideRight, fadeIn)
   - CSS `@keyframes` for looping effects (pulse, glow, float, gradient shifts)
   - `AnimatedNumber` for count-up numbers
   - `DecoCircle` for decorative rings
   - Framer-motion `useScroll` / `useTransform` for scroll-driven effects
4. **For decorative visuals**, use CSS (gradients, box-shadows, border-radius, transforms) — not SVG illustrations. If a complex illustration is needed, use a static SVG file or image, not generated SVG code.
5. **Static SVG icons are fine** — simple, small icons (16–20px) in cards and labels. Just don't animate them with code.

### The `<A>` component

Located in `src/components/A.jsx`. Wraps any content in a framer-motion animated `div` that triggers when scrolled into view and animates out when scrolled away.

```jsx
import A, { blur, scaleIn, slideUp, slideLeft, slideRight, fadeIn } from '../components/A'

<A>Default blur animation</A>
<A d={1}>Delayed by 1 step</A>
<A d={2}>Delayed by 2 steps</A>
<A v={scaleIn} d={3}>Scale-in spring animation</A>
<A v={slideUp}>Slides up</A>
<A v={slideLeft}>Slides from left</A>
<A v={slideRight}>Slides from right</A>
<A v={fadeIn}>Simple fade</A>
```

Parameters:
- `v` — animation variant (default: `blur`). Options: `blur`, `scaleIn`, `slideUp`, `slideLeft`, `slideRight`, `fadeIn`.
- `d` — delay multiplier (integer). Each step adds a fraction of a second. Use sequential numbers for stagger.
- `className` — passed through to the wrapper div.

### AnimatedNumber

Count-up animation for numeric values. Triggers when scrolled into view, resets to 0 when scrolled away, and re-counts on return.

```jsx
import AnimatedNumber from '../components/AnimatedNumber'

<AnimatedNumber value={85} suffix="%" />
<AnimatedNumber value={1200} suffix="+" duration={1.5} />
```

### ChatMockup

Chat window UI with sequential message reveal. Messages appear one by one with typing indicators for assistant messages. Replays on each scroll into view.

```jsx
import ChatMockup from '../components/ChatMockup'

const messages = [
  { role: 'user', content: 'User message text' },
  { role: 'assistant', content: 'Assistant response text' },
]

<ChatMockup messages={messages} title="ChatGPT" />
<ChatMockup messages={messages} title="ChatGPT + Yma" compact delay={2000} />
```

Parameters:
- `messages` — array of `{ role: 'user'|'assistant', content: string|JSX }`.
- `title` — title shown in the top bar (default: `'ChatGPT'`).
- `compact` — smaller font and padding for side-by-side use.
- `delay` — milliseconds to wait before first message appears (useful when two chats are side by side).
- `onMessageShown` — callback `(index) => void` fired after each message is revealed.

## Available CSS classes

### Layout

| Class | Purpose |
|-------|---------|
| `slide` | Full-viewport slide container |
| `slide-inner` | Content wrapper, max-width 960px |
| `slide-inner-wide` | Extends max-width to 1100px |
| `text-center` | Centers text and subtitle |
| `split-layout` | Two-column 50/50 grid |
| `card-grid` | 2-column card grid |
| `card-grid-3` | 3-column card grid |
| `card-grid-4` | 4-column card grid |
| `metrics-row` | Horizontal row of metric boxes |

### Cards

| Class | Purpose |
|-------|---------|
| `card` | White card with border, shadow, hover lift |
| `card-header` | Flex row with space-between for title + chip |
| `card-icon` | 40×40 rounded icon container |
| `card-icon-blue` / `card-icon-green` / `card-icon-amber` | Icon background color |

### Status chips

| Class | Appearance |
|-------|-----------|
| `chip chip-done` | Green — completed items |
| `chip chip-progress` | Blue — in-progress items |
| `chip chip-new` | Amber — new items |

### Metrics

| Class | Purpose |
|-------|---------|
| `metric` | Single metric box |
| `metric-value` | Large GT Alpina number |
| `metric-label` | Small gray label below |
| `metric-accent` | Green-tinted metric box |

### Tables

| Class | Purpose |
|-------|---------|
| `table-wrap` | Rounded card wrapper for tables |
| `table` | The `<table>` element |
| `row-highlight` | Gray highlighted row |
| `row-accent` | Green highlighted row |
| `row-total` | Black total row |

### Typography

| Class | Purpose |
|-------|---------|
| `tag` | Uppercase label (12px, gray) |
| `subtitle` | 20px gray paragraph |
| `section-subtitle` | 17px lighter subtitle |
| `hl` | Yellow text highlight |
| `hl-green` | Green text highlight |
| `hl-gray` | Gray text highlight |
| `alpina-title` | Apply GT Alpina font to any element |

### Timeline

| Class | Purpose |
|-------|---------|
| `timeline` | Container for horizontal timeline |
| `timeline-line` | Horizontal line behind cards |
| `timeline-cards` | Flex container for timeline cards |
| `timeline-card` | Individual card in timeline |
| `timeline-accent` | Colored top stripe on card (set `background` via style) |
| `timeline-date` | Small uppercase date label |
| `timeline-title` | Card title |
| `timeline-desc` | Card description |
| `timeline-stat-badge` | Amber badge for key metrics |
| `timeline-link` | Optional link icon in card header |

### Flip Cards

| Class | Purpose |
|-------|---------|
| `flip-grid` | 3-column grid for flip cards |
| `flip-card` | Container with perspective (add `.flipped` to flip) |
| `flip-card-inner` | Inner rotating element |
| `flip-front` | Front face — white, centered content |
| `flip-back` | Back face — black, detail content |
| `flip-front-icon` | Large emoji/icon on front |
| `flip-hint` | Small "click to reveal" text |

### Comparison

| Class | Purpose |
|-------|---------|
| `comparison` | Two-column grid for before/after panels |
| `comparison-panel` | Column container for label + content |
| `comparison-label` | Uppercase pill label |
| `comparison-label-before` | Gray label for "before" panel |
| `comparison-label-after` | Green label for "after" panel |

### Chat Mockup

| Class | Purpose |
|-------|---------|
| `chat-mockup` | Chat window container |
| `chat-compact` | Smaller variant for side-by-side use |
| `chat-top-bar` | Title bar with icon and window dots |
| `chat-body` | Scrollable message area |
| `chat-row` | Single message row |
| `chat-row-user` | User message (right-aligned) |
| `chat-ava` | Avatar circle (28px) |
| `chat-content` | Message text container |

### Callout

| Class | Purpose |
|-------|---------|
| `callout-stat` | Centered card for key insight or takeaway |
| `callout-stat-label` | Small uppercase label |
| `callout-stat-text` | Main text (18px) |

### Closing / Typewriter

| Class | Purpose |
|-------|---------|
| `slide-closing` | Black background closing slide |
| `closing-content` | Centered flex column |
| `typewriter-line` | GT Alpina heading line |
| `typewriter-line-1/2/3` | Size variants for each line |
| `typewriter-word` | Inline-block word for stagger animation |

### Decorative

| Class | Purpose |
|-------|---------|
| `bg-gradient` | Soft multi-color gradient overlay |
| `bg-circle` | Large decorative ring |
| `gradient-footer` | Gradient stripe at bottom of a slide |

## Running locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement.

## Building for production

```bash
npm run build
```

Output goes to `dist/`. To preview the build locally:

```bash
npm run preview
```

## Deploying to Vercel

This project has a `vercel.json` configured for Vite. To deploy:

1. Push the repository to GitHub.
2. Import the repository in Vercel (vercel.com → New Project).
3. Vercel auto-detects Vite and deploys. No additional configuration needed.

For subsequent updates, just push to the main branch — Vercel deploys automatically.

## Common tasks — quick reference

### "Add a slide with 3 info cards"

1. Create `src/slides/InfoSlide.jsx`
2. Use `card-grid card-grid-3` layout with `<A v={scaleIn}>` on each card
3. Import in `App.jsx`, increment `SLIDE_COUNT`

### "Add a data table"

Use `table-wrap` + `table` classes. See `styles.css` for row variants.

### "Add big numbers / KPIs"

Use `metrics-row` with `metric` items. Apply `metric-accent` for emphasis.
Use `<AnimatedNumber value={42} suffix="%" />` for count-up effect.

### "Add a timeline / roadmap"

See `TimelineSlide.jsx`. Use `timeline` → `timeline-cards` with `timeline-card` items.
Each card has a `timeline-accent` color stripe and optional `timeline-stat-badge`.

### "Add flip cards (front → detail)"

See `FlipSlide.jsx`. Use `flip-grid` with `flip-card` items. Cards auto-flip on scroll
and can be clicked to toggle. Front shows icon + title, back shows detail text.

### "Add a before/after comparison"

See `ComparisonSlide.jsx`. Use `comparison` grid with two `comparison-panel` columns.
Pair with `ChatMockup` for conversational before/after, or use any content inside panels.

### "Add a chat / conversation demo"

```jsx
import ChatMockup from '../components/ChatMockup'

<ChatMockup
  messages={[
    { role: 'user', content: 'User says this' },
    { role: 'assistant', content: 'AI responds with this' },
  ]}
  title="ChatGPT"
  compact
/>
```

### "Add a callout / key insight"

```jsx
<A className="callout-stat">
  <span className="callout-stat-label">Key signal</span>
  <p className="callout-stat-text">
    The main insight or takeaway with <span className="hl">highlighted text</span>
  </p>
</A>
```

### "Change colors or fonts"

Edit CSS custom properties in `:root` in `styles.css`. Never hardcode values inline.

### "Change the title/logo"

Edit `TitleSlide.jsx` and `index.html` (for the page `<title>` and favicon).
