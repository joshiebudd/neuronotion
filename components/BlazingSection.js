import React from "react";
import Image from "next/image";

const BlazingSection = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-8 sm:py-24 px-8 mx-auto max-w-screen-xl lg:px-24">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="ml-12 sm:ml-0 text-4xl tracking-tight font-bold text-gray-900 text-left sm:text-center">
            Blazing fast set-up.
            Get started in just 60 seconds 🔥
          </h2>
        </div>
        <div className="gap-x-12 lg:gap-y-2 flex items-center md:justify-center mt-8 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 min-w-[200px] md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/rocket.webp"
              alt="More Hyper-focus, Less Distractions"
              width={240}
              height={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="max-w-[600px] flex flex-col sm:items-end justify-center mb-12 order-1 md:mb-0">
            <div>
              <div className="text-2xl font-bold flex items-center mt-4">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">
                  Text and Video tutorials for everything.
                </div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Easy to transfer notes.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Immediate support available.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlazingSection;
