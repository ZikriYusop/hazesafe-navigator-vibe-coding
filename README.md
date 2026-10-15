# HazeSafe Navigator

A mobile-first prototype that shows mocked hyper-local haze risk on a neighborhood map and lets you save the cleaner routes you plan to reuse.

**All environmental data is mocked sample data.** This is a prototype, not real safety advice.

## What it does

- Dashboard chips for Air Quality, Wind Direction, and Tree Density (sample values).
- A hand-drawn SVG neighborhood map with translucent PM2.5 haze zones, each labelled Low / Moderate / High / Unhealthy.
- A route planner: pick Point A and Point B and toggle between a **Fastest** and a **Cleanest** sample route. The Cleanest route visibly avoids the high-pollution zones.
- Saved routes: add, edit, and delete routes. They persist in the same browser via `localStorage` (key `hazesafe_routes`).

## Build shape

Browser-local tool. One data type only (saved routes). No backend, auth, database, or live APIs.

## Getting started

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Scripts

- `npm run dev` — start the Vite dev server.
- `npm run build` — production build into `dist/`.
- `npm run preview` — preview the production build locally.

## Tech

Vite + React (JSX) + Tailwind CSS. Mock map is inline SVG — no map library, token, or network call.

## Data model

```js
{
  id: "route-1728900000000",
  name: "Morning school walk",
  start: "Block 120",
  destination: "Town Park",
  routeType: "Cleanest"
}
```