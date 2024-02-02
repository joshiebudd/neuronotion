import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "./Common/ImageViewer";

const DemoSection = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleButtonClick = (e) => {
    logDemoBuyNowEvent(); // Log the DemoBuyNowClick event
  };

  const logDemoBuyNowEvent = () => {
    // Log event to Facebook Pixel for Demo Buy Now click
    fbq("trackCustom", "DemoBuyNowClick");
  };

  //Show popup for zooming image
  const showImageViewer = (state) => {
    // setZoomed(state);
    // if (state) document.body.classList.add("overflow-hidden");
    // else document.body.classList.remove("overflow-hidden");
  };

  const handleImageViewerClose = () => {
    showImageViewer(false);
  };

  return (
    <section id="demo" className="bg-gray-100 demo-section pt-12">
      {zoomed && (
        <ImageViewer
          src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/bigdemoannotated.webp"
          onClose={handleImageViewerClose}
        />
      )}
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-black">
        Take a sneak peak at what&apos;s included... 🤫        </h1>
        <p className="mb-4 text-xl font-normal text-black sm:px-16 md:px-48 mt-8">
          No more juggling 8 different tools, its time to ease into a streamlined study experience.
        </p>

        <div className="inline-block p-0 border-8 border-gray-300 border-opacity-20 rounded-lg overflow-hidden">
          <Image
            onClick={() => showImageViewer(true)}
            width={1000}
            height={1200}
            className="centered-image"
            src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/bigdemoannotated.webp"
            alt="Annotated Version of Module Page"
          />
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

export default DemoSection;
