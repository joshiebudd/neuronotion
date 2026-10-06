/*
 * Cookie consent state for romiadhd.com.
 *
 * PostHog analytics only sets cookies and sends events after the visitor
 * accepts. Vercel Analytics and Speed Insights are
 * cookieless, so they run regardless.
 *
 * The choice is kept in localStorage under CONSENT_KEY as "accepted" or
 * "rejected". Changing it fires CONSENT_EVENT on window.
 */

export const CONSENT_KEY = "romi_cookie_consent";
export const CONSENT_EVENT = "romi:consent-change";

export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
