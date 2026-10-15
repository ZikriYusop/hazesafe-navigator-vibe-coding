# Work Card 07 — GitHub + Vercel Proof

## Goal

Publish the finished app to a GitHub repository and deploy it to Vercel (or produce trainer-accepted fallback proof), with the live URL and evidence recorded.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/06-review-and-fix.md`

## Files likely touched

- `.gitignore` (ensure `node_modules/`, `dist/`, and any local env files are ignored)
- `README.md` (short project description and run steps)
- No app source changes unless a build blocker appears.

## Instructions for the coding agent

- Initialize Git in the project root (do not commit any secrets or `node_modules`).
- Confirm `.gitignore` excludes `node_modules/`, `dist/`, and env files.
- Add a short `README.md`: what the app is, that all data is mocked sample data, and the dev/build commands.
- Commit the project with a clear message.
- Create a GitHub repository and push.
- Deploy to Vercel linked to the GitHub repo; confirm the production URL loads.
- If GitHub or Vercel is unavailable, produce trainer-accepted fallback proof: a local production build (`npm run build`) plus a recorded screen capture and the build output.
- Record the live URL, repo URL, and evidence into `build-status.md`.

## What not to do

- Do not commit `node_modules/`, `dist/`, secrets, or API keys.
- Do not add backend, API, auth, analytics, or PWA features during deploy.
- Do not change app behavior for deployment.
- Do not use force-push or rewrite history.

## Done when

- The app is committed and pushed to GitHub.
- Vercel (or fallback proof) serves the live app.
- The live URL loads the app shell and the saved-routes flow works.
- `build-status.md` records the repo URL, live URL, and evidence.

## Verification steps

- Open the live URL; confirm the app shell loads.
- On the live site: add a route, refresh, and confirm it persists in that browser.
- Confirm the mobile layout is intact at phone width.
- Confirm no `node_modules` or secrets are in the repo.
- Design check: the deployed app matches design.md mood, palette, and mobile rules.

## Localhost test before continuing

After this card, the learner should test:

- The GitHub repo URL opens and shows the project files (no `node_modules`).
- The Vercel (or fallback) URL loads the live HazeSafe Navigator app.
- On the live URL, adding a route and refreshing keeps the route in the same browser.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the repo and live proof are recorded. Planning and the first build loop are complete.

## Status
Not started