import { track } from "@vercel/analytics";
let reachedBottom = false;
let loadTime = new Date(),
  unloadTime;

export function setupBeforeUnload() {
  //   window.addEventListener("beforeunload", function (event) {
  //     const endTime = Date.now();
  //     const timeSpent = endTime - startTime;

  //     // Send timeSpent to analytics service
  //     console.log("Time spent on page:", timeSpent);
  const startTime = Date.now();

  const handleUnload = () => {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;

    // Send timeSpent to analytics service
    console.log("Time spent on page:", timeSpent);
    track("Bounce Time", timeSpent);
  };

  window.addEventListener("beforeunload", handleUnload);

  return () => {
    window.removeEventListener("beforeunload", handleUnload);
  };
  // });
}

export function setupLoad() {
  window.addEventListener("DOMContentLoaded", function (event) {
    track("Visited");
    loadTime = new Date();
  });
}

export function setupScroll() {
  const handleScroll = () => {
    const demoSection = document.getElementById("demo-section");
    const scrolledHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    if (demoSection && scrolledHeight + windowHeight >= demoSection.offsetTop) {
      // User scrolled down to the demo section
      console.log("Scrolled to demo section");
      // Track this event using your analytics service
    }
  };

  const handleBeforeUnload = () => {
    const demoSection = document.getElementById("demo-section");
    const scrolledHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    if (demoSection && scrolledHeight + windowHeight < demoSection.offsetTop) {
      // User is leaving the site before reaching the demo section
      console.log("Left at demo");
      track("Reached Bottom");
      // Track this event using your analytics service
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
  // window.addEventListener("scroll", function (event) {
  //   if (
  //     !reachedBottom &&
  //     this.scrollY > document.getElementById("footer").offsetTop - innerHeight
  //   ) {
  //     reachedBottom = true;
  //     track("Reached Bottom");
  //   }
  // });
}
