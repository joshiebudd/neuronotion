# Romi Character System

Romi is built from **interchangeable layers** that all share the same
`1080×1080` canvas, so any combination stacks and lines up automatically.

```
window (optional disc)  →  body  →  expression  →  prop (optional)
```

Pick one of each by name and you get a unique Romi. Want "a slumped, tired Romi
having a coffee"? `body=slumped` + `expression=weary` + `prop=mug` + a `window`.

## Use it in code

```jsx
import { RomiCharacter } from "../src/romi"; // barrel, same as the marketing sections

<RomiCharacter window="mint" body="slumped" expression="weary" />
<RomiCharacter body="tall" expression="content" prop="mug" size={220} />
<RomiCharacter body="drooping" expression="sleeping" prop="mug-04" window="indigo" />
```

- `body` / `expression` — a name (`"slumped"`) or its number (`3`)
- `window` — a colour name (`"mint"`), or omit for no background
- `prop` — `"mug"` (variant 01) or `"mug-03"` for a specific placement; omit for none
- `size` — pixel size of the square (default 280)
- `clip` — character is clipped to the window circle; defaults on when a window is set

The lookup tables + path helpers live in `src/romi/lib/characters.js`.

## Folders

| Folder | Count | Filename |
| --- | --- | --- |
| `expressions/` | 45 | `NN-name.svg` (face only) |
| `body-shapes/` | 20 | `NN-name.svg` (faceless blob) |
| `windows/` | 10 | `NN-colour.svg` (full preview; the disc colour is what matters) |
| `props/{alarm,book,mug,notepad}/` | 8 each | `type-NN.svg` (8 placement variants) |

The number prefix preserves the original source order. **Names are just handles
— rename any of them in `characters.js` and the system keeps working.**

## Expressions (45)

| # | Name | # | Name | # | Name |
| --- | --- | --- | --- | --- | --- |
| 01 | laughing | 16 | cheerful | 31 | crying |
| 02 | grinning | 17 | blissful | 32 | sobbing |
| 03 | loving | 18 | sheepish | 33 | yawning |
| 04 | neutral | 19 | concerned | 34 | drained |
| 05 | meh | 20 | winking | 35 | fed-up |
| 06 | unimpressed | 21 | wincing | 36 | dejected |
| 07 | delighted | 22 | dismayed | 37 | weeping |
| 08 | content | 23 | flustered | 38 | tense |
| 09 | surprised | 24 | gasping | 39 | glum |
| 10 | alarmed | 25 | sleeping | 40 | stressed |
| 11 | shocked | 26 | innocent | 41 | focused |
| 12 | sad | 27 | silly | 42 | smug |
| 13 | angry | 28 | cheeky | 43 | nervous-laugh |
| 14 | skeptical | 29 | downcast | 44 | weary |
| 15 | serene | 30 | upset | 45 | speechless |

## Body shapes (20)

Abstract purple blobs — the names describe posture/lean and are interpretive.

| # | Name | # | Name |
| --- | --- | --- | --- |
| 01 | upright | 11 | poised |
| 02 | leaning-right | 12 | glancing |
| 03 | slumped | 13 | drooping |
| 04 | leaning-back | 14 | tilting |
| 05 | compact | 15 | tilted |
| 06 | reaching | 16 | stepping |
| 07 | tall | 17 | planted |
| 08 | relaxed | 18 | standing |
| 09 | turning | 19 | leaning-left |
| 10 | lounging | 20 | proud |

## Windows (10)

| # | Name | Colour | # | Name | Colour |
| --- | --- | --- | --- | --- | --- |
| 01 | cream | `#fff7ee` | 06 | sky | `#87e3ff` |
| 02 | mint | `#75e5d4` | 07 | green | `#a1ff9c` |
| 03 | indigo | `#5d359b` | 08 | amber | `#ffbc69` |
| 04 | coral | `#ff7b7b` | 09 | pink | `#ff9cc1` |
| 05 | blue | `#76bbff` | 10 | terracotta | `#e59775` |

`mint` and `indigo` are the exact Romi brand tokens.
