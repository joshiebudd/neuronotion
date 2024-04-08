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
    <section id="demo" className="bg-gray-800 demo-section pt-12 pb-12 sm:pb-16 sm:pt-16">
      {zoomed && (
        <ImageViewer
          src="https://NeuroNotionPullZonw.b-cdn.net/Product%20Demo%20for%20Website.mp4"
          onClose={handleImageViewerClose}
        />
      )}
      <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-16">
      <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
            Demo
            </div>
        <h1 className="mb-4 text-4xl font-baloo font-bold text-gray-100 leading-none tracking-tight">
          How does it work? 🤷‍♂️
        </h1>
        <p className="mb-8 text-lg font-baloo font-regular text-gray-100 sm:px-16 md:px-48">
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

        <div className="flex flex-col mt-6 sm:flex-row justify-center items-center space-x-0 sm:space-x-4">
        <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get for Free.
          </a>
        </div>

        <div className="mb-2 flex justify-center">
              <span className="mt-2 mb-0 text-3xl leading-none text-orange-500">★★★★★</span>
            </div>

        {/* Testimonial and Author Info */}
        <div className="text-center mx-auto mt-4 px-4 sm:px-64">
        <span className="mt-0 text-sm sm:text-md font-baloo text-gray-100"> &quot;Before I found Neuro Notion, every study session was this awful long <span className="font-bold">battle with distractions</span> and procrastination. Now, I feel like I&apos;ve got <span className="font-bold">my own space</span> that really helps to <span className="font-bold">keep me in the zone</span>.&quot; </span>

          <div className="mt-4">
            <div className="flex justify-center font-baloo flex-col items-center">
              <Image
                className="w-16 h-16 rounded-full"
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/lila.webp"
                alt="Avatar"
                width={96}
                height={96}
              />
              <span className="mt-1 text-white ">Lola Clarkes</span>
            </div>
            <h2 className="text-lg text-white font-baloo"></h2>
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
