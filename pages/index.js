import React, { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"; // Move this line here
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
import Footer from '../components/FooterSection';
import FooterSection from '../components/FooterSection';

const IndexPage = () => {
  useEffect(() => {
    // Tracking Script 1
    function trackViewDemoButtonClick() {
      va('event', {
        name: 'ViewDemoButtonClick',
        data: {
          buttonType: 'ViewDemo',
          timestamp: new Date().toISOString()
        },
      });
    }

    document.querySelectorAll('.view-demo-button').forEach(button => {
      button.addEventListener('click', trackViewDemoButtonClick);
    });

    // Tracking Script 2
    let pageLoadedTime = Date.now();

    function trackQuickExit() {
      let timeSpent = Date.now() - pageLoadedTime;
      if (timeSpent <= 5000) {
        va('event', {
          name: 'QuickPageExit',
          data: {
            timeSpent: timeSpent
          },
        });
      }
    }

    window.addEventListener('beforeunload', trackQuickExit);

    // Tracking Script 3 (Google Tag)
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-FTX0TWXP1E');

    const speedInsights = new SpeedInsights(/* options */);
  }, []); // Empty dependency array to run the effect only once

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
