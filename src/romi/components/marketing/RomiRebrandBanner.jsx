import { useState } from "react";
import { X } from "lucide-react";

/*
 * Rebrand announcement — a small dismissible floating pill at the bottom of the
 * page. Chip carries the old name (de-emphasised); the line leads with Romi.
 */
export function RomiRebrandBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 md:bottom-6">
      <div className="pointer-events-auto flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-[16px] bg-[#F9EDF9] py-1 pl-1 pr-2 shadow-[0_16px_40px_-16px_rgb(38_19_64_/_0.35)]">
        <span className="hidden shrink-0 items-center rounded-[16px] bg-[#DFC7EE] px-2.5 py-0.5 text-sm font-medium leading-5 text-[#7247AE] [font-family:var(--romi-font-display)] sm:inline-flex">
          Formerly Claudia by Neuro
        </span>
        <p className="flex items-center gap-1 whitespace-nowrap text-sm font-medium leading-5 text-[#7247AE]">
          <span>We&apos;ve rebranded to</span>
          <span className="font-semibold text-[#7247AE]">Romi</span>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[#9D6DD8] transition-colors hover:bg-[#7247AE]/10"
        >
          <X aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
