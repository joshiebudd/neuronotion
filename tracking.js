import { track } from "@vercel/analytics";
let scrolled = false;
let reachedBottom = false;
let loadTime = new Date(),
  unloadTime;
export function setupBeforeUnload() {
  window.addEventListener("beforeunload", function (event) {
    unloadTime = new Date();
    const visitedTime = unloadTime.getTime() - loadTime.getTime();
    if (visitedTime < 5000) {
      track("Bounced");
    }
    track(`Visited Time: ${visitedTime}`);
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
