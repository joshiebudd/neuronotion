/*
 * Analytics preference for romiadhd.com.
 *
 * PostHog analytics runs by default to help us improve the site (allowed for
 * statistical purposes under the UK Data (Use and Access) Act 2025 PECR
 * exemption) and stops for anyone who opts out. Vercel Analytics and Speed
 * Insights are cookieless.
 *
 * The choice is kept in localStorage under CONSENT_KEY:
 *   "rejected"      visitor opted out; analytics off
 *   "acknowledged"  visitor closed the notice; analytics on
 *   "accepted"      older value from the previous banner; analytics on
 * Changing it fires CONSENT_EVENT on window.
 */

export const CONSENT_KEY = "romi_cookie_consent";
export const CONSENT_EVENT = "romi:consent-change";
export const COOKIE_SETTINGS_HASH = "#cookie-settings";

export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return ["accepted", "acknowledged", "rejected"].includes(value) ? value : null;
  } catch {
    return null;
  }
}

export function analyticsAllowed(consent = getConsent()) {
  return consent !== "rejected";
}

export function setConsent(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
