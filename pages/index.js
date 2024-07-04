import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/Benefits";
import FeaturesSection from "../components/FeaturesSection";
import DemoSection from "../components/DemoSection";
import DarkModeSection from "../components/DarkmodeSection";
import CommunitySection from "../components/CommunitySection";
import ReviewSection from "../components/ReviewSection";
import PricingSection from "../components/PricingSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/FinalCTASection";
import FooterSection from "../components/FooterSection";
import BlazingSection from "../components/BlazingSection.js";
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

const IndexPage = () => {
  // <Head>
  //   <meta
  //     name="description"
  //     content="Discover how Neuro Notion, built by ADHDers for ADHDers, addresses study struggles with features like hyper-focus tools, time-saving flashcards, custom ADHD focus timers, and AI-generated essay plans. Overcome distractions and work smarter with Neuro Notion."
  //   />
  // </Head>;

  useEffect(() => {
    // setupLoad();
    // setupScroll();
    // setupBeforeUnload();
    // track("Visited");
  }, []);

  return (
    <>
      {/* <HeaderSection />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <DemoSection />
      <ReviewSection />
      <DarkModeSection />
      <PricingSection />
      <BlazingSection />
      <FAQSection />
      <CommunitySection />
      <AboutSection />
      <FinalCTA />
      <FooterSection /> */}
    </>
  );
};

export default IndexPage;
