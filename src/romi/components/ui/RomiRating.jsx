import { Star } from "lucide-react";
import { cn } from "../../lib/cn";

/*
 * RomiRating — the single star-rating treatment used wherever we show social
 * proof. Five amber stars + one consistent line of copy. Used identically in
 * the testimonials section and the closing CTA.
 */
export function RomiRating({ className }) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="flex items-center gap-1.5 text-[var(--romi-color-warning)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} aria-hidden="true" className="h-6 w-6" style={{ fill: "currentColor" }} />
        ))}
      </div>
      <p className="text-[15px] font-semibold text-[var(--romi-color-ink-muted)]">
        4.9/5 Stars from 15,241 ADHDers.
      </p>
    </div>
  );
}
