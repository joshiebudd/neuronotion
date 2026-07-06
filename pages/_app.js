import "../src/styles/globals.css";
import "../src/romi/styles/fonts.css";
import "../src/romi/styles/tokens.css";
import "../src/romi/styles/romi.css";
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

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  posthog.init(
    process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      "phc_3lTf840WFEVTY07GoU20Happ4w4r4YZLpeZuzwVWd7o",
    {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.posthog.com",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    }
  );
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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


      <Script
        id="vtag-ai-js"
        src="https://r2.leadsy.ai/tag.js"
        data-pid="1EFc77CT69Iyv9Ob2"
        data-version="062024"
        strategy="afterInteractive"
        async
      />
      
      {/* Meta Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '230622039592089');
          fbq('track', 'PageView');
        `}
      </Script>
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
          <link rel="dns-prefetch" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://connect.facebook.net" />

          {/* Meta Pixel Code */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=230622039592089&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16705542778"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16705542778');
          `}
        </Script>

        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
        <Analytics />
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
