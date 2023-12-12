import React, { useEffect } from 'react';
import Script from 'next/script';
import HeaderSection from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import DarkModeSection from '../components/DarkmodeSection';
import CommunitySection from '../components/CommunitySection';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTASection';
import FooterSection from '../components/FooterSection';

const IndexPage = () => {  
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <DemoSection />
      <DarkModeSection />
      <CommunitySection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
      <FooterSection />
    </>
  );
}

export default IndexPage;
