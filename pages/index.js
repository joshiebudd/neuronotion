import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import HPHeader from '../components/Homepage/HPHeader';
import HPHeroSection from '../components/Homepage/HPHero';
import HPBundleSection from '../components/Homepage/HPBundle';
import HPUBSection from '../components/Homepage/HPUB';
import HPHowItWorksSection from '../components/Homepage/HPHowItWorks';
import HPReviews from '../components/Homepage/HPReviews';
import HPFAQSection from '../components/Homepage/HPFAQs';
import HPFinalCTA from '../components/Homepage/HPFinalCTA';
import FooterSection from '../components/FooterSection';
import posthog from "posthog-js";
import Cookies from "../components/Cookies.js";

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

const IndexPage = () => {
  <Head>
     <meta
       name="description"
      content="Regain control of your life with ADHD. Discover the first suite of scientifically designed ADHD life management tools."
     />
   </Head>;

  useEffect(() => {
     setupLoad();
     setupScroll();
     setupBeforeUnload();
     track("Visited");
  }, []);

  
  return (
    <div>
      <HPHeader />
      <HPHeroSection />
      <HPBundleSection />
      <HPUBSection />
      <HPHowItWorksSection />
      <HPReviews />
      <HPFAQSection />
      <HPFinalCTA />
      <FooterSection />
      <Cookies />
    </div>
  );
}

export default IndexPage;
