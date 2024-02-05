import { track } from "@vercel/analytics";
let scrolled = false;
let reachedBottom = false;
let loadTime = new Date(),
  unloadTime;
export function setupBeforeUnload() {
  // window.addEventListener("beforeunload", function (event) {
  //   unloadTime = new Date();
  //   const visitedTime = unloadTime.getTime() - loadTime.getTime();
  //   if (visitedTime < 5000) {
  //     track("Bounced");
  //   }
  //   track(`Visited Time: ${visitedTime}`);
  // });

  var timer;
  var timerStart;
  var timeSpentOnSite = getTimeSpentOnSite();
  
  function getTimeSpentOnSite(){
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
  }
  
  function startCounting(){
    timerStart = Date.now();
    timer = setInterval(function(){
      timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
      localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
      timerStart = parseInt(Date.now());
      // Convert to seconds
      console.log(parseInt(timeSpentOnSite/1000));
    },1000);
  }
  
  startCounting();

  if (timeSpentOnSite < 5000) {
    track("Bounced");
  }
  
  track("Visited Time: ${timeSpentOnSite}");

}
export function setupLoad() {
  window.addEventListener("DOMContentLoaded", function (event) {
    track("Visited");
    loadTime = new Date();
  });
}
export function setupScroll() {
  window.addEventListener("scroll", function (event) {
    // if (!scrolled) {
    //   track("Scrolled");
    //   scrolled = true;
    // }

    window.onscroll = function() {
      track("Scrolled");
    }
    // if (
    //   !reachedBottom &&
    //   this.scrollY > document.getElementById("footer").offsetTop - innerHeight
    // ) {
    //   reachedBottom = true;
    //   track("Reached Bottom");
    // }
    var totalPageHeight = document.body.scrollHeight;
    var scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= totalPageHeight){
      reachedBottom = true;
      track("Reached Bottom");
    }


    
    // const pricingSection = this.document.getElementById("pricing");
    // if (
    //   this.scrollY > pricingSection.clientTop &&
    //   this.scrollY < pricingSection.clientHeight + pricingSection.clientTop
    // ) {
    //   track("Leave at Price Section.");
    // }
  });

  var myElement = document.getElementById('pricing');
  var bounding = myElement.getBoundingClientRect();
  var myElementHeight = myElement.offsetHeight;
  var myElementWidth = myElement.offsetWidth;
  
  function elementInViewport() {
    var bounding = myElement.getBoundingClientRect();
    if (bounding.top >= -myElementHeight && bounding.left >= -myElementWidth && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      track("Leave at Price Section.");
    }
}
}
