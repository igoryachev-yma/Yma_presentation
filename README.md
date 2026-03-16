# Yma Presentation Template

A template for creating beautiful, animated web presentations using AI.

You don't write code — you describe what you want, and the AI agent in Cursor does the rest.

---

## Quick Start

1. Open this folder in **Cursor** (File → Open Folder).
2. Tell the agent: **"Check that everything is installed and I'm ready to work"**
3. The agent will verify dependencies, install anything missing, and start the preview.
4. Start describing your presentation!

---

## Required Dependencies

The agent checks each item and installs missing ones automatically.

### 1. Node.js (v18+)

Runtime environment for the project.

- **Check:** `node --version`
- **Install (macOS):** `brew install node` or download from https://nodejs.org
- **Install (Windows):** `winget install OpenJS.NodeJS.LTS` or download from https://nodejs.org
- **Install (Linux):** `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`

### 2. Git

Version control system. Required for deployment.

- **Check:** `git --version`
- **Install (macOS):** `xcode-select --install` (installs Git along with developer tools)
- **Install (Windows):** `winget install Git.Git` or download from https://git-scm.com
- **Install (Linux):** `sudo apt-get install -y git`

### 3. Project npm dependencies

Libraries the project depends on (React, Vite, framer-motion, etc.).

- **Check:** `node_modules` folder exists in the project root
- **Install:** `npm install` (run from the project root)

### 4. Vercel CLI (for deployment)

Tool for publishing the presentation to the web.

- **Check:** `npx vercel --version`
- **Install:** `npm install -g vercel`
- **Auth:** `npx vercel login` (opens browser for sign-in)

### Readiness Checklist

When the user asks to verify readiness, run these commands and report the results:

```
node --version        # expected: v18 or higher
git --version         # expected: any version
npm --version         # expected: any version (installed with Node.js)
npx vercel --version  # expected: any version
ls node_modules       # expected: non-empty folder; if missing — run npm install
```

If everything checks out — run `npm run dev` and confirm that the project is ready.

---

## Working with the AI

### Creating a new presentation

Tell the agent what the presentation is about and who the audience is:

> "I need a presentation for a potential client — a dental clinic chain in Dubai. We want to show them our product, key metrics, and pricing. About 8-10 slides."

### Describing slides

Be specific about what goes on each slide:

> "Add a slide showing our 3 main product features: AI scheduling, automated billing, and patient analytics. Use cards with icons."

> "Create a divider slide that says 'Our Results' with three stats: 45 clinics onboarded, 92% retention rate, and 3x revenue growth."

> "Add a slide with a table comparing our Free, Pro, and Enterprise plans."

### Editing existing slides

Reference the slide you want to change:

> "On the title slide, change the heading to 'Partnership Proposal — Q2 2026' and update the description."

> "On the product features slide, add a fourth card about our reporting dashboard."

> "Remove the pricing slide and move the team slide before the closing slide."

### Styling and emphasis

> "Highlight the word 'revenue' in the subtitle with a yellow marker."

> "Make the retention rate metric green to show it's a positive number."

### Slide types you can ask for

- **Title slide** — logo, big heading, and subtitle
- **Divider slide** — dark section separator with optional key stats
- **Cards grid** — 2, 3, or 4 cards showing features, achievements, or plans
- **Metrics / KPIs** — big animated numbers with labels
- **Table** — data comparison, pricing plans, timelines
- **Two-column layout** — side-by-side content
- **Closing slide** — thank-you with logo and contacts

---

## Deploying

When your presentation is ready, tell the agent:

> "Deploy this presentation to Vercel"

The agent will build and publish it. You'll get a link you can share with anyone.

## Git & Deployment Safety Rules (for the AI agent)

**This folder is a TEMPLATE. Never push changes back to the template repository.**

The template repo is `https://github.com/Yma-Health/presentation_template.git`. When the user asks to save, commit, push, or deploy:

1. **Check the git remote** (`git remote -v`). If the origin points to `presentation_template` — **STOP. Do not push.**
2. Instead, **create a new repository** for this presentation:
   - Pick a name based on the presentation content (e.g. `presentation-dubai-clinics-q2-2026`).
   - Ask the user to confirm the name.
   - Create the repo on GitHub: `gh repo create Yma-Health/<name> --private --source=. --push`
   - If `gh` is not installed, explain the manual steps (create repo on github.com, then `git remote set-url origin <new-url> && git push -u origin main`).
3. If the remote already points to a **different** repo (not the template) — push is safe, proceed normally.
4. **Never** run `git push` to `presentation_template`, even if the user explicitly asks. Warn them and offer to create a new repo instead.

---

## Project Structure (for reference)

```
src/
  slides/       ← one file per slide
  components/   ← reusable animated building blocks
  styles.css    ← colors, fonts, layout rules
  App.jsx       ← assembles all slides together
public/
  fonts/        ← brand fonts
  yma_logo.svg  ← company logo
docs/
  AGENT.md      ← detailed guide for the AI agent
  DESIGN.md     ← brand & design rules
```

## Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local preview with live reload |
| `npm run build` | Build production version (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npx vercel` | Publish to Vercel |
