# Work Card 01 — Project Skeleton

## Goal

Scaffold the Vite + React + Tailwind app so `npm run dev` starts and the mobile-first app shell with the HazeSafe Navigator header renders.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`

## Files likely touched

- `package.json`
- `vite.config.js`
- `index.html`
- `tailwind.config.js`
- `postcss.config.js`
- `src/main.jsx`
- `src/index.css`
- `src/App.jsx`
- `src/components/AppShell.jsx`

## Instructions for the coding agent

- Scaffold a Vite + React (JSX) app in the project root. Install only what is needed: React, Vite, Tailwind CSS, and PostCSS.
- Configure Tailwind and PostCSS so utility classes work.
- Add the core palette as Tailwind theme tokens: primary `#1F6F4A`, accent `#8CC9A8`, surface `#F5F7F6`, muted `#6B7B73`, ink `#23302B`, border `#E2E8E4`, plus heatmap green/yellow/orange/red.
- Create `AppShell.jsx`: a calm single-column mobile-first frame with a top bar showing the app name "HazeSafe Navigator" and a short honest subtitle ("Sample data prototype").
- `App.jsx` renders `AppShell` with a placeholder main area.
- Use the system sans stack from `design.md`. No gradients, no shadows beyond subtle card elevation.
- Add a `README` note is not required; keep the scaffold minimal.

## What not to do

- Do not add routing, state management libraries, backend, auth, database, or any API.
- Do not add map libraries (Leaflet/Mapbox) or any secret keys.
- Do not build the dashboard, map, planner, or saved-routes features yet.
- Do not install PWA plugins or service workers.
- Do not initialize Git yet.

## Done when

- `npm run dev` starts without errors and serves the app.
- The app shell renders "HazeSafe Navigator" with the sample-data subtitle.
- Tailwind utility classes visibly apply.
- Layout is a clean single column at mobile width.

## Verification steps

- Run `npm run dev`; confirm it starts and prints a localhost URL.
- Open the localhost URL; confirm the header renders.
- Confirm no console errors.
- Design check: app shell follows design.md mood, palette, spacing, and mobile-first single-column rules.

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` starts and prints a localhost URL.
- Opening the URL shows the "HazeSafe Navigator" header and sample-data subtitle.
- The page is a clean single column with the green/grey palette and no console errors.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the app shell renders and dev server runs clean. Do not start Work Card 02.

## Status
Done