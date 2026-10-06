import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import ArticleSelect from "../components/Articles/articleselect";

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
        <meta property="og:image" content="https://www.romiadhd.com/og/romi-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ArticleSelect />
    </>
  );
};

export default BlogPage;