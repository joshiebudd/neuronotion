import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import ArticleSelect from "../components/Articles/articleselect";
import posthog from "posthog-js";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  console.log(
    process.env.NEXT_PUBLIC_POSTHOG_KEY,
    process.env.NEXT_PUBLIC_POSTHOG_HOST,
    process.env.NEXT_PUBLIC_POSTHOG_ID
  );
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.posthog.com",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

import {
  setupBeforeUnload,
  setupLoad,
  setupScroll,
} from "../components/tracking";

const BlogPage = () => {
  useEffect(() => {
    // setupLoad();
    setupScroll();
    setupBeforeUnload();
    track("Visited");
  }, []);

  return (
    <>
      <Head>
        <title>The Romi Blog | ADHD insights that actually help</title>
        <meta
          name="description"
          content="Honest, practical reads on living and working with ADHD, from the team behind Romi, your personal ADHD companion."
        />
        <link rel="canonical" href="https://www.romiadhd.com/blogs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Romi Blog | ADHD insights that actually help" />
        <meta
          property="og:description"
          content="Honest, practical reads on living and working with ADHD, from the team behind Romi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.romiadhd.com/blogs" />
        <meta property="og:site_name" content="Romi ADHD" />
      </Head>
      <ArticleSelect />
    </>
  );
};

export default BlogPage;