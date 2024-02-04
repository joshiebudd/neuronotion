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
  window.addEventListener("scroll", function () {
    const viewportHeight = window.innerHeight;

    if (!scrolled && window.scrollY > viewportHeight) {
      track("Scrolled");
      scrolled = true;
    }

    const footer = document.getElementById("footer");
    if (footer && !reachedBottom && window.scrollY > footer.offsetTop - window.innerHeight) {
      reachedBottom = true;
      track("Reached Bottom");
    }

    const pricingSection = document.getElementById("pricing");
    if (pricingSection && window.scrollY > pricingSection.offsetTop && window.scrollY < pricingSection.offsetTop + pricingSection.clientHeight) {
      hasVisitedPricing = true;
    }
  });
}
