import { cn } from "../../lib/cn";
import { RomiCharacter } from "../../character/RomiCharacter";

/*
 * Badge — the section eyebrow. A soft rounded pill (consistent 16px curve) with
 * an optional leading glyph + label. Two tones so it reads on either cream band:
 *   light -> on the light beige sections (cool-white pill, slate text)
 *   dark  -> on the deep beige sections (lilac pill, purple text)
 * Glyph options (first match wins):
 *   character={{ body, expression, window }} -> a live Romi character (window
 *     defaults to mint) — use this to vary the little face per section
 *   avatar={src}  -> a circular image (e.g. a baked window SVG)
 *   dot           -> a plain mint dot (default)
 * Pass dot={false} with no avatar/character to drop the glyph entirely.
 */
const tones = {
  light: "bg-[#F8FAFC] text-[var(--romi-color-ink)]",
  dark: "bg-[#FAF5FF] text-[var(--romi-color-ink)]",
};

export function Badge({ tone = "light", dot = true, avatar, character, className, children, ...props }) {
  const hasGlyph = Boolean(avatar) || Boolean(character) || dot;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-[16px] py-2.5 pr-5 text-[1.2rem] font-medium leading-tight [font-family:var(--romi-font-display)]",
        hasGlyph ? "pl-3" : "pl-5",
        tones[tone] ?? tones.light,
        className
      )}
      {...props}
    >
      {character ? (
        <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full">
          <RomiCharacter
            window={character.window ?? "mint"}
            body={character.body}
            expression={character.expression}
            viewBox="117 117 846 846"
            className="h-full w-full"
          />
        </span>
      ) : avatar ? (
        <img
          src={avatar}
          alt=""
          aria-hidden="true"
          className="h-7 w-7 shrink-0 rounded-full object-cover"
        />
      ) : dot ? (
        <span aria-hidden="true" className="h-7 w-7 shrink-0 rounded-full bg-[var(--romi-mint)]" />
      ) : null}
      {children}
    </span>
  );
}
