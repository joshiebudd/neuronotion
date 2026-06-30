import { cn } from "../../lib/cn";

/*
 * Badge — the section eyebrow. A soft rounded pill (consistent 16px curve) with
 * an optional leading dot + label. Two tones so it reads on either cream band:
 *   light -> on the light beige sections (cool-white pill, slate text)
 *   dark  -> on the deep beige sections (lilac pill, purple text)
 * Pass dot={false} to drop the leading dot (e.g. in the rebrand banner).
 * Pass avatar={src} to swap the dot for a circular Romi character window.
 */
const tones = {
  light: "bg-[#F8FAFC] text-[var(--romi-color-ink)]",
  dark: "bg-[#FAF5FF] text-[var(--romi-color-ink)]",
};

export function Badge({ tone = "light", dot = true, avatar, className, children, ...props }) {
  const hasGlyph = Boolean(avatar) || dot;
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
      {avatar ? (
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
