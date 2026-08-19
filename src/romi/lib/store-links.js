/*
 * App store links. Both apps went live before 19 Aug 2026; until then the store
 * buttons were disabled behind a "Temporarily disabled due to rebranding" tooltip.
 *
 * Kept in one place so the hero and the footer cannot drift apart.
 */
export const APP_STORE_URL = "https://apps.apple.com/gb/app/romi/id6752275831";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.neuronotion.app";

export const STORE_LINKS = [
  {
    href: APP_STORE_URL,
    src: "/romi/landing/store-app-store.webp",
    alt: "Download Romi on the App Store",
    label: "App Store",
  },
  {
    href: GOOGLE_PLAY_URL,
    src: "/romi/landing/store-google-play.webp",
    alt: "Get Romi on Google Play",
    label: "Google Play",
  },
];
