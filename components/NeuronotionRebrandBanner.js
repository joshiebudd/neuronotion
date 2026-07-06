import Link from "next/link";

/*
 * Rebrand redirect banner for the archived Neuro Notion / Claudia homepage
 * (now served at /neuronotion). A persistent, full-width sticky bar at the
 * bottom that carries the reader over to the new Romi landing (/). Bigger and
 * bolder than the small dismissible pill on the new site, and self-contained
 * (hardcoded Romi brand colours) because this old page is outside the scoped
 * .romi-theme token layer.
 */
export default function NeuronotionRebrandBanner() {
  return (
    <Link
      href="/"
      aria-label="We've since rebranded to Romi. Go to the new site."
      className="group fixed inset-x-0 bottom-0 z-[9999] block no-underline"
    >
      <div
        className="flex flex-col items-center justify-center gap-2.5 px-5 py-4 text-center shadow-[0_-10px_36px_-8px_rgba(15,23,42,0.55)] sm:flex-row sm:gap-4 sm:py-5"
        style={{ background: "linear-gradient(135deg, #46247b 0%, #8659c2 55%, #bf96ff 100%)" }}
      >
        <span className="text-[15px] font-bold leading-snug text-white sm:text-lg">
          We&apos;ve since rebranded to Romi.
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#5d359b] shadow-sm transition-transform group-hover:scale-[1.03] sm:text-base">
          Click here to experience the new feel
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
