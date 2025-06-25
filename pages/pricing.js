import Head from 'next/head';
import { LPMainCTA } from '../components/ClaudiaLandingPage/LPMainCTA';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import ClaudiaPricingHeader from '../components/ClaudiaPricingHeader';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Claudia AI Personal Assistant</title>
        <meta name="description" content="Start your free trial of Claudia, the AI personal assistant engineered for ADHD. No card required." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClaudiaPricingHeader />
      <LPMainCTA />
      <LPFooter />
    </>
  );
} 