import { track } from "@vercel/analytics";
let scrolled = false;
let reachedBottom = false;
let loadTime = new Date(), unloadTime;


export function setupLoad() {
  window.addEventListener("DOMContentLoaded", function (event) {
    track("Visited");
    loadTime = new Date();
  });
}

export function setupScroll() {
  window.addEventListener("scroll", function (event) {
    if (!scrolled) {
      track("Scrolled below fold");
      scrolled = true;
    }

    if (!reachedBottom &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      reachedBottom = true;
      track("Reached Bottom");
    }
  });
}

export function setupCheckoutTracking() {
  document.getElementById('GetBasicButton').addEventListener('click', function() {
    track('Initiate Checkout - Basic');
  });

  document.getElementById('GetStandardButton').addEventListener('click', function() {
    track('Initiate Checkout - Standard');
  });

  document.getElementById('GetPremiumButton').addEventListener('click', function() {
    track('Initiate Checkout - Premium');
  });
}


window.addEventListener("beforeunload", function (event) {
  const pricingSection = document.getElementById("pricing");
  if (pricingSection) {
    const isOnPricingPage = window.scrollY >= pricingSection.offsetTop &&
                            window.scrollY < pricingSection.offsetTop + pricingSection.offsetHeight;

    if (isOnPricingPage) {
      track("Leave at Price Section.");
    }
  }
});
