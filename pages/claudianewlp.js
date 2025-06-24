import React from 'react';
import Head from 'next/head';
import ClaudiaHeader from '../components/ClaudiaHeader';
import { LPHero } from '../components/ClaudiaLandingPage/LPHero';
import { LPWhatIsThis } from '../components/ClaudiaLandingPage/LPWhatIsThis';
import { LPTestimonials } from '../components/ClaudiaLandingPage/LPTestimonials';
import { LPADHDStruggles } from '../components/ClaudiaLandingPage/LPADHDStruggles';
import { LPHowItWorks } from '../components/ClaudiaLandingPage/LPHowItWorks';
import { LPTheDifference } from '../components/ClaudiaLandingPage/LPTheDifference';
import { LPFoundersStory } from '../components/ClaudiaLandingPage/LPFoundersStory';
import { LPFAQs } from '../components/ClaudiaLandingPage/LPFAQs';
import { LPFinalCTA } from '../components/ClaudiaLandingPage/LPFinalCTA';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Toaster } from "../components/ui/toaster";

const ClaudiaNewLP = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Claudia - AI ADHD Personal Assistant</title>
        <meta name="description" content="The world's most productive group of ADHD Entrepreneurs. Accountable is a co-working crew of ADHD founders getting sh*t done. Together. Every single day." />
      </Head>
      
      <ClaudiaHeader />
      <LPHero />
      <LPADHDStruggles />
      <LPWhatIsThis />
      <LPTestimonials />
      <LPHowItWorks />
      <LPTheDifference />
      <LPFoundersStory />
      <LPFAQs />
      <LPFinalCTA />
      <LPFooter />
      
      <Toaster />
    </div>
  );
};

export default ClaudiaNewLP; 