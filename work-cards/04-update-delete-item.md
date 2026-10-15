# Work Card 04 — Update / Delete Item

## Goal

Let the user edit an existing saved route and delete a route with a confirm step.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `work-cards/03-add-item.md`

## Files likely touched

- `src/App.jsx`
- `src/components/SavedRoutesList.jsx`
- `src/components/SavedRouteCard.jsx`
- `src/components/RouteForm.jsx`

## Instructions for the coding agent

- Add edit behavior: clicking Edit on a card opens `RouteForm` prefilled with that route's values; submitting updates the matching route in `savedRoutes` and returns the card to view mode.
- Indicate the edit state with the card briefly flashing a soft green background **and** a "Saved" text badge (color plus text, not color alone).
- Add delete behavior: a labelled "Delete" action (destructive styling) that asks for confirmation ("Delete this route?") before removing the route from `savedRoutes`.
- Keep only one edit form open at a time.
- Ensure the primary action changes sensibly: "Save route" when adding, "Save changes" when editing.

## What not to do

- Do not touch `localStorage` yet — state only (reload still clears; persistence is Work Card 05).
- Do not add bulk actions, undo history, or extra data types.
- Do not add backend, API, or auth.

## Done when

- The user can edit a saved route and the card reflects the changes.
- The edited card shows the "Saved" badge after saving.
- The user can delete a route after confirming, and it disappears from the list.
- Cancelling the delete confirm leaves the route untouched.

## Verification steps

- Add a route, click Edit, change the Name and route type, save; confirm the card updates and shows the "Saved" badge.
- Click Delete; confirm the confirm prompt appears; confirm removal.
- Click Delete on another route and cancel; confirm the route remains.
- Delete the last remaining route; confirm the empty state returns.
- Design check: edit state style, delete affordance, confirm step, and mobile stacking follow design.md.

## Localhost test before continuing

After this card, the learner should test:

- Editing a route updates its card and shows a "Saved" badge.
- Deleting a route asks for confirmation, then removes it; cancelling keeps it.
- Deleting the last route brings back the empty state.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after edit and delete both work with the confirm step. Do not start Work Card 05.

## Status
Done