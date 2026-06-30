import { cn } from "../../lib/cn";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] shadow-[var(--romi-shadow-sm)]",
        className
      )}
      {...props}
    />
  );
}
