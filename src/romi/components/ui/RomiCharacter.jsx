import { cn } from "../../lib/cn";
import {
  CHAR_BASE,
  bodyFile,
  expressionFile,
  propFile,
  windowByName,
} from "../../lib/characters";

/*
 * RomiCharacter — composes the mascot from interchangeable layers.
 *
 *   window (optional disc)  ->  body  ->  expression  ->  prop (optional)
 *
 * Every layer is a 1080x1080 SVG, so they all map onto the same square box and
 * register automatically. The window disc matches the source art exactly: a
 * centred circle of radius 39.13% of the box (r=422.54 / 1080). We clip the
 * body + expression to that same circle so the character sits inside the
 * window; the prop sits on top, unclipped, so "held" items can poke past the
 * edge the way they do in the source example set.
 *
 * For Romi "peering through a window" (Playbook p35-36) use the dedicated
 * RomiWindow component, which renders the designer's finished crop directly.
 * This component is for prop-led layer compositions.
 *
 *   <RomiCharacter window="mint" body="slumped" expression="weary" />
 *   <RomiCharacter body="tall" expression="content" prop="mug" size={220} />
 *
 * body / expression accept a name ("slumped") or a number (3). window takes a
 * colour name ("mint"). prop takes "<type>" or "<type>-<variant>" ("mug-03").
 */

// circle(39.13%) == the source window circle (r 422.54 of the 1080 box).
const WINDOW_CLIP = "circle(39.13% at 50% 50%)";
const LAYER = "pointer-events-none absolute inset-0 h-full w-full";

export function RomiCharacter({
  window: windowName = null,
  body = "upright",
  expression = "content",
  prop = null,
  size = 280,
  clip, // defaults to true when a window is set
  alt,
  className,
  style,
  ...rest
}) {
  const win = windowByName(windowName);
  const bodySrc = `${CHAR_BASE}/body-shapes/${bodyFile(body)}`;
  const exprSrc = `${CHAR_BASE}/expressions/${expressionFile(expression)}`;
  const p = propFile(prop);
  const propSrc = p ? `${CHAR_BASE}/props/${p.type}/${p.file}` : null;

  const doClip = clip ?? Boolean(win);

  const label =
    alt ||
    `Romi character: ${body} body, ${expression} expression${
      win ? `, on ${win.name} window` : ""
    }${p ? `, with ${p.type}` : ""}`;

  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {win && (
        <div
          aria-hidden="true"
          className={LAYER}
          style={{ backgroundColor: win.color, clipPath: WINDOW_CLIP }}
        />
      )}

      {/* Character group: clipped to the window circle when one is present. */}
      <div className={LAYER} style={doClip ? { clipPath: WINDOW_CLIP } : undefined}>
        <img src={bodySrc} alt="" aria-hidden="true" className={LAYER} style={{ objectFit: "contain" }} />
        <img src={exprSrc} alt="" aria-hidden="true" className={LAYER} style={{ objectFit: "contain" }} />
      </div>

      {/* Prop sits on top, unclipped, so held items can break the frame. */}
      {propSrc && (
        <img src={propSrc} alt="" aria-hidden="true" className={LAYER} style={{ objectFit: "contain" }} />
      )}
    </div>
  );
}
