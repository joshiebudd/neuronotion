import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getConsent, setConsent } from "../../lib/consent";

/*
 * CookieBanner — asks once whether romiadhd.com may use analytics cookies.
 * Shown until the visitor accepts or rejects; the choice is stored in
 * localStorage (see lib/consent). Built on Romi design tokens.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-[560px] rounded-[var(--romi-radius-xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] p-5 shadow-[var(--romi-shadow-lg)] md:p-6"
    >
      <p
        className="text-sm leading-6 text-[var(--romi-color-ink)]"
        style={{ fontFamily: "var(--romi-font-body)" }}
      >
        We use analytics cookies to understand how people use our website so we
        can improve it. They are only set if you accept.{" "}
        <a
          href="https://app.romiadhd.com/privacy"
          className="text-[var(--romi-color-primary)] underline underline-offset-4 hover:text-[var(--romi-color-primary-strong)]"
        >
          Privacy Policy
        </a>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button size="md" onClick={() => choose("accepted")}>
          Accept analytics
        </Button>
        <Button size="md" variant="Secondary" onClick={() => choose("rejected")}>
          Reject
        </Button>
      </div>
    </div>
  );
}
