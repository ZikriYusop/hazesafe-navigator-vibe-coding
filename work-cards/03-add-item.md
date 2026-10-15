# Work Card 03 — Add Item

## Goal

Let the user add a saved route with a form, store it in React state, and render it in a saved-routes list with an empty state when nothing is saved yet.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/02-static-layout.md`

## Files likely touched

- `src/App.jsx`
- `src/components/RouteForm.jsx`
- `src/components/SavedRoutesList.jsx`
- `src/components/SavedRouteCard.jsx`
- `src/components/EmptyState.jsx`

## Instructions for the coding agent

- Add `savedRoutes` state in `App.jsx` (array, starts empty for now).
- `RouteForm.jsx`: a controlled form with a Name field, Start (Point A), and Destination (Point B) prefilled from the planner, plus a Route type (Cleanest/Fastest) mirroring the active toggle. Validate that Name, Start, and Destination are non-empty; show inline error text.
- On submit, generate `id` as `route-${Date.now()}`, append the new route to `savedRoutes`, and reset the form.
- `SavedRouteCard.jsx`: show route name, `Start → Destination`, and a route-type chip.
- `SavedRoutesList.jsx`: renders a labelled list of `SavedRouteCard`, or `EmptyState` when the list is empty.
- `EmptyState.jsx`: honest copy ("No saved routes yet. Plan a route above, then save it.") with guidance, not a fake CTA.
- Keep the form as a card below the planner; full-width primary "Save route" button (min 44px).

## What not to do

- Do not add edit or delete yet.
- Do not touch `localStorage` yet — state only, reload will clear it (that is expected for this card).
- Do not add backend, API, or extra data types.
- Do not add fake testimonials or stats.

## Done when

- The user can fill the form and add a real sample route.
- The new route appears in the saved-routes list immediately.
- The empty state shows before the first route is added and disappears after.
- Form validation blocks empty Name/Start/Destination with inline errors.

## Verification steps

- Load the app; confirm the empty state is visible.
- Add one real sample route (e.g., "Morning school walk", "Block 120" → "Town Park", Cleanest).
- Confirm the card shows name, Start → Destination, and the route-type chip.
- Try submitting with an empty Name; confirm inline error appears.
- Design check: form placement, item card/list style, empty state, and mobile stacking follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- The empty state appears before saving any route.
- Adding a route makes a new card appear with name, Start → Destination, and route type.
- Submitting with an empty Name shows an inline error and does not add a route.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after add works and the list/empty-state behavior is correct. Do not start Work Card 04.

## Status
Done