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
        <meta name="description" content="Learnin time :)." />
      </Head>
      <ArticleSelect />
    </>
  );
};

export default BlogPage;