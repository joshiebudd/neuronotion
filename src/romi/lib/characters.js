/*
 * Romi character registry.
 *
 * The Romi mascot is composed from four interchangeable layers, all drawn on
 * the same 1080x1080 canvas so they stack and register perfectly:
 *
 *   window (optional coloured disc)  ->  body  ->  expression  ->  prop (optional)
 *
 * Pick one of each by NAME and you get a unique Romi. e.g. a slumped body + a
 * weary expression on a mint window = "a tired Romi staring into the void".
 *
 * Asset files live in /public/romi/characters/<category>/. Filenames are
 * number-prefixed (01-laughing.svg) so they keep the original source order /
 * traceability while still being human-readable. Use <RomiCharacter /> to
 * render a composition; this file is just the lookup tables + resolvers.
 */

export const CHAR_BASE = "/romi/characters";

// 45 face-only expressions (eyes + mouth, no body). Names are descriptive
// handles, not gospel — rename freely, the number is the source of truth.
export const EXPRESSIONS = [
  "laughing", "grinning", "loving", "neutral", "meh",
  "unimpressed", "delighted", "content", "surprised", "alarmed",
  "shocked", "sad", "angry", "skeptical", "serene",
  "cheerful", "blissful", "sheepish", "concerned", "winking",
  "wincing", "dismayed", "flustered", "gasping", "sleeping",
  "innocent", "silly", "cheeky", "downcast", "upset",
  "crying", "sobbing", "yawning", "drained", "fed-up",
  "dejected", "weeping", "tense", "glum", "stressed",
  "focused", "smug", "nervous-laugh", "weary", "speechless",
];

// 20 abstract purple blob silhouettes (no face). Posture reads are interpretive.
export const BODIES = [
  "upright", "leaning-right", "slumped", "leaning-back", "compact",
  "reaching", "tall", "relaxed", "turning", "lounging",
  "poised", "glancing", "drooping", "tilting", "tilted",
  "stepping", "planted", "standing", "leaning-left", "proud",
];

// 10 coloured background discs. color = the exact circle fill from the source SVG.
export const WINDOWS = [
  { name: "cream", color: "#fff7ee" },
  { name: "mint", color: "#75e5d4" },
  { name: "indigo", color: "#5d359b" },
  { name: "coral", color: "#ff7b7b" },
  { name: "blue", color: "#76bbff" },
  { name: "sky", color: "#87e3ff" },
  { name: "green", color: "#a1ff9c" },
  { name: "amber", color: "#ffbc69" },
  { name: "pink", color: "#ff9cc1" },
  { name: "terracotta", color: "#e59775" },
];

// Props are objects Romi "holds". Each has 8 positional variants (the prop sits
// in a different spot / hand per variant), so pick by "<type>-<n>" for a precise
// placement, or just "<type>" to take variant 01.
export const PROP_TYPES = ["alarm", "book", "mug", "notepad"];
export const PROP_VARIANTS = 8;

const pad = (n) => String(n).padStart(2, "0");

// "laughing" or 1 or "01" -> "01-laughing.svg"
function resolveNamed(list, value, label) {
  if (value == null) return null;
  // by number
  const asNum = typeof value === "number" ? value : /^\d+$/.test(value) ? Number(value) : null;
  if (asNum != null) {
    const name = list[asNum - 1];
    if (!name) throw new Error(`Romi: no ${label} #${asNum} (1-${list.length})`);
    return `${pad(asNum)}-${name}.svg`;
  }
  // by name
  const idx = list.indexOf(value);
  if (idx === -1) throw new Error(`Romi: unknown ${label} "${value}"`);
  return `${pad(idx + 1)}-${value}.svg`;
}

export function expressionFile(value) {
  return resolveNamed(EXPRESSIONS, value, "expression");
}

export function bodyFile(value) {
  return resolveNamed(BODIES, value, "body");
}

export function windowByName(value) {
  if (value == null) return null;
  if (typeof value === "object") return value; // already a {name,color}
  const win = WINDOWS.find((w) => w.name === value || w.color === value);
  if (!win) throw new Error(`Romi: unknown window "${value}"`);
  return win;
}

// "Romi's window" (Playbook p35-36): the designer's finished compositions where
// Romi peers through a circular window, cleanly cropped by the circle. One SVG
// per window colour (numbered to match WINDOWS above). Use these instead of
// hand-compositing body+expression — they are the source-of-truth crop.
export const WINDOW_SCENE_BASE = `${CHAR_BASE}/window-scenes`;

export function windowSceneFile(value) {
  const win = windowByName(value);
  const idx = WINDOWS.findIndex((w) => w.name === win.name);
  return `${pad(idx + 1)}-${win.name}.svg`;
}

export function windowSceneSrc(value) {
  return `${WINDOW_SCENE_BASE}/${windowSceneFile(value)}`;
}

// "mug" -> {type:"mug", file:"mug-01.svg"} ; "mug-3"/"mug-03" -> variant 03
export function propFile(value) {
  if (value == null) return null;
  const [type, variant] = String(value).split("-");
  if (!PROP_TYPES.includes(type)) throw new Error(`Romi: unknown prop "${value}"`);
  const n = variant ? Number(variant) : 1;
  if (n < 1 || n > PROP_VARIANTS) throw new Error(`Romi: ${type} variant ${n} out of 1-${PROP_VARIANTS}`);
  return { type, file: `${type}-${pad(n)}.svg` };
}

// Full public paths, handy outside the component.
export const charPath = {
  expression: (v) => `${CHAR_BASE}/expressions/${expressionFile(v)}`,
  body: (v) => `${CHAR_BASE}/body-shapes/${bodyFile(v)}`,
  window: (v) => `${CHAR_BASE}/windows/${pad(WINDOWS.findIndex((w) => w.name === windowByName(v).name) + 1)}-${windowByName(v).name}.svg`,
  prop: (v) => {
    const p = propFile(v);
    return p ? `${CHAR_BASE}/props/${p.type}/${p.file}` : null;
  },
};
