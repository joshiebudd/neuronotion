# Romi Character Variation System

Composes the Romi character live from three independent asset layers instead of
baking every combination into images (the old design-system approach was 220
pre-rendered PNGs).

```
Window      coloured circle behind the character (11 named colours, or none)
Body        one of the 12 Figma body poses ("Remi Body 1..12"), recolourable
Expression  the face, one of 45 numbered SVGs, placed via a per-body matrix
```

The visual target is the Figma design system's **"Remi" / "Max avatar"**
components (file `PZUBMk3tq6EuAiSP5jgtDo`, Avatars page, node 18-1350): the
character is BIGGER than the window circle and cropped by it, with the window
colour showing as crescents around the blob silhouette.

## The two ideas that make it work

1. **Per-body face matrices.** The Figma bodies strip
   (`public/romi/characters/remi-bodies-strip.svg`) contains each of the 12
   poses WITH its default face baked in. The generator measures each pose's
   two baked eyes and derives the rigid transform (rotation + scale +
   translation) that maps the 1080x1080 expression canvas onto that pose's
   face. All 45 expression files share one canvas template, so a single
   matrix per body places ANY expression correctly - including the tilt on
   rotated poses.
2. **The window fit.** Inside a window, body + expression scale up together
   (uniformly, so face alignment survives) until the blob overfills the
   circle, positioned so the face centre lands at a fixed spot. One generic
   rule (`WINDOW_FIT` in bodies.js) covers every pose:
   `scale = max(fill.w * D / bboxW, fill.h * D / bboxH)`, then translate so
   the pose's `face` point maps to `faceTarget` (fractions of the diameter D).
   Tuned visually against the design reference; the four numbers apply
   everywhere.

## Files

```
src/romi/character/
  RomiCharacter.jsx        the component
  bodies.js                GENERATED registry: 12 body paths + bboxes + face
                           matrices, window colours, expression names
  generate-registry.mjs    the generator (samples paths, derives matrices)
  README.md                this file

public/romi/characters/
  remi-bodies-strip.svg    the 12 Figma "Remi Body" poses w/ baked faces (SOURCE)
  expressions/*.svg        45 numbered faces, 1080x1080 canvas (01-laughing ...)
  windows/*.svg            10 pre-baked window+character SVGs (legacy/standalone)
  bodies/*.svg             20 Illustrator blob exports (legacy, unused by the
                           registry - the Figma strip is canonical)
```

## Usage

```jsx
import { RomiCharacter } from "../../character/RomiCharacter";

<RomiCharacter expression="07-delighted" body={1} window="mint" className="w-40" />
<RomiCharacter expression="25-sleeping" body={7} window="none" />   // free-floating
<RomiCharacter expression="13-angry" body={3} bodyColor="#ff7b7b" /> // recoloured
```

| prop         | default        | values                                                              |
| ------------ | -------------- | ------------------------------------------------------------------- |
| `expression` | `"02-grinning"`| any name in `EXPRESSIONS` (bodies.js) = filename minus `.svg`       |
| `body`       | `1`            | `1`-`12` (Figma "Body N")                                           |
| `window`     | `"mint"`       | `cream mint indigo coral blue sky green amber pink rhubarb terracotta`, `"none"`, or any raw CSS colour |
| `bodyColor`  | `#b289df`      | any CSS colour (Brand/400 per the Figma design system)              |
| `alt`        | auto           | accessible label, defaults to `Romi looking {expression}`           |

## How each layer works

- **Window**: a plain `<circle>` (cx 540, cy 540, r 422.5394 on the 1080
  canvas). When set, body + expression get the WINDOW_FIT scale-up and are
  clipped to the circle. `window="none"` skips circle, clip and fit; the blob
  renders centred at a standard size.
- **Body**: single `<path>` from `bodies.js` (strip coordinates, ~150 units),
  recolourable via `bodyColor`. Paths + fills come straight from Figma.
- **Expression**: referenced as `<image href=".../{name}.svg">` with the
  body's face matrix. Kept as external files (not inlined) because each file
  carries its own `<style>` classes whose meanings differ between files -
  inlining two on one page would collide. Trade-off: expressions cannot be
  recoloured at runtime (they don't need to be: `#5d359b` features,
  `#ff7b7b`/`#9d6dd8` accents, white).

## Expression naming

The 45 files are numbered to match the Figma "Remi Faces" `Expression=N`
variants, with a readable suffix: `01-laughing`, `07-delighted`,
`19-concerned`, `25-sleeping` ... `45-speechless`. The raw Illustrator
exports with loose names ("cheeky laugh.svg" etc.) live in
`/Users/joshbudd/Neuro/Media/Romi Design Assets/Characters/Expressions/SVG/`
and are byte-identical - the numbered set in `public` is canonical.

## Regenerating bodies.js

```
cd <repo root>
node src/romi/character/generate-registry.mjs   # writes /tmp/remi-registry.json
```

Then re-emit the `BODIES` block from that JSON (see the generator; it samples
every path with a built-in bezier sampler - no browser or deps needed). The
reference for eye positions is `02-grinning.svg` (round-dot eyes). If Figma
ships new bodies, re-export the strip (each pose must include its baked
default face), replace `remi-bodies-strip.svg`, and re-run.

## Old system note

The old design-system RomiAvatar (`Codebases/romi-design-system`) uses 220
baked PNGs with its own expression naming. This system is name-compatible
with NEITHER the PNGs nor the loose Illustrator names - the numbered Figma
scheme above is the one to use.
