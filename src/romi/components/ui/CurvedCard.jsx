import { cn } from "../../lib/cn";

/*
 * CurvedCard — the ONE reusable card shell used across the landing page.
 * A generously rounded rectangle with a soft outline (the "curved line"), per
 * the Romi Playbook card style. Defaults to a white surface + soft border at
 * the 2xl radius; each section overrides bg / border / padding via className
 * for its context (light beige sections, the indigo testimonial band, the
 * comparison tints). Build once, repeat everywhere.
 */
export function CurvedCard({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={cn(
        "rounded-[var(--romi-radius-2xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)]",
        className
      )}
      {...props}
    />
  );
}
