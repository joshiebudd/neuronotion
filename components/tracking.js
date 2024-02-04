import { track } from "@vercel/analytics";

let scrolled = false;
let reachedBottom = false;
let hasVisitedPricing = false; // Flag to check if user has visited the pricing section
let loadTime = new Date();

export function setupBeforeUnload() {
  window.addEventListener("beforeunload", function (event) {
    if (new Date().getTime() - loadTime.getTime() < 5000) {
      track("Bounced");
    } else if (hasVisitedPricing) {
      track("Leave at Price Section.");
    }
  });
}

export function setupScroll() {
  window.addEventListener("scroll", function (event) {
    if (!scrolled) {
      track("Scrolled");
      scrolled = true;
    }
    if (!reachedBottom && window.scrollY > document.getElementById("footer").offsetTop - window.innerHeight) {
      reachedBottom = true;
      track("Reached Bottom");
    }

    // Check if the user is in the pricing section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection && window.scrollY > pricingSection.offsetTop && window.scrollY < pricingSection.offsetTop + pricingSection.clientHeight) {
      hasVisitedPricing = true; // User has visited the pricing section
    }
  });
}
