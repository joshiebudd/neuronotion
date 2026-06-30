# Romi Figma bridge

Source file: `❖ Design System`
Figma key: `PZUBMk3tq6EuAiSP5jgtDo`
Starting node/page: `1023:36350` (`↳ Colors`)

## Current state

The connected Figma file is an Untitled UI style design system. It does not
currently expose local Figma Variables, but it does expose classic Figma Styles:

- 940 paint styles
- 44 text styles
- 28 effect styles
- Rich component sets for base UI, app UI, and marketing sections

Because there are no local Variables to sync directly, the code bridge maps the
Figma Styles into scoped CSS variables in `styles/tokens.css`.

## Token mapping (canonical: Romi Playbook)

The brand source of truth is the **Romi Playbook** (`/Romi Design Assets/Playbook`),
with the Figma `❖ Design System` file as the digital reference. Romi uses a
**named-token** model, NOT a generic 50-950 ramp. `styles/tokens.css` is the
landing zone; components consume the SEMANTIC aliases, never raw hex.

Primary palette (each with 80/60/40 tints toward white):

- Romi Purple `#BF96FF` -> `--romi-purple` (lead identifier, accents) -> `--romi-color-accent`
- Romi Indigo `#5D359B` -> `--romi-indigo` (accessible CTAs, emphasis) -> `--romi-color-primary`
- Romi Mint `#75E5D4` -> `--romi-mint` (secondary accent, bands) -> `--romi-color-mint`
- Romi Beige `#FFF7EE` -> `--romi-beige` -> `--romi-color-bg`
- Romi Charcoal `#26232C` -> `--romi-charcoal` -> `--romi-color-ink`

Secondary palette (use sparingly): Cherry `#FF7B7B`, Honey `#FFBC69`,
Ocean `#76BBFF`, Sky `#87E3FF`, Leaf `#A1FF9C`, Rhubarb `#FF9CC1`, Coffee `#E59775`.
Gradients: balanced 50/50 linear pairs (`--romi-gradient-*`).

Type (playbook 04): Primary = **Circular** (headlines/CTAs) -> `--romi-font-display`;
Secondary = **Matter** (body) -> `--romi-font-sans`; websafe fallback = Arial.
Both font families are shipped in `public/romi/fonts/` and declared in
`styles/fonts.css`. Headings default to Circular via a base rule in `romi.css`.

## Useful Figma component pages

- Buttons: `1:1183`
  - `Buttons/Button`
  - Sizes: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
  - Hierarchy: `Primary`, `Secondary`, `Tertiary`, `Link color`, `Link gray`
  - State: `Default`, `Hover`, `Focused`, `Disabled`, `Loading`
- Header navigation: `683:17952`
  - Full-width and dropdown navigation, desktop/mobile breakpoints
- Header sections: `739:496`
  - `Hero header section`
  - Hero variants include split image, split form, screen mockup, iPhone mockup,
    card mockup, geometric shapes, color card, and simple text
- Features sections: `736:22481`
  - Alternating layouts, simple icons, icon cards, integrations, tabs, mockups
- CTA sections: `645:15070`
  - Simple, split image, quote, iPhone mockup, screen mockup, card, abstract
- FAQ sections: `282:168`
  - Simple and accordion variants
- Pricing sections: `708:20673`
  - Tier cards, pricing headers, pricing tables
- Footers: `278:13503`
  - Large and small footer variants, light/dark/brand themes

## Build workflow for new landing pages

1. Receive a low-fidelity wireframe or written section list.
2. Translate each section into the closest Figma system pattern.
3. Build code from `src/romi` components only.
4. Add missing reusable components to `src/romi/components`, not legacy
   `components/ui`.
5. Keep each new page wrapped in `RomiPage` so old Neuro Notion pages are not
   affected by rebrand styling.
6. Verify with `npm run lint`, `npm run build`, and a route check.

## Implementation rules

- Treat user wireframes as layout and content direction only. Do not copy their
  colours, borders, or rough annotation shapes.
- Orange boxes and arrows in supplied images are annotations, not design
  elements.
- Use the provided wireframe copy by default unless the user explicitly asks to
  rewrite it.
- Use mapped Romi tokens for colours, radius, type, shadows, and section
  backgrounds. Avoid one-off hex values in components.
- Default heading colour is `--romi-color-ink`; default body text is
  `--romi-color-ink-muted`; brand purple is for emphasis, links, and CTAs.
- Header and hero use `--romi-color-bg` (`#fff7ed`). Alternate following
  sections against `--romi-color-section-alt` when a layered contrast is needed.
- Section boundaries should feel like stacked layers: rounded top or bottom
  corners on the section itself, not unrelated cards around whole sections.
- Use existing `Button` variants for CTAs. If a new hierarchy is needed, add it
  to `components/ui/Button.jsx` and map it to tokens.
- Use a SaaS-style F-pattern for landing-page hero composition: left-aligned
  headline and supporting copy on desktop, compact CTA group underneath, visual
  proof on the right, and proof logos/awards aligned below.
- Awards/social proof should sit in the section flow. Use a desktop row and
  horizontal overflow on mobile without scroll snapping.

## Wireframe input that works well

For each page, provide:

- Page route/name
- Audience and goal
- Section order
- Rough copy, or notes like `headline TBD`
- Assets available, especially product screenshots or founder/customer images
- Preferred Figma pattern if the designer has chosen one

Example:

```txt
Route: /romi-for-coaches
Audience: ADHD coaches
Goal: book demo
Sections: nav, hero with product screenshot, social proof, 3 feature cards,
workflow section, testimonials, pricing teaser, FAQ, final CTA, footer
```
