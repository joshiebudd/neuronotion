import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import TesterHeroSec from "../components/TesterHero";
import FooterSection from "../components/FooterSection";



const BecomeATester = () => {
  <Head>
    <meta
      name="Join the testers"
      content="Join the waiting list to become a product tester"
    />
  </Head>;
  useEffect(() => {
    const startTime = Date.now();

    const handleUnload = () => {
      const endTime = Date.now();
      const timeSpent = endTime - startTime;

      // Send timeSpent to analytics service
      console.log("Time spent on page:", timeSpent);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
   
  }, []);

  return (
    <>
    <TesterHeroSec />
    <FooterSection />
    </>
  );
};

export default BecomeATester;
