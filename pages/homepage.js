import React from 'react';
import HPHeader from '../components/Homepage/HPHeader';
import HPHeroSection from '../components/Homepage/HPHero';
import HPBundleSection from '../components/Homepage/HPBundle';
import HPUBSection from '../components/Homepage/HPUB';
import HPHowItWorksSection from '../components/Homepage/HPHowItWorks';
import ReviewSection from '../components/ReviewSection';
import HPFAQSection from '../components/Homepage/HPFAQs';
import HPFinalCTA from '../components/Homepage/HPFinalCTA';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  return (
    <div>
      <HPHeader />
      <HPHeroSection />
      <HPBundleSection />
      <HPUBSection />
      <HPHowItWorksSection />
      <ReviewSection />
      <HPFAQSection />
      <HPFinalCTA />
      <FooterSection />
    </div>
  );
}

export default HomePage;
