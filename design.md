# Design Direction

## Design Inspiration URL

- **Fallback chosen:** Apple-like premium minimal (learner could not open getdesign.md; picked fallback #3 from the coach list).
- **URL:** Not applicable (fallback, no getdesign.md address).
- **One-line summary used:** "Premium minimal — generous spacing, clear hierarchy, restrained surfaces, strong mobile feel."
- **Borrowed element:** Layout (learner chose `layout`).

## What We Borrow

- Generous whitespace and a calm single-column rhythm.
- Clear visual hierarchy: one obvious thing to do per screen.
- Restrained surfaces: mostly flat cards on a soft grey background, minimal shadow.
- Confident, large touch targets and a native-app mobile feel.
- Quiet motion (short transitions), nothing flashy.

## What We Do Not Copy

- No Apple logo, brand name, product language, imagery, or exact layout identity.
- No heavy gradients, glossy "shine," or glassmorphism.
- No dense, cluttered screens; no tiny text.
- No bright, saturated accent colors that fight the green/grey palette.
- No fake testimonials, fake partner logos, or invented brand stats.

## Visual Mood

Calm, official, trustworthy. Reads like a health/safety advisory you can rely on: quiet, clear, and honest about being a prototype.

## Layout Rules

- Mobile-first single column; content max-width container centered on larger screens.
- Vertical order on mobile: top bar → dashboard chips → mock map grid → route planner → saved routes list / empty state.
- Screen padding: 16px mobile, 24px tablet+.
- Section spacing: 24px between major blocks; 12–16px inside cards.
- One primary action visible per screen (Save route / Save changes).
- Cards use consistent radius (16px) and 1px soft border; shadow only when elevated (bottom sheet / modal).

## Color / Contrast Rules

Core palette:

| Role | Hex | Use |
| --- | --- | --- |
| Primary green | `#1F6F4A` | Primary buttons, active toggle, key headings |
| Soft green accent | `#8CC9A8` | Chips, highlights, safe-zone touches |
| Surface | `#F5F7F6` | App background |
| Card surface | `#FFFFFF` | Cards, forms |
| Muted grey text | `#6B7B73` | Secondary labels, helper text |
| Ink | `#23302B` | Primary body text |

Contrast rules:

- Body text uses ink `#23302B` on white or surface — passes AA.
- Primary button: white text on `#1F6F4A`.
- Never rely on color alone: every state pairs color with a text label or icon.

PM2.5 heatmap scale (mocked):

| Level | Color | Required label |
| --- | --- | --- |
| Low (good) | Green `#3FA66A` | "Low" |
| Moderate | Yellow `#E4C24A` | "Moderate" |
| High | Orange `#E08A3C` | "High" |
| Very high (unhealthy) | Red `#C0483C` | "Unhealthy" |

The map is a hand-drawn inline SVG neighborhood (roads, blocks, a park, and a canal), styled like a calm printed town map:

- Base: light grey land `#EEF1EF`, blocks `#E2E8E4`, roads white `#FFFFFF` with a grey casing `#D8DED9`; park `#DCEBDF`; canal `#D6E4EC`.
- Haze zones are soft translucent radial patches (60–80% opacity of the level color) overlaid on the base, so streets remain visible beneath them.
- Every zone carries a small pill label with its level word (Low/Moderate/High/Unhealthy) so the map is readable without color perception.
- The active route is a bold `#1F6F4A` line; the inactive alternative is a dashed grey line. Start and destination are labelled circular markers (A/B).
- No satellite imagery, no real place names copied from a provider — invented street/landmark names only.

## Typography Feel

- One clean system sans stack: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- Weights: 600–700 for headings, 400 for body.
- Sizes (mobile-first): body 16px, small/helper 14px, card title 18px, section heading 20px, screen title 24–28px.
- Line height ~1.5 for body; tighter (1.2) for headings.
- No more than three sizes on one screen.

## Component Style

- **Cards:** white, 16px radius, 1px `#E2E8E4` border, 16px padding, no heavy shadow.
- **Buttons:** primary = filled `#1F6F4A`, white text, 12px radius, full-width on mobile, min height 44px. Secondary = outline on `#1F6F4A`. Destructive = outline red text.
- **Toggle (Fastest/Cleanest):** pill segmented control, active segment filled green with label; inactive = grey text.
- **Chips (metrics):** soft green/grey pills with label + value; clearly marked "sample".
- **Inputs:** white, 1px border, 12px radius, visible focus ring (`#1F6F4A`), label above field.

Browser-local tool specifics:

- **Input form placement:** `RouteForm` appears as a card directly below the route planner when adding, and in-place (replacing the card row) when editing. On mobile it can rise as a bottom sheet; on desktop it renders inline.
- **Item card/list style:** each saved route is a `SavedRouteCard` row showing route name, `Start → Destination`, and a route-type chip (Cleanest/Fastest). Rows stack vertically with 12px gaps.
- **Update/mark state style:** edited rows briefly flash a soft green background, plus a "Saved" text badge (color + text, not color alone).
- **Delete affordance:** a clearly labelled "Delete" action on each card; requires a confirm step (`Delete this route?`) before removal. Destructive styling (red outline).
- **Empty state:** centered `EmptyState` card with short honest copy ("No saved routes yet. Plan a route above, then save it.") and one primary action.
- **Refresh proof visibility:** a small, calm line near the list ("Saved in this browser — refresh to confirm") so the persistence test is obvious and honest.
- **Mobile stacking rules:** single column; toggle stays full-width; form fields stack; cards go full-width; no horizontal scroll.

## Mobile Rules

- Design and test at 360–390px width first.
- Single column; nothing side-by-side on phones.
- Minimum tap target 44×44px.
- Minimum body text 16px.
- Full-width primary action pinned within flow (not fixed floating) to avoid overlap.
- Respect safe-area insets at top/bottom.
- Test: no horizontal scroll at 360px; all controls reachable one-handed.

## Accessibility Basics

- Text contrast meets WCAG AA (ink on white, white on primary green).
- Never use color alone for haze level, route type, or save state — always pair with text/icon.
- Visible keyboard focus rings on all interactive elements.
- Form inputs have real `<label>`s and inline error text.
- Buttons use real `<button>` elements with descriptive labels (not icon-only without `aria-label`).
- Toggle exposes state via `aria-pressed` or `role="switch"`.
- Semantic landmarks: header, main, and a labelled list for saved routes.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked as sample.
- No "lorem ipsum" in final proof.
- One clear primary action per screen.
- Readable on phone width.
- Mocked metrics always carry a visible "sample data" label.
- Honest language: no claims that the app gives real safety advice.

## Design Verification Checklist

- [ ] Palette matches the green/grey spec; no off-brand saturated colors.
- [ ] Heatmap zones show both color and a text level label.
- [ ] Exactly one primary action visible per screen.
- [ ] Saved-route card shows name, Start → Destination, and route-type chip.
- [ ] Edit state is indicated with color **and** a "Saved" text badge.
- [ ] Delete requires a confirm step and uses destructive styling.
- [ ] Empty state is present and honest before the first save.
- [ ] Refresh-proof hint is visible near the saved routes list.
- [ ] Layout is single column at 360px with no horizontal scroll.
- [ ] All tap targets ≥ 44px; body text ≥ 16px.
- [ ] Keyboard focus is visible on toggle, form, and card actions.
- [ ] No fake logos, testimonials, or unlabeled stats anywhere.