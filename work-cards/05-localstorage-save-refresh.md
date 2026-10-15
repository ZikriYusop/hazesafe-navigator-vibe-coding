# Work Card 05 — localStorage Save + Refresh

## Goal

Persist saved routes to browser `localStorage` so they survive a page refresh, and prove it.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/04-update-delete-item.md`

## Files likely touched

- `src/lib/storage.js`
- `src/App.jsx`
- `src/components/SavedRoutesList.jsx`

## Instructions for the coding agent

- Create `src/lib/storage.js` with two helpers:
  - `loadRoutes()` — read key `hazesafe_routes`, `JSON.parse`, and return the array; return `[]` if the key is missing or the value is corrupt. Wrap in try/catch.
  - `saveRoutes(routes)` — `JSON.stringify` and write key `hazesafe_routes`; return success boolean. Wrap in try/catch.
- In `App.jsx`, initialize `savedRoutes` from `loadRoutes()` (lazy initial state), and call `saveRoutes()` whenever the array changes (add, edit, delete).
- Add a small, calm hint near the list: "Saved in this browser — refresh to confirm."
- Ensure a corrupt or absent stored value falls back to `[]` without crashing.

## What not to do

- Do not add a backend, database, or any server-side storage.
- Do not add sync, accounts, or multi-user behavior.
- Do not store anything other than the saved-routes array.
- Do not add extra data types or fields beyond the 4-field model.

## Done when

- Adding, editing, and deleting a route each write to `localStorage` under `hazesafe_routes`.
- After a full page refresh, previously saved routes reappear.
- Missing or corrupt storage data loads as an empty list without errors.

## Verification steps

- Add two routes; open DevTools → Application → Local Storage; confirm `hazesafe_routes` holds both as JSON.
- Refresh the page; confirm both routes still appear.
- Delete one route; refresh; confirm it stays deleted.
- In DevTools, set `hazesafe_routes` to invalid text `xyz`; reload; confirm the app shows the empty state instead of crashing.
- Design check: refresh-proof hint visibility and saved-routes list style follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- Add a route, refresh the browser, and it still appears.
- Edit a route, refresh, and the change persists; delete a route, refresh, and it stays deleted.
- Setting `hazesafe_routes` to invalid text and reloading shows the empty state with no crash.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after refresh persistence is proven. Do not start Work Card 06.

## Status
Done