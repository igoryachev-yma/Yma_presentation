# Yma Design & Branding Guide

This document defines the visual identity for Yma presentations. Follow these rules strictly when creating or modifying slides.

## Logo

- File: `public/yma_logo.svg`
- The Yma wordmark in #1A1A1A
- Always display at `height: 28px` on slides
- Place the logo on the title slide (top-left) and optionally on the closing slide
- Never distort, recolor, or add effects to the logo

## Fonts

### GT Alpina Typewriter Thin (headings)

- **Usage**: All `h1`, `h2` headings, large accent numbers, quotes
- **Weight**: 100 (Thin) — this is the only weight we use
- **CSS**: `font-family: 'GT Alpina', serif; font-weight: 100;`
- **Character**: Elegant, typewriter-influenced serif with distinctive personality
- **Letter-spacing**: `-0.02em` on all headings
- Apply via class `alpina-title` or directly on heading elements (already styled in CSS)

### Geist (body text)

- **Usage**: All body text, labels, descriptions, UI elements
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **CSS**: `font-family: 'Geist', sans-serif;` (set on body, inherited everywhere)
- **Character**: Clean, modern sans-serif by Vercel

### Font pairing rationale

GT Alpina brings warmth and character to headings. Geist provides clarity and readability for everything else. The contrast between a thin serif and a geometric sans creates visual hierarchy without heaviness.

## Color Palette

### Primary

| Token | Hex | Usage |
|-------|-----|-------|
| `--black` | #111 | Primary text, key UI elements |
| `--white` | #fff | Card backgrounds, light text on dark |
| `--bg` | #f3f4f6 | Default slide background |

### Gray Scale

| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-50` | #f9fafb | Subtle backgrounds |
| `--gray-100` | #f3f4f6 | Borders between rows, light fills |
| `--gray-200` | #e5e7eb | Card borders |
| `--gray-300` | #d1d5db | Decorative elements, disabled states |
| `--gray-400` | #9ca3af | Tags, labels, secondary text |
| `--gray-500` | #6b7280 | Subtitles, descriptions |
| `--gray-600` | #4b5563 | Body text in lighter contexts |
| `--gray-700` | #374151 | Darker body text |
| `--gray-800` | #1f2937 | Near-black text |

### Semantic Colors

| Group | Tokens | Usage |
|-------|--------|-------|
| Green | `--green-50` to `--green-700` | Success, completed, positive metrics |
| Blue | `--blue-50` to `--blue-600` | Information, in-progress, neutral highlights |
| Amber | `--amber-50` to `--amber-600` | Warnings, new items, attention |
| Yellow | `--highlight` (#fef08a) | Text highlight underline |

### Gradients

- **Title slide**: `linear-gradient(135deg, #e0e7ff, #dbeafe, #ede9fe, #e0e7ff, #f0f9ff)` at 50% opacity
- **Results / accent**: `linear-gradient(160deg, #f0fdf8, #f0f9ff, #faf5ff)` — soft green-blue-purple
- **Decorative swirl**: `#C1ECDF → #ADE3ED → #C1ECDF` — mint-to-teal

## Typography Scale

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| h1 (title slide) | GT Alpina | 58px | 100 | --black |
| h1 (content) | GT Alpina | 56px | 100 | --black |
| h1 (divider) | GT Alpina | 52px | 100 | --white |
| h2 | GT Alpina | 42px | 100 | --black |
| Tag / label | Geist | 12px | 500 | --gray-400 |
| Subtitle | Geist | 20px | 400 | --gray-500 |
| Section subtitle | Geist | 17px | 400 | --gray-400 |
| Card title (h3) | Geist | 15px | 700 | --black |
| Card text | Geist | 13px | 400 | --gray-500 |
| Metric number | GT Alpina | 32–48px | 100 | --black |
| Metric label | Geist | 11px | 400 | --gray-400 |

## Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| Slide padding | 48px | All sides of each slide |
| Content max-width | 960px | Standard slides |
| Wide max-width | 1100px | Data-heavy slides |
| Card radius | 20px | Cards, tables, large containers |
| Inner radius | 12px | Nested elements, metrics, footers |
| Card grid gap | 14px | Between cards |
| Card padding | 22px | Inside cards |

## Visual Style — Do's

- Use plenty of white space
- Let the GT Alpina headings breathe — they're thin and elegant
- Stick to 2–4 cards per slide; avoid clutter
- Use `<A>` animation on every visible element for polished entrances
- Use staggered delays (`d={0}`, `d={1}`, `d={2}`) for sequential reveal
- Use status chips (`chip-done`, `chip-progress`, `chip-new`) for at-a-glance status
- Use `hl` or `hl-green` to highlight key words in text
- Keep text short — presentations are not documents
- Use the divider slide to separate logical sections
- Use `DecoCircle` sparingly for visual interest on content slides

## Visual Style — Don'ts

- Don't use colors outside the defined palette
- Don't use font weights other than those specified (no GT Alpina bold, no Geist 300)
- Don't add more than 6 cards on a single slide
- Don't use long paragraphs — prefer bullet points or short descriptions
- Don't mix card styles on the same slide
- Don't use stock photography or generic clip art
- Don't use drop shadows heavier than `--card-shadow`
- Don't add borders thicker than 1px
- Don't use rounded corners other than `--card-radius` (20px) or `--inner-radius` (12px)
- Don't override scroll-snap behavior
- Don't skip the `<A>` wrapper — unanimated elements feel broken
- Don't generate SVG animations in code (path animations, morphing, stroke-dashoffset) — they produce unreliable results
- Don't use emoji as icons in production presentations (the template examples use emoji as placeholders — replace them with SVG icons)

## Icon Guidelines

For real presentations, replace placeholder emoji with inline SVG icons. Keep icons:
- 16–20px for inline / card icons
- Monochrome, using the semantic color of the context (blue for info, green for success, etc.)
- Simple and geometric — avoid detailed illustrations

## Slide Backgrounds

| Type | Background |
|------|-----------|
| Default | `var(--bg)` — light gray |
| Title / Closing | `var(--white)` + gradient overlay |
| Divider | `var(--black)` — inverts all text to white |
| Accent | `var(--results-gradient)` or custom gradient |
| White | `var(--white)` — clean white |

## Animation rules

- All animations replay on every scroll into view — elements animate in when entering and out when leaving.
- **NEVER generate SVG path animations, morphing, or stroke animations in code.** Results are unreliable. Use `<A>` component variants, CSS `@keyframes`, or framer-motion hooks instead.
- Static SVG icons (small, non-animated) are fine for cards and labels.
- For decorative visuals, use CSS (gradients, shadows, transforms) — not procedural SVG.

## Accessibility

- Maintain sufficient contrast ratios (all token pairings are tested)
- Use semantic HTML (`section`, `h1`–`h3`, `p`, `table`)
- Include `alt` text on all images
- Animations are subtle and non-distracting; they replay gently on each visit to a slide
