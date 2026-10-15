# Work Card 06 — Review and Fix

## Goal

Run the Review Mirror against the finished app and make the single smallest useful fix.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/01-project-skeleton.md` through `work-cards/05-localstorage-save-refresh.md`

## Files likely touched

- Whichever single file the smallest fix needs.

## Instructions for the coding agent

- Walk the Review Mirror in `build-blueprint.md` and answer each item honestly with evidence.
- Identify exactly one smallest useful fix (e.g., a stray `console.log`, a tap target under 44px, a missing "sample" label, a contrast issue, a horizontal scroll at 360px).
- Apply only that one fix. Do not refactor, redesign, or add features.
- If the mirror passes cleanly with no worthwhile fix, change nothing and say so.

## What not to do

- Do not add features or data types.
- Do not add a backend, API, auth, or PWA features.
- Do not do a broad refactor or restyle.
- Do not fix more than one thing.

## Done when

- The Review Mirror is answered with evidence.
- Exactly one smallest useful fix is applied, or a clean pass is documented.

## Verification steps

- Confirm one data type only, with 4 fields max.
- Confirm add / edit / delete each work and persist.
- Confirm a saved route survives refresh with key `hazesafe_routes`.
- Confirm every mocked value is labelled "sample".
- Confirm no horizontal scroll at 360px; tap targets ≥ 44px; body text ≥ 16px.
- Confirm haze level, route type, and save state use text, not color alone.
- Confirm exactly one primary action per screen; no console errors; no secrets.
- Confirm no fake logos, testimonials, or unlabeled stats.
- Design check: whole UI still matches design.md mood, palette, spacing, and mobile rules.

## Localhost test before continuing

After this card, the learner should test:

- The full flow still works after the fix: add a route, edit it, delete it, refresh, and see saved routes.
- Mobile width still has no horizontal scroll and no cut-off text.
- No console errors remain.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the one fix (or clean pass) and the re-test. Do not start Work Card 07.

## Status
Done