import { track } from "@vercel/analytics";
let scrolled = false;
let reachedBottom = false;
let loadTime = new Date();

export function setupBeforeUnload() {
  window.addEventListener("beforeunload", function (event) {
    if (new Date().getTime() - loadTime.getTime() < 5000) {
      track("Bounced");
    }
  });
}

export function setupLoad() {
  window.addEventListener("DOMContentLoaded", function (event) {
    track("Visited");
    loadTime = new Date();
  });
}
export function setupScroll() {
  window.addEventListener("scroll", function (event) {
    if (!scrolled) {
      track("Scrolled");
      scrolled = true;
    }
    if (
      !reachedBottom &&
      this.scrollY > document.getElementById("footer").offsetTop - innerHeight
    ) {
      reachedBottom = true;
      track("Reached Bottom");
    }
    const pricingSection = this.document.getElementById("pricing");
    if (
      this.scrollY > pricingSection.clientTop &&
      this.scrollY < pricingSection.clientHeight + pricingSection.clientTop
    ) {
      track("Leave at Price Section.");
    }
  });
}
