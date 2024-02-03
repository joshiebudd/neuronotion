import "../src/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
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

  return (
    <PostHogProvider client={posthog}>
      <>
        <Script
          id="track-pageview-pixel"
          src="https://connect.facebook.net/en_US/fbevents.js"
          onLoad={() => {
            fbq("init", "230622039592089");
            fbq("track", "PageView");
          }}
        />

        <Script id="vercel-speed-insights" src="/_vercel/insights/script.js" />

        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Neuro Notion ┃ The Ultimate ADHD Study Notion Template</title>
          <link
            rel="icon"
            href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
            type="image/webp"
          />
          <style>
            {
              ".hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}"
            }
          </style>
          <link rel="dns-prefetch" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link
            rel="preload"
            href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
            as="image"
          />
          <link
            rel="preload"
            href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/maindemo.webp"
            as="image"
          />
        </Head>

        <Component {...pageProps} />
      </>
    </PostHogProvider>
  );
}

export default MyApp;
