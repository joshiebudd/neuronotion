import { useEffect, useState } from "react";
import { X } from "lucide-react";

/*
 * BookingModal — a global modal that embeds Josh's Motion booking page.
 * Rendered once (in RomiPage) and opened from anywhere via openBooking().
 * Uses a tiny module-level pub/sub so CTA buttons don't need context wiring.
 *
 * openBooking() opens the default (general) call. openBooking(url) opens a
 * specific Motion booking page — e.g. the clinic discovery call on the clinics
 * page — without any extra wiring.
 */

const DEFAULT_MOTION_URL = "https://app.usemotion.com/meet/josh-budd/qvgpsxk";

let listeners = [];
function emit(url) {
  listeners.forEach((fn) => fn(url));
}

export function openBooking(url = DEFAULT_MOTION_URL) {
  emit(url);
}

export function BookingModal() {
  // null when closed; the Motion URL string when open.
  const [url, setUrl] = useState(null);
  const open = url !== null;
  const close = () => setUrl(null);

  useEffect(() => {
    const fn = (next) => setUrl(next);
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((x) => x !== fn);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4"
      style={{ backgroundColor: "rgba(38, 19, 64, 0.55)", backdropFilter: "blur(2px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
    >
      <div
        className="relative h-[90vh] max-h-[880px] w-full max-w-[840px] overflow-hidden rounded-[22px] bg-white shadow-[0_40px_80px_-24px_rgba(15,23,42,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-[var(--romi-color-border)] bg-white text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-sm)] transition-colors hover:bg-[var(--romi-color-surface-muted)]"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <iframe
          src={url}
          title="Book a call with Josh"
          className="h-full w-full border-0"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
}
