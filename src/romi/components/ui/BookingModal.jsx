import { useEffect, useState } from "react";
import { X } from "lucide-react";

/*
 * BookingModal — a global modal that embeds Josh's Motion booking page.
 * Rendered once (in RomiPage) and opened from anywhere via openBooking().
 * Uses a tiny module-level pub/sub so CTA buttons don't need context wiring.
 */

const MOTION_URL = "https://app.usemotion.com/meet/josh-budd/qvgpsxk";

let listeners = [];
function emit(open) {
  listeners.forEach((fn) => fn(open));
}

export function openBooking() {
  emit(true);
}

export function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = (v) => setOpen(v);
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((x) => x !== fn);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
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
      onClick={() => setOpen(false)}
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
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-[var(--romi-color-border)] bg-white text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-sm)] transition-colors hover:bg-[var(--romi-color-surface-muted)]"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <iframe
          src={MOTION_URL}
          title="Book a call with Josh"
          className="h-full w-full border-0"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
}
