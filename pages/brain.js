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
import UBPricing from "../components/UBPage/UBPricing";
import TemplatesFAQ from "../components/TemplatesPage/TemplatesFAQ";
import HPFinalCTA from "../components/Homepage/HPFinalCTA";
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
      <UBPricing />
      <TemplatesFAQ />
      <HPFinalCTA />
      <FooterSection />
    </>
  );
};

export default ADHDBrain;
