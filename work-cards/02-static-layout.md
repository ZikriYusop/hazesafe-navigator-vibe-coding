# Work Card 02 — Static Layout

## Goal

Build the static, mobile-first UI for the dashboard chips, the mock PM2.5 heatmap grid, and the route planner (Point A, Point B, Fastest/Cleanest toggle) using mock data — no saving yet.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/01-project-skeleton.md`

## Files likely touched

- `src/App.jsx`
- `src/lib/sampleData.js`
- `src/components/DashboardHeader.jsx`
- `src/components/MockMapGrid.jsx`
- `src/components/RoutePlanner.jsx`

## Instructions for the coding agent

- Create `src/lib/sampleData.js` with:
  - a mocked PM2.5 zone list (e.g., a grid of cells each with an id, level, and PM2.5 value),
  - Point A / Point B option labels,
  - two hardcoded sample route paths (Fastest and Cleanest), each as a sequence of zone ids.
- `DashboardHeader.jsx`: metric chips for Air Quality, Wind Direction, and Tree Density using static sample values; each chip visibly labelled "Sample data".
- `MockMapGrid.jsx`: render the zones as a CSS grid of colored cells using the heatmap scale (green/yellow/orange/red). Every cell shows a text level label (Low/Moderate/High/Unhealthy). Render the active route path as a highlighted cell sequence or a light SVG overline.
- `RoutePlanner.jsx`: two selectors for Point A and Point B (use the sample options), and a segmented pill toggle for Fastest ↔ Cleanest that switches which sample path is highlighted. Show a short mocked route summary (distance/time) for the active path.
- Keep everything single-column on mobile; the grid may shrink but must not scroll horizontally.
- Add a small "Sample data — not real air quality" note near the dashboard.

## What not to do

- Do not add save, edit, or delete yet.
- Do not touch `localStorage` yet.
- Do not add a real map library, geolocation, or any API.
- Do not add PWA features.

## Done when

- The dashboard chips, heatmap grid, and route planner all render on the page.
- Every heatmap cell shows color **and** a text level label.
- The Fastest/Cleanest toggle visibly changes which path is highlighted.
- The layout is single column at mobile width with no horizontal scroll.

## Verification steps

- Open the app; confirm chips, grid, and planner are all visible.
- Toggle Fastest ↔ Cleanest and confirm the highlighted path changes and the mocked summary updates.
- Confirm heatmap cells show both color and text labels.
- Confirm all mocked values carry a "sample" label.
- Design check: item cards/chips, toggle style, spacing, palette, and mobile stacking follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- The dashboard chips, mock heatmap grid, and route planner all appear on the page.
- Toggling Fastest/Cleanest changes the highlighted path and the mocked route summary.
- Every haze cell shows a text level, not just color, and mobile width has no horizontal scroll.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the static layout renders and the toggle works visually. Do not start Work Card 03.

## Status
Done