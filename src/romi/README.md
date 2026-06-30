# Romi design system

This folder is the isolated home for the rebrand and all new landing pages.

## Structure

- `styles/tokens.css`: Figma-token landing zone, scoped under `.romi-theme`.
- `styles/romi.css`: scoped reset and shared Romi utilities.
- `components/ui`: base primitives such as buttons, badges, and cards.
- `components/layout`: page, section, and container primitives.
- `components/marketing`: reusable landing-page sections.

## Untitled UI React plan

Untitled UI React is currently best treated as a source component library rather
than a package dependency for this repo. This project is on React 18, Tailwind 3,
and mostly JSX, while the current Untitled UI React stack targets newer React,
Tailwind, and TypeScript defaults.

For now, bring components across selectively into this folder and map their
colors, radius, spacing, type, and shadows onto the CSS variables in
`styles/tokens.css`. That lets new pages use the Figma-backed system without
changing legacy Neuro Notion pages.
