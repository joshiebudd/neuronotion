// pages/ADHDBrain.js

import React from "react";
import HPHeader from '../components/Homepage/HPHeader';
import UBHero from "../components/UBPage/UBHero";
import UBFirstTestimonials from "../components/UBPage/UBFirstTestimonials";
import UBProblems from "../components/UBPage/UBProblems";
import UBSolution from "../components/UBPage/UBSolution";
import UBClarity from "../components/UBPage/UBVideoDemo";
import UBCheckboxes from "../components/UBPage/UBCheckboxes";
import UBSetUp from "../components/UBPage/UBSetUp";
import CommunitySection from "../components/StudySystem/CommunitySection";
import PricingSection from "../components/StudySystem/PricingSection";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/StudySystem/FinalCTASection";
import FooterSection from "../components/FooterSection";

const ADHDBrain = () => {
  return (
    <>
      <HPHeader />
      <UBHero />
      <UBFirstTestimonials />
      <UBProblems />
      <UBSolution />
      <UBClarity />
      <UBCheckboxes />
      <UBSetUp />
      <CommunitySection />
      <PricingSection />
      <FAQSection />
      <div>
        <p className="text-center">
          Still have questions? Send me an email <b>josh@neuro-notion.com</b>
        </p>
      </div>
      <FinalCTA />
      <FooterSection />
    </>
  );
};

export default ADHDBrain;
