import { cn } from "../../lib/cn";

/*
 * Button — built to the Figma "❖ Design System" Buttons/Button component.
 * Hierarchy: Primary | Secondary | Tertiary | Link color | Link gray
 * Sizes: xs(32) sm(36) md(40) lg(44) xl(48) xxl(70), mapped to the Figma spec.
 * Primary md spec: Brand/600 fill, 16px radius, 14px Circular Medium, white text.
 * Lowercase + legacy aliases kept so existing pages keep working.
 */
const variants = {
  Primary:
    "bg-[var(--romi-color-primary)] text-white shadow-[var(--romi-shadow-xs)] hover:bg-[var(--romi-color-primary-strong)]",
  Secondary:
    "border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)] hover:bg-[var(--romi-color-surface-muted)]",
  Tertiary:
    "bg-transparent text-[var(--romi-color-ink-muted)] hover:bg-[var(--romi-color-surface-muted)] hover:text-[var(--romi-color-ink)]",
  "Link color":
    "bg-transparent !p-0 text-[var(--romi-color-primary)] hover:text-[var(--romi-color-primary-strong)] hover:underline hover:underline-offset-4",
  "Link gray":
    "bg-transparent !p-0 text-[var(--romi-color-ink-muted)] hover:text-[var(--romi-color-ink)] hover:underline hover:underline-offset-4",
};

// Legacy aliases (existing pages reference these)
variants.primary = variants.Primary;
variants.secondary = variants.Secondary;
variants.tertiary = variants.Tertiary;
variants.tertiaryLilac =
  "bg-transparent !px-0 text-[var(--romi-color-primary)] hover:text-[var(--romi-color-primary-strong)] hover:underline hover:underline-offset-4";
variants.subtle =
  "bg-[var(--romi-color-primary-soft)] text-[var(--romi-color-primary-strong)] hover:bg-[var(--romi-color-accent-soft)]";

// Heights + padding + type per Figma size variants
const sizes = {
  xs: "h-8 px-2.5 text-sm",
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3.5 text-sm",
  lg: "h-11 px-4 text-base",
  xl: "h-12 px-[18px] text-base",
  xxl: "h-[70px] px-7 text-lg",
};

export function Button({
  as: Component = "button",
  variant = "Primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-[var(--romi-radius-button)] font-medium leading-5 tracking-normal transition-colors duration-200 [font-family:var(--romi-font-display)] disabled:pointer-events-none disabled:opacity-40",
        sizes[size],
        variants[variant] ?? variants.Primary,
        className
      )}
      {...props}
    />
  );
}
