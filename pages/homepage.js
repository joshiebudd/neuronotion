import React from 'react';
import HPHeader from '../components/Homepage/HPHeader';
import HPHeroSection from '../components/Homepage/HPHero';
import HPBundleSection from '../components/Homepage/HPBundle';
import HPUBSection from '../components/Homepage/HPUB';
import HPHowItWorksSection from '../components/Homepage/HPHowItWorks';
import HPTestimonialsSection from '../components/Homepage/HPTestimonials';
import HPFAQsSection from '../components/Homepage/HPFAQs';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  return (
    <div>
      <HPHeader />
      <HPHeroSection />
      <HPBundleSection />
      <HPUBSection />
      <HPHowItWorksSection />
      <HPTestimonialsSection />
      <HPFAQsSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;
