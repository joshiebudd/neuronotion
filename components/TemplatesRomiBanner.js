import Link from "next/link";

/*
 * Romi on-ramp banner for the legacy /templates page. That page still earns
 * search traffic for "adhd notion template" (GSC, Aug 2026), so instead of
 * retiring it we keep it live and hand those visitors over to Romi. Same
 * self-contained sticky-bar pattern as NeuronotionRebrandBanner (this old page
 * sits outside the scoped .romi-theme token layer, so colours are hardcoded).
 */
export default function TemplatesRomiBanner() {
  return (
    <Link
      href="/"
      aria-label="We built Romi, the ADHD companion app, from these templates. Meet Romi."
      className="group fixed inset-x-0 bottom-0 z-[9999] block no-underline"
    >
      <div
        className="flex flex-col items-center justify-center gap-2.5 px-5 py-4 text-center shadow-[0_-10px_36px_-8px_rgba(15,23,42,0.55)] sm:flex-row sm:gap-4 sm:py-5"
        style={{ background: "linear-gradient(135deg, #46247b 0%, #8659c2 55%, #bf96ff 100%)" }}
      >
        <span className="text-[15px] font-bold leading-snug text-white sm:text-lg">
          Like the templates? We turned them into Romi, an ADHD companion app.
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#5d359b] shadow-sm transition-transform group-hover:scale-[1.03] sm:text-base">
          Meet Romi
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
