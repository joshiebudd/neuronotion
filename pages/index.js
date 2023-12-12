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
  useEffect(() => {
    
  }, []); // Empty dependency array to run the effect only once

  
  return (
    <>
          <Script
        id="track-pageview-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          fbq('init', '230622039592089');
          fbq('track', 'PageView');
        }}
      />

      <Script
        id="google-extra-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FTX0TWXP1E"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FTX0TWXP1E');
          `,
        }}
      />
        
        
      <Script
        id="vercel-speed-insights"
        src="/_vercel/insights/script.js"
        strategy="afterInteractive"
      />
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
