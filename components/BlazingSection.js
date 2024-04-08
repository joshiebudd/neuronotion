import React from "react";
import Image from "next/image";

const BlazingSection = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-12 sm:py-12 px-8 mx-auto max-w-screen-xl lg:px-24">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="mx-2 text-4xl tracking-tight font-baloo font-baloo font-bold text-gray-900 text-left sm:text-center">
            <span className="from-orange-400 to-orange-600 bg-gradient-to-r bg-clip-text text-transparent">
              Blazing fast set-up
            </span>
            . <br /> Get started in just 60 seconds 🔥
          </h2>
        </div>
        <div className="lg:gap-y-2 flex flex-col items-center md:justify-center mt-8 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-1">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/rocket.webp"
              alt="More Hyper-focus, Less Distractions"
              width={200}
              height={200}
            />
          </div>
          {/* end - placeholder */}
          {/* begin - description */}
          <div className="max-w-[600px] flex flex-col sm:items-start justify-center mb-12 order-2 md:mb-0">
            <div>
              <div className="text-2xl font-baloo font-bold text-gray-900 flex items-center mt-4">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2"> Super Simple Tutorials. </div>
              </div>
              <div className="text-2xl font-baloo font-bold text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Transfer Notes with ease.</div>
              </div>
              <div className="text-2xl font-baloo font-bold text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Support always available.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlazingSection;