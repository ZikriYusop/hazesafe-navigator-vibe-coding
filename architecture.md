# Architecture

## Build Shape

**Browser-local tool.** The app creates and keeps exactly one kind of data — saved routes — that must survive a page refresh in the same browser via `localStorage`. No backend, no auth, no live APIs.

## Stack Decision

| Layer | Choice | Why |
| --- | --- | --- |
| Build tool | Vite | Fast dev server, beginner-friendly, default in KDBM Lite |
| UI library | React (JSX, `.jsx` files) | Component model, confirmed by learner |
| Styling | Tailwind CSS | Learner chose utilities for faster responsive styling |
| Persistence | Browser `localStorage` | Required by confirmed browser-local tool shape |
| Mock map | Hand-drawn inline-SVG neighborhood (roads, blocks, park, canal) + PM2.5 zone + route overlays | No live map API / token allowed; still looks like a real map |
| Routing | Two hardcoded sample paths toggled by a switch | Simulated, reliable, no live routing service |

## Structure Overview

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
│  ├─ components/
│  │  ├─ AppShell.jsx          # mobile-first frame + bottom nav
│  │  ├─ DashboardHeader.jsx   # mocked AQI / wind / tree density chips
│  │  ├─ MockMapGrid.jsx       # CSS grid heatmap of PM2.5 micro-zones
│  │  ├─ RoutePlanner.jsx      # Point A, Point B, Fastest/Cleanest toggle
│  │  ├─ SavedRoutesList.jsx   # list + edit/delete controls
│  │  ├─ SavedRouteCard.jsx    # single saved-route row
│  │  ├─ RouteForm.jsx         # add/edit form (name, A, B, route type)
│  │  └─ EmptyState.jsx        # shown when no routes are saved
│  └─ lib/
│     ├─ storage.js            # load/save helpers for localStorage
│     └─ sampleData.js         # mocked zones + two sample route paths
```

## Component Map

- `App` — holds saved-routes state, wires `lib/storage.js`, passes handlers down.
- `AppShell` — mobile-first layout wrapper; owns the top bar and optional bottom nav.
- `DashboardHeader` — read-only mocked metrics (Air Quality, Wind Direction, Tree Density) clearly labelled as sample.
- `MockMapGrid` — renders the SVG neighborhood map (roads, blocks, park, canal) with mocked PM2.5 zone overlays; draws the active route path so the Cleanest route visibly detours around high-pollution zones.
- `RoutePlanner` — Point A / Point B selectors and the Fastest↔Cleanest toggle; reads from `sampleData.js`.
- `SavedRouteCard` — displays one saved route with Edit and Delete actions.
- `SavedRoutesList` — maps saved routes to cards; renders `EmptyState` when the list is empty.
- `RouteForm` — controlled form for add and edit; validates required fields.
- `EmptyState` — friendly prompt shown before the first route is saved.

## Data / State Model

One data type: **Saved Route** (4 fields + id).

```js
{
  id: "route-1728900000000",   // generated on add
  name: "Morning school walk",
  start: "Block 120",
  destination: "Town Park",
  routeType: "Cleanest"        // "Cleanest" | "Fastest"
}
```

State lives in `App.jsx` as a single array `savedRoutes`. Mocked map geometry, zone data, and the sample path definitions live in `lib/sampleData.js` and are **not** persisted.

Map data shape (all viewBox coordinates, no lat/lng, no network):

- `roads` — `[{ id, points: "x,y x,y ...", kind: "main" | "street" }]`
- `landmarks` — `[{ id, x, y, label, kind: "park" | "canal" | "block" }]`
- `zones` — `[{ id, cx, cy, r, level, pm25 }]` rendered as soft radial haze patches
- `routePaths` — each path is `{ label, distance, duration, points: "x,y x,y ..." }` plus a `dangerZoneIds` list it passes near

## Storage Logic

- Key: `hazesafe_routes`
- Store: `localStorage.setItem("hazesafe_routes", JSON.stringify(savedRoutes))`
- Load: read + `JSON.parse` on mount, with a safe fallback to `[]` if missing or corrupt.
- Every add / edit / delete writes the full array back to `localStorage`.
- Wrap reads/writes in try/catch so a blocked or full storage never crashes the UI.

Helpers in `lib/storage.js`:

- `loadRoutes()` → returns array or `[]`
- `saveRoutes(routes)` → persists array, returns boolean success

## User Flow

1. App loads → `loadRoutes()` fills state (or empty array).
2. Dashboard header shows mocked sample metrics.
3. User explores the mock heatmap grid.
4. User sets Point A and Point B, then toggles Fastest ↔ Cleanest to see the two sample paths.
5. User taps "Save this route" → `RouteForm` opens prefilled with A, B, and the active route type → adds Name → save.
6. New route appears in `SavedRoutesList`; `localStorage` is updated.
7. User edits a route inline or deletes it (with confirm); storage updates.
8. User refreshes the page → saved routes reappear (persistence proof).
9. If no routes exist, `EmptyState` guides the first save.

## File Expectations

- Existing starter files (`START_HERE.md`, `prompts/`, `work-cards/`, `templates/`) remain untouched.
- Plan files updated: `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`, `work-cards/*.md`.
- App code is created only during the Build phase, one work card at a time.

## Constraints

- Mobile-first responsive layout; must look correct at ~360px width.
- One data type only (saved routes); no additional tables or entities.
- 4 fields per item maximum (name, start, destination, route type).
- All environmental data is mocked and clearly labelled as sample.
- No secret keys or tokens committed anywhere.

## Technical Non-Goals

- No real map provider (Leaflet/Mapbox) or map token.
- No live AQI / pollution API.
- No real Web Push service.
- No login, auth, accounts, or multi-user sync.
- No payments.
- No database, backend, or server.
- No uploads, admin systems, or extra data types.

## Verification Notes

- `localStorage` round-trip: add a route → refresh → route still present (key `hazesafe_routes`).
- Add / edit / delete each persist and re-render correctly.
- Empty state renders when `hazesafe_routes` is absent or `[]`.
- Mobile check at 360–390px width: no horizontal scroll, tappable targets.
- Corrupt/absent storage value falls back to `[]` without a crash.
- Build and dev server run clean; no console errors.

## Deferred (Later — needs trainer approval)

- AI Safety Summary widget (simulated text).
- Dashboard metrics beyond sample chips (wind/tree models).
- Simulated Web Push alert at PM2.5 > 50.
- PWA installability (manifest + service worker).
- Any real API integration.