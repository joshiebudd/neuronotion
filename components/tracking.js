import React, { useEffect } from 'react';
import { track } from "@vercel/analytics";

const YourComponent = () => {
  // Define the event handlers outside useEffect
  const onScroll = (event) => {
    let scrolled = false;
    let reachedBottom = false;

    if (!scrolled) {
      track("Scrolled below fold");
      scrolled = true;
    }

    if (!reachedBottom &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      reachedBottom = true;
      track("Reached Bottom");
    }
  };

  const onClickBasic = () => {
    track('Initiate Checkout - Basic');
  };

  const onClickStandard = () => {
    track('Initiate Checkout - Standard');
  };

  const onClickPremium = () => {
    track('Initiate Checkout - Premium');
  };

  const beforeUnload = (event) => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      const isOnPricingPage = window.scrollY >= pricingSection.offsetTop &&
                              window.scrollY < pricingSection.offsetTop + pricingSection.offsetHeight;

      if (isOnPricingPage) {
        track("Leave at Price Section.");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("beforeunload", beforeUnload);

    // Setup checkout tracking
    const basicButton = document.getElementById('GetBasicButton');
    if (basicButton) basicButton.addEventListener('click', onClickBasic);

    const standardButton = document.getElementById('GetStandardButton');
    if (standardButton) standardButton.addEventListener('click', onClickStandard);

    const premiumButton = document.getElementById('GetPremiumButton');
    if (premiumButton) premiumButton.addEventListener('click', onClickPremium);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", beforeUnload);
      if (basicButton) basicButton.removeEventListener('click', onClickBasic);
      if (standardButton) standardButton.removeEventListener('click', onClickStandard);
      if (premiumButton) premiumButton.removeEventListener('click', onClickPremium);
    };
  }, []);

};

export default YourComponent;
