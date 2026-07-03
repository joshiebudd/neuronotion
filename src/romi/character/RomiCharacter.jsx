import { useId } from "react";
import {
  CANVAS,
  WINDOW_CIRCLE,
  WINDOW_COLORS,
  BODY_DEFAULT_FILL,
  WINDOW_FIT,
  BODIES,
} from "./bodies";

/*
 * RomiCharacter - the 3-layer Romi variation system, composed live as SVG.
 *
 *   Window     a coloured circle (11 named brand colours, or "none")
 *   Body       one of the 12 Figma body poses, recolourable
 *   Expression one of 45 face SVGs, placed on the body via its face matrix
 *
 * Bodies come from the Figma design system ("Remi Body 1..12") with per-body
 * face matrices derived from each pose's baked default face, so any
 * expression lands at the right position, scale AND rotation for that pose.
 * Inside a window the whole character is scaled up and cropped by the circle
 * (the Figma "Max avatar" look). See README.md for the full system.
 *
 * Usage:
 *   <RomiCharacter expression="07-delighted" body={1} window="mint" className="w-40" />
 *   <RomiCharacter expression="25-sleeping" body={7} window="none" />  // free-floating
 *   <RomiCharacter expression="13-angry" body={3} bodyColor="#ff7b7b" />
 */
export function RomiCharacter({
  expression = "02-grinning",
  body = 1,
  window: windowColor = "mint",
  bodyColor = BODY_DEFAULT_FILL,
  className,
  alt,
  ...props
}) {
  const clipId = useId();
  const pose = BODIES[body] ?? BODIES[1];
  const winFill = windowColor === "none" ? null : (WINDOW_COLORS[windowColor] ?? windowColor);
  const { cx, cy, r } = WINDOW_CIRCLE;
  const D = 2 * r;
  const [bx, by, bw, bh] = pose.bbox;
  const [fx, fy] = pose.face;

  // Bodies live in strip coordinates (~150 units); everything renders on the
  // 1080 canvas. Windowed: scale so the blob overfills the circle and the
  // face lands at the Max-avatar spot. Windowless: centre the blob on the
  // canvas at a standard size.
  let s, tx, ty;
  if (winFill) {
    s = Math.max((WINDOW_FIT.fill.w * D) / bw, (WINDOW_FIT.fill.h * D) / bh);
    tx = (cx - r) + WINDOW_FIT.faceTarget.x * D - s * fx;
    ty = (cy - r) + WINDOW_FIT.faceTarget.y * D - s * fy;
  } else {
    s = 900 / Math.max(bw, bh);
    tx = cx - s * (bx + bw / 2);
    ty = cy - s * (by + bh / 2);
  }
  const placeTransform = `translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s.toFixed(4)})`;

  // Face matrix: maps the 1080x1080 expression canvas onto this body's face
  // (rotation + scale + translation from the pose's baked eye positions).
  const [a, b, c, d, e, f] = pose.m;
  const faceMatrix = `matrix(${a} ${b} ${c} ${d} ${e} ${f})`;

  const label = alt ?? `Romi looking ${expression.replace(/^\d+-/, "").replace(/-/g, " ")}`;

  return (
    <svg
      viewBox={`0 0 ${CANVAS} ${CANVAS}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      className={className}
      {...props}
    >
      {winFill && (
        <>
          <defs>
            <clipPath id={clipId}>
              <circle cx={cx} cy={cy} r={r} />
            </clipPath>
          </defs>
          <circle cx={cx} cy={cy} r={r} fill={winFill} />
        </>
      )}
      <g clipPath={winFill ? `url(#${clipId})` : undefined}>
        <g transform={placeTransform}>
          <path d={pose.d} fill={bodyColor} />
          <image
            href={`/romi/characters/expressions/${expression}.svg`}
            x="0"
            y="0"
            width={CANVAS}
            height={CANVAS}
            transform={faceMatrix}
          />
        </g>
      </g>
    </svg>
  );
}
