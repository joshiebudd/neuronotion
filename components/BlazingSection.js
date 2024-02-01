import React from "react";
import Image from "next/image";


const BlazingSection = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-8 sm:py-24 px-4 mx-auto max-w-screen-xl lg:px-24">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900">
            Blazing fast set-up.
            <br />
            Get up and running in just 60 seconds 🔥
          </h2>
        </div>
        <div className="gap-x-2 lg:gap-y-2 flex items-center mt-8 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 w-full min-w-[200px] md:w-fit">
            <Image
              src="/rocket.webp"
              alt="More Hyper-focus, Less Distractions"
              width={240}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="max-w-[600px] mx-12 flex flex-col items-center justify-center mb-12 order-1 md:mb-0 lg:mx-4 w-full">
            <div>
              <div className="text-2xl font-bold flex items-center mt-12">
                <Image
                  src="/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Everything in one place.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Fully customisable.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Quickly Capture Ideas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlazingSection;
