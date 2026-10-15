# Build Blueprint

## Source Files

- `project-brief.md` — identity, user, scope, build shape, success target.
- `architecture.md` — stack, structure, data model, storage, non-goals.
- `design.md` — design direction, palette, layout, mobile, accessibility, anti-slop.

This blueprint is the single builder-ready specification. When it conflicts with chat, this file wins.

## Project Identity

- **Name:** HazeSafe Navigator
- **Kind:** Mobile-first Progressive Web App (PWA) — v1 ships as a responsive browser app; installability is deferred.
- **Concept:** A hyper-local haze-safety navigator that shows mocked PM2.5 micro-zones on a neighborhood map, compares a Cleanest vs Fastest route, and saves the routes a user plans to reuse.

## Build Shape

**Browser-local tool.** One data type — saved routes — persisted in the same browser via `localStorage`. No backend, no auth, no live APIs.

## Version-One Promise

A person can open the app on a phone, see mocked haze zones on a grid map, switch between a Cleanest and Fastest sample route between Point A and Point B, and add/edit/delete saved routes that still exist after a page refresh in the same browser.

## Scope Lock

### Now

- Mobile-first responsive app shell (top bar, calm single-column layout).
- Mocked dashboard chips (Air Quality, Wind Direction, Tree Density) clearly labelled as sample.
- Mock map as a hand-drawn inline-SVG neighborhood (roads, blocks, park, canal) with soft translucent PM2.5 haze patches and a labelled route overlay.
- Point A / Point B selectors and a Fastest ↔ Cleanest segmented toggle using two hardcoded sample paths, where the Cleanest path visibly detours around high-pollution zones.
- Save-route CRUD: add (with one real sample item), edit, delete (with confirm).
- Persistence via `localStorage` key `hazesafe_routes`; prove a saved route survives refresh.
- Empty state before the first save; refresh-proof hint near the list.
- Mobile check at 360–390px.

### Later

- AI Safety Summary widget (simulated text).
- Dashboard metrics beyond static sample chips.
- Simulated Web Push alert when mocked PM2.5 > 50 µg/m³.
- PWA installability (manifest + service worker).
- Any real map provider or live AQI data — only with explicit trainer approval.

### Never

- Real map API or secret token.
- Live AQI / pollution API.
- Real Web Push service.
- Login, accounts, auth, multi-user sync.
- Payments.
- Database, backend, server.
- Uploads, admin systems, extra data types beyond saved routes.

## Architecture Summary

- **Build tool:** Vite.
- **UI:** React with JSX (`.jsx`).
- **Styling:** Tailwind CSS.
- **State:** one `savedRoutes` array in `App.jsx`.
- **Persistence:** `localStorage` via `src/lib/storage.js`.
- **Mock data:** `src/lib/sampleData.js` (zones + two sample route paths).
- **Mock map:** inline SVG neighborhood (roads, blocks, park, canal) with translucent haze-zone overlays; route path drawn as a bold line over it.
- **Routing:** two hardcoded sample paths toggled by a switch — no routing service.

Component map:

- `App` — owns state, wiring, persistence.
- `AppShell` — mobile-first frame + top bar.
- `DashboardHeader` — mocked metric chips.
- `MockMapGrid` — heatmap of PM2.5 zones; highlights active route.
- `RoutePlanner` — Point A / Point B + Fastest/Cleanest toggle.
- `SavedRoutesList` / `SavedRouteCard` — saved routes with edit/delete.
- `RouteForm` — add/edit form.
- `EmptyState` — shown when no routes exist.

## Data / State / Storage Rules

One data type: **Saved Route**.

```js
{
  id: "route-1728900000000",   // string, generated on add
  name: "Morning school walk", // required, non-empty
  start: "Block 120",          // required, non-empty
  destination: "Town Park",    // required, non-empty
  routeType: "Cleanest"        // "Cleanest" | "Fastest"
}
```

Rules:

- Maximum 4 content fields per item.
- `localStorage` key: `hazesafe_routes`.
- Write the full array on every add / edit / delete.
- On load, parse safely; fall back to `[]` if missing or corrupt; wrap in try/catch.
- `lib/storage.js` exposes `loadRoutes()` and `saveRoutes(routes)`.
- Mock zone and route-path data are **not** persisted.
- No IDs from a server; generate locally (e.g., `route-${Date.now()}`).

## Design Direction Summary

