import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NEWClaudiaLPHeader from '../components/NEWClaudiaLPHeader';
import { LPHero } from '../components/ClaudiaLandingPage/LPHero';
import { LPSupportedBy } from '../components/ClaudiaLandingPage/LPSupportedBy';
import { LPWhatIsThis } from '../components/ClaudiaLandingPage/LPWhatIsThis';
import { LPTestimonials } from '../components/ClaudiaLandingPage/LPTestimonials';
import { LPADHDStruggles } from '../components/ClaudiaLandingPage/LPADHDStruggles';
import { LPTheDifference } from '../components/ClaudiaLandingPage/LPTheDifference';
import { LPFoundersStory } from '../components/ClaudiaLandingPage/LPFoundersStory';
import { LPFAQs } from '../components/ClaudiaLandingPage/LPFAQs';
import { LPFinalCTA } from '../components/ClaudiaLandingPage/LPFinalCTA';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Toaster } from "../components/ui/toaster";

const ClaudiaNewLP = () => {
  const router = useRouter();

  useEffect(() => {
    // Handle hash navigation on page load
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.asPath]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        {/* Archived Neuro Notion / Claudia homepage, served at /neuronotion. Title,
            description and canonical point searchers at the archive honestly and
            keep it from competing with the Romi homepage for the brand queries. */}
        <title>Claudia by Neuro Notion is now Romi (archived homepage)</title>
        <meta name="description" content="The original Neuro Notion homepage for Claudia, the ADHD personal assistant, kept for reference. Claudia has been rebuilt and renamed Romi, your personal ADHD companion." />
        <link rel="canonical" href="https://www.romiadhd.com/neuronotion" />
      </Head>
      
      <NEWClaudiaLPHeader />
      <LPHero />
      <LPSupportedBy />
      <LPADHDStruggles />
      <LPWhatIsThis />
      <LPTestimonials />
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
