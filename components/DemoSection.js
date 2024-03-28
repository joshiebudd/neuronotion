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
    <section id="demo" className="bg-gray-800 demo-section pt-12">
      {zoomed && (
        <ImageViewer
          src="https://NeuroNotionPullZonw.b-cdn.net/Product%20Demo%20for%20Website.mp4"
          onClose={handleImageViewerClose}
        />
      )}
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white">
          How does it work? 🤫
        </h1>
        <p className="mb-8 text-xl font-normal text-white sm:px-16 md:px-48">
          Press &quot;Play&quot; to have all your questions answered in under
          two minutes.
        </p>

        <div className="inline-block p-0 rounded-lg overflow-hidden">
          <video
            className="w-7/10 rounded-lg"
            controls
            onClick={() => showImageViewer(true)}
            poster="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/thumbnailfordemo.webp"
          >
            <source
              src="https://NeuroNotionPullZonw.b-cdn.net/ProductDemoFinal.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-4">
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block rounded-lg bg-blue-500 px-8 py-4 text-lg font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get Lifetime Access
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
          <span className="mt-0 text-sm text-gray-100">
            &quot;Before I found Neuro Notion, every study session was this
            awful long battle with distractions and procrastination. Now, I feel
            like I&apos;ve got my own space that really helps to keep me in the
            zone.&quot;
          </span>

          <div className="mt-4">
            <div className="flex justify-center flex-col items-center">
              <Image
                className="w-16 h-16 rounded-full"
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/lila.webp"
                alt="Avatar"
                width={96}
                height={96}
              />
              <span className="text-white">Lola Clarkes</span>
            </div>
            <h2 className="text-lg text-white font-semibold"></h2>
            <p className="text-gray-300">
              Second Year Psychology Student @ Manchester University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
