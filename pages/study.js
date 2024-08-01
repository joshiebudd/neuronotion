import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import HeaderSection from "../components/StudySystem/HeaderSection";
import Cookies from "../components/Cookies.js";
import HeroSection from "../components/StudySystem/HeroSection.js";
import BenefitsSection from "../components/StudySystem/Benefits/index.js";
import FeaturesSection from "../components/StudySystem/FeaturesSection";
import DemoSection from "../components/StudySystem/DemoSection";
import DarkModeSection from "../components/StudySystem/DarkmodeSection.js";
import CommunitySection from "../components/StudySystem/CommunitySection.js";
import ReviewSection from "../components/StudySystem/ReviewSection.js";
import PricingSection from "../components/StudySystem/PricingSection";
import AboutSection from "../components/StudySystem/AboutSection.js";
import FAQSection from "../components/FAQSection/FAQSection.js";
import FinalCTA from "../components/StudySystem/FinalCTASection.js";
import FooterSection from "../components/FooterSection";
import BlazingSection from "../components/StudySystem/BlazingSection.js";

import {
  setupBeforeUnload,
  setupLoad,
  setupScroll,
} from "../components/tracking";

const StudySystem = () => {
  useEfect(() => {
     setupLoad();
     setupScroll();
     setupBeforeUnload();
     track("Visited");
  }, []);

  return (
    <>
      <HeaderSection />
      <Cookies />
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
      <FooterSection />
    </>
  );
};

export default StudySystem;
