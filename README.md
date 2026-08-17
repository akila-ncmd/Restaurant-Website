# EatBest

A neo-brutalist food delivery marketing site built with Next.js 16 (App Router), React 19,
Tailwind CSS v4, Framer Motion, Lenis smooth scrolling, and a React Three Fiber 404 scene.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Production build                      |
| `npm run start` | Serve the production build            |
| `npm run lint`  | Run ESLint                            |

## Structure

```
src/
  app/
    (main)/          Marketing pages (home, about, menu, blog, contact)
    layout.tsx       Root layout + metadata
    not-found.tsx    404 page with the 3D pastry scene
    globals.css      Theme tokens, utilities, animations
  components/        Section and UI components
  lib/
    data.ts          All page copy and imagery references
    types.ts         Types for the content in data.ts
public/              Images, fonts (helvetiker for Text3D)
```

All site copy lives in `src/lib/data.ts` — edit content there rather than in components.
