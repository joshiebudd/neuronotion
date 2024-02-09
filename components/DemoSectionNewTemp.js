import React, { useState } from "react";
import Image from "next/image";

const DemoSectionNewTemp = () => {
  // Carousel state and functions
  const [activeIndex, setActiveIndex] = useState(2); // Start with the third item active
  const carouselItems = [
    "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit1.webp",
    "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit2.webp",
    "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit3.webp",
    "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit1.webp",
    "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit2.webp",
  ];

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleButtonClick = (e) => {
    logDemoBuyNowEvent(); // Placeholder for your click handler
  };

  const logDemoBuyNowEvent = () => {
    console.log("DemoBuyNowClick event logged"); // Placeholder for your event logging
    // Implement the actual logging logic here
  };

  return (
    <section id="demo" className="bg-gray-100 pt-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-black">
          Take a sneak peak at what&apos;s included... 🤫
        </h1>
        <p className="mb-4 text-xl font-normal text-black sm:px-16 md:px-48 mt-8">
          No more juggling 8 different tools, it&apos;s time to ease into a streamlined study experience.
        </p>

        {/* Carousel */}
        <div id="animation-carousel" className="relative w-full my-8">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {carouselItems.map((item, index) => (
              <div key={index} className={`duration-200 ease-linear ${activeIndex === index ? 'block' : 'hidden'}`}>
                <Image 
                src={item} 
                alt="More Hyper-focus, Less Distractions" 
                width={320} 
                height={320} 
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goToPrevious}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goToNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="mt-4">
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Buy Now
          </a>
        </div>

        {/* Stars */}
        <div className="mb-2 flex justify-center">
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600 text-3xl">
            ★
          </span>
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600 text-3xl">
            ★
          </span>
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600 text-3xl">
            ★
          </span>
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600 text-3xl">
            ★
          </span>
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600 text-3xl">
            ★
          </span>
        </div>

        {/* Testimonial and Author Info */}
        <div className="text-center mx-auto mt-4 px-4">
          <span className="mt-0 text-sm text-gray-800">
            &quot;Neuro Notion has been an absolute game changer for studying
            with ADHD. Finally, I have a place for my Notes, Flashcards, Essay
            plans, and everything else in a single spot so I no longer get
            distracted when jumping between tabs. Love it!&quot;
          </span>

          <div className="mt-4">
            <div className="flex justify-center flex-col items-center">
              <Image
                className="w-16 h-16 rounded-full"
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/hs_circle2.webp"
                alt="Avatar"
                width={96}
                height={96}
              />
              Josh Budd
            </div>
            <h2 className="text-lg text-black font-semibold"></h2>
            <p className="text-gray-500">
              Final Year Student @ Loughborough University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSectionNewTemp;
