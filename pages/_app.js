import "../src/styles/globals.css";
import "../src/romi/styles/fonts.css";
import "../src/romi/styles/tokens.css";
import "../src/romi/styles/romi.css";
import "../src/romi/styles/blog.css";
import "../src/romi/styles/docs.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { storeAppEnv } from "../lib/appUrl";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import "../src/styles/cardWidget.css";
import { Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { CookieBanner } from "../src/romi/components/ui/CookieBanner";
import { CONSENT_EVENT, getConsent } from "../src/romi/lib/consent";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Check that PostHog is client-side (used to handle Next.js SSR).
// PostHog starts opted out with in-memory storage, so it sets no cookies and
// sends nothing until the visitor accepts analytics in the cookie banner.
if (typeof window !== "undefined") {
  posthog.init(
    process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      "phc_3lTf840WFEVTY07GoU20Happ4w4r4YZLpeZuzwVWd7o",
    {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.posthog.com",
      persistence: "memory",
      opt_out_capturing_by_default: true,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    }
  );
}

function applyAnalyticsConsent(consent) {
  if (consent === "accepted") {
    posthog.set_config({ persistence: "localStorage+cookie" });
    posthog.opt_in_capturing();
  } else {
    posthog.opt_out_capturing();
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Read the stored cookie choice and react when the banner changes it.
  useEffect(() => {
    const current = getConsent();
    if (current) applyAnalyticsConsent(current);
    const onChange = (event) => applyAnalyticsConsent(event.detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Store the app environment from ?app= param so CTA buttons redirect to the right version.
  // Set by PromoHandoffPage when a promo code is being handed off to the marketing site.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const params = new URLSearchParams(window.location.search);
      const app = params.get('app');
      if (app) storeAppEnv(app);
    } catch {}
  }, []);

  return (
    <PostHogProvider client={posthog}>


      <>
        <Script id="vercel-speed-insights" src="/_vercel/insights/script.js" />

        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Romi - Your Personal ADHD Companion</title>

          {/* Site-wide brand chrome. Per-page SEO + Open Graph live in RomiPage.
              No Twitter tags (no X presence). */}
          <meta name="theme-color" content="#BF96FF" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <style>
            {
              ".hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}"
            }
          </style>
        </Head>

        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
        <Analytics />
        <CookieBanner />
      </>
    </PostHogProvider>
  );
}

// Add getInitialProps
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
