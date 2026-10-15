# Project Brief

## Project Identity

- **Name:** HazeSafe Navigator
- **Type:** Mobile-first Progressive Web App (PWA) — v1 ships as a responsive browser app; installability is a later phase.
- **Concept:** A hyper-local haze-safety navigator that suggests a cleaner (lower PM2.5 exposure) route between two points instead of only the shortest one.

## One-Sentence Concept

HazeSafe Navigator is a mobile-first web app that shows hyper-local haze risk on a mocked neighborhood map and lets users save the cleaner routes they plan to reuse.

## Target User

Pedestrians, cyclists, and outdoor enthusiasts living in master-planned residential townships who go outdoors during the yearly haze season. A secondary user is a parent deciding whether a child's walk to school is safe today.

## User Goal

1. See the local haze risk on a map (which zones are cleaner or dirtier today).
2. Compare a "Fastest Route" against a "Cleanest Route" between Point A and Point B.
3. Save the routes they want to reuse later.

## Build Shape

**Browser-local tool.**

The main value is creating and keeping one kind of data — saved routes — that must remain after a refresh in the same browser.

## Shape Confirmation

- Learner first read the idea as a content-led site.
- Learner corrected it to a **browser-local tool** (wants saved routes that survive refresh).
- Confirmed shape: **Browser-local tool**.

## Version-One Success

Version one is "done enough" when:

- a responsive mock map shows sample PM2.5 micro-zones (heatmap-style overlay),
- a user can set Point A and Point B and flip between a mocked "Fastest" and "Cleanest" route, and
- a user can add, edit, and delete saved routes that survive a page refresh in the same browser (localStorage).

## Now / Later / Never

### Now

- Mobile-first responsive layout (feels like a native app shell).
- Mock map with sample PM2.5 micro-zone overlay (no live map API; drawn with sample/local data).
- Point A → Point B selector with a "Fastest vs Cleanest" toggle using mocked route data.
- Save-route feature: add one real sample route, edit a route, delete a route.
- Persistence via browser `localStorage`; prove a saved route remains after refresh.
- Empty state when no routes are saved, plus a mobile-layout check.

### Later

- AI Safety Summary widget (simulated assistant text based on the chosen route).
- Dashboard metrics: Air Quality, Wind Direction, Tree Density (mocked).
- Simulated Web Push alert when mocked PM2.5 exceeds 50 µg/m³.
- PWA installability (manifest + service worker) — trainer-approved step.
- Real map provider or live AQI data — only with explicit trainer approval.

### Never

- Real map API or secret token (Mapbox/Leaflet tiles with live keys).
- Live AQI / pollution API.
- Real Web Push service.
- Login, accounts, or auth.
- Payments.
- Database, backend, or server.
- Multi-user behavior or sync.
- Multiple data tables / additional data types beyond saved routes.

## Assumptions

- All environmental data (PM2.5, AQI, wind, tree density, routes) is mocked sample data.
- Single user, single browser; no sync across devices.
- "Cleanest Route" logic is simulated for a prototype, not real pollution modeling.
- v1 is proof-of-concept quality, not production safety advice.

## Proof Target

- A GitHub repository with the built app.
- A Vercel deployment (or trainer-accepted fallback proof) showing the live app.
- Evidence that a saved route survives a browser refresh.
- A mobile-width screenshot proving the responsive layout.

## Trainer / Learner Notes

- The original idea asked for Leaflet/Mapbox, a live heatmap, AI text generation, and real push notifications. All are **mocked** in v1 to respect the KDBM Lite browser-local tool guardrails (one data type, no backend, no live APIs, no secret keys).
- Learner corrected the inferred shape from content-led site to browser-local tool because saved routes must persist after refresh.
- Any expansion toward real APIs, PWA install, or extra data types requires explicit trainer approval before the Build Blueprint.