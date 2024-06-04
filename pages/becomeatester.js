import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import Head from "next/head";
import FooterSection from "../components/FooterSection";
import WaitingListHeroSec from "../components/WaitingList";
import WaitingListHeaderSection from "../components/WaitingListHeader";



const JoinTheWaitingList = () => {
  <Head>
    <meta
      name="Join the Waiting List"
      content="Join the waiting list to be the first to get access!"
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
    <WaitingListHeroSec />
    <WaitingListHeaderSection />
    <FooterSection />
    </>
  );
};

export default JoinTheWaitingList;