- **Inspiration:** Apple-like premium minimal (fallback choice). **Borrow:** layout — generous spacing, clear hierarchy, restrained surfaces, strong mobile feel, quiet transitions.
- **Do not copy:** Apple branding, logos, product language, imagery, or exact identity; no heavy gradients, glassmorphism, or glossy shine; no cluttered dense layouts; no tiny text; no off-brand saturated colors.
- **Mood:** calm, official, trustworthy.
- **Palette:** primary green `#1F6F4A`; soft green accent `#8CC9A8`; surface `#F5F7F6`; card white `#FFFFFF`; muted grey text `#6B7B73`; ink `#23302B`. Border `#E2E8E4`.
- **Heatmap:** soft translucent zone patches, green `#3FA66A` (Low) → yellow `#E4C24A` (Moderate) → orange `#E08A3C` (High) → red `#C0483C` (Unhealthy). Every zone shows a text level label. Map base is a calm grey/white printed-map style.
- **Typography:** system sans stack; body 16px, helper 14px, card title 18px, section heading 20px, screen title 24–28px.
- **Components:** 16px-radius white cards with 1px border; full-width primary button (min 44px, filled green); segmented pill toggle; labelled inputs with visible focus ring.
- **Mobile:** single column, stacks at ≤640px, 44px tap targets, 16px min body text, no horizontal scroll at 360px.
- **Accessibility:** AA contrast; never color-alone for level/route/save state; visible focus; real labels; semantic landmarks.
- **Anti-slop:** no fake logos, testimonials, or unlabeled stats; no lorem ipsum; one primary action per screen; mocked data always labelled sample.

## Implementation Rules

- One Work Card at a time; implement only the current card.
- Keep components small and named exactly as in the Architecture Summary.
- Use Tailwind utility classes; put shared colors as Tailwind theme tokens where practical.
- No comments explaining obvious code unless asked.
- No `console.log` left in final proof.
- Keep all environmental values mocked; label them "Sample data".
- Never commit secrets, tokens, or keys.
- Mobile-first: build and check at 360px before larger widths.
- Preserve starter files (`START_HERE.md`, `prompts/`, `work-cards/00-setup-gate.md`, `templates/`).

## File and Folder Expectations

App code is created only during the Build phase:

```
hazesafe-navigator/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ components/   (AppShell, DashboardHeader, MockMapGrid, RoutePlanner,
│  │                 SavedRoutesList, SavedRouteCard, RouteForm, EmptyState)
│  └─ lib/          (storage.js, sampleData.js)
```

Planning files already written: `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`.

## Work Card Plan

Browser-local tool pattern:

1. `work-cards/01-project-skeleton.md` — scaffold Vite + React + Tailwind; app shell renders.
2. `work-cards/02-static-layout.md` — dashboard chips, mock map grid, planner UI (static).
3. `work-cards/03-add-item.md` — route form + add a saved route (in memory).
4. `work-cards/04-update-delete-item.md` — edit and delete saved routes.
5. `work-cards/05-localstorage-save-refresh.md` — persist to `localStorage`; refresh proof.
6. `work-cards/06-review-and-fix.md` — review mirror; smallest useful fix.
7. `work-cards/07-github-vercel-proof.md` — GitHub repo + Vercel (or fallback) proof.

## Review Mirror

Run after Work Card 05 (and again at 06):

- Does the app still do exactly what the Version-One Promise says — nothing more?
- Is there exactly one saved-routes data type and 4 fields max?
- Does add / edit / delete each work and persist?
- Does a saved route survive refresh with key `hazesafe_routes`?
- Is every mocked value labelled as sample?
- Is the layout clean at 360px with no horizontal scroll?
- Are haze level, route type, and save state conveyed with text, not color alone?
- Is there exactly one primary action per screen?
- Any console errors, leftover logs, or secrets? Are any fake logos/testimonials/stats present?

## Proof Ladder

1. **Local proof:** `npm run dev` runs clean; app shell and features work at 360px.
2. **Persistence proof:** add a route → refresh → route still present (screenshot).
3. **Mobile proof:** screenshot at phone width showing the full flow.
4. **Repo proof:** GitHub repository with the built app.
5. **Deploy proof:** Vercel deployment (or trainer-accepted fallback) showing the live app.
6. **Honesty proof:** mocked data clearly labelled; no invented claims.

## 60-Second Explanation Template

"HazeSafe Navigator is a mobile-first web app for people walking or cycling in haze-prone townships. Standard weather apps show one city-wide number; this shows mocked hyper-local PM2.5 zones on a simple grid map and lets you compare a Cleanest versus Fastest route between two points. You can save routes you want to reuse, and they stay saved in your browser after a refresh. It's a prototype — all environmental data is mocked and it's not real safety advice."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing anything.
- Implement **only** the current work card; do not jump ahead.
- Stop after completing the card's verification steps.
- Update `build-status.md` after each work card.
- Do not add backend, auth, database, or API unless this blueprint explicitly allows it.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers.
- Apply the **browser-local tool** guardrails: one data type, add/update/delete, `localStorage`, refresh persistence, empty-state and mobile checks.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
- Do not implement a Work Card before the learner says `Start Work Card 01`.
- Keep all environmental data mocked and labelled as sample.