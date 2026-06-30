import { cn } from "../../lib/cn";
import { windowSceneSrc } from "../../lib/characters";

/*
 * RomiWindow — Romi peering through a circular window (Playbook p35-36).
 *
 * Renders the designer's finished window composition (one SVG per window
 * colour) as a single image. The blob is already cleanly cropped by the circle
 * and the window colour shows as a crescent behind it, so there is nothing to
 * hand-tune: just pick a colour. This is the source-of-truth crop — use it
 * instead of compositing body + expression over a flat disc.
 *
 *   <RomiWindow color="mint" size={300} />
 *
 * color takes any WINDOWS name: cream | mint | indigo | coral | blue | sky |
 * green | amber | pink | terracotta.
 */
export function RomiWindow({ color = "mint", size = 280, alt, className, style, ...rest }) {
  return (
    <img
      src={windowSceneSrc(color)}
      alt={alt || `Romi peering through a ${color} window`}
      className={cn("block select-none", className)}
      style={{ width: size, height: size, ...style }}
      draggable={false}
      {...rest}
    />
  );
}
