import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  COOKIE_SETTINGS_HASH,
  analyticsAllowed,
  getConsent,
  setConsent,
} from "../../lib/consent";

/*
 * CookieBanner — a small analytics notice in the bottom corner.
 * Shown once on a first visit, and again whenever a "Cookie settings" link
 * (href ending in #cookie-settings) is clicked. Analytics stays on unless the
 * visitor opts out. Carries the romi-theme class itself because it renders
 * outside the page wrapper.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const current = getConsent();
    setAllowed(analyticsAllowed(current));
    setVisible(current === null);

    const onClick = (event) => {
      const link = event.target.closest?.(`a[href$="${COOKIE_SETTINGS_HASH}"]`);
      if (!link) return;
      event.preventDefault();
      setAllowed(analyticsAllowed());
      setVisible(true);
    };
    // Capture phase, so the click is handled before next/link navigates.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!visible) return null;

  const close = () => {
    if (getConsent() === null) setConsent("acknowledged");
    setVisible(false);
  };

  const toggle = () => {
    const next = allowed ? "rejected" : "acknowledged";
    setConsent(next);
    setAllowed(next !== "rejected");
  };

  return (
    <div
      role="region"
      aria-label="Analytics notice"
      className="romi-theme !min-h-0 fixed bottom-4 left-4 right-4 z-[60] mx-auto flex max-w-max items-center gap-3 rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] py-2 pl-4 pr-2 text-[13px] leading-5 text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-md)] sm:right-auto sm:mx-0"
      style={{ fontFamily: "var(--romi-font-body)" }}
    >
      <span>
        {allowed
          ? "We use analytics to improve this site."
          : "Analytics is off for this site."}{" "}
        <button
          type="button"
          onClick={toggle}
          className="font-medium text-[var(--romi-color-primary)] underline underline-offset-4 hover:text-[var(--romi-color-primary-strong)]"
        >
          {allowed ? "Opt out" : "Turn back on"}
        </button>
      </span>
      <button
        type="button"
        onClick={close}
        aria-label="Close analytics notice"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--romi-color-ink-muted)] hover:bg-[var(--romi-color-surface-muted)] hover:text-[var(--romi-color-ink)]"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
