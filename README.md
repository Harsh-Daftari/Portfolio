# Harsh Daftari — Portfolio Website

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Hero.tsx` — cinematic hero with mouse-glow, particles, blur-in text
- `src/components/ResearchLibrary.tsx` — the 4-card grid, wires each card to its SVG object
- `src/components/GlassCard.tsx` — shared glass card shell (tilt, parallax, hover glow)
- `src/components/objects/` — the four hand-built SVG illustrations (bust, bottle, memo, briefcase)
- `src/components/About.tsx`, `src/components/Contact.tsx`
