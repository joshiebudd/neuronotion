import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/Benefits";
import FeaturesSection from "../components/FeaturesSection";
import DarkModeSection from "../components/DarkmodeSection";
import DemoSection from "../components/DemoSection";
import CommunitySection from "../components/CommunitySection";
import PricingSection from "../components/PricingSection";
import AboutSection from "../components/AboutSection";
import ReviewSection from "../components/ReviewSection";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/FinalCTASection";
import FooterSection from "../components/FooterSection";
import BlazingSection from "../components/BlazingSection.js";


const FBPage = () => {
  <Head>
    <meta
      name="description"
      content="Discover how Neuro Notion, built by ADHDers for ADHDers, addresses study struggles with features like hyper-focus tools, time-saving flashcards, custom ADHD focus timers, and AI-generated essay plans. Overcome distractions and work smarter with Neuro Notion."
    />
  </Head>;
  useEffect(() => {
    const startTime = Date.now();

    const handleUnload = () => {
      const endTime = Date.now();
      const timeSpent = endTime - startTime;

      // Send timeSpent to analytics service
      console.log("Time spent on page:", timeSpent);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
   
  }, []);

  return (
    <>
      <HeaderSection />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <BlazingSection />
      <DemoSection />
      <ReviewSection />
      <DarkModeSection />
      <PricingSection />
      <FAQSection />
      <CommunitySection />
      <AboutSection />
      <FinalCTA />
      <FooterSection />
    </>
  );
};

export default FBPage;
