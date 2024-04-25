import React from "react";
import Image from "next/image";

const Benefits3 = () => {
  return (
    <section id="benefits" className="bg-blue-50 benefits-section flex justify-center">
      <div className="pt-2 pb-4 sm:pb-24 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="gap-x-4 lg:gap-y-2 flex items-center mt-12 flex-wrap md:flex-nowrap">
          <div className="flex items-center text-center justify-center order-2 md:order-1 w-full min-w-[200px] md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit3.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
              height={320}
            />
          </div>
          <div className="max-w-[600px] flex-grow justify-center flex flex-col items-center w-full mb-12 order-1 md:mb-0 md:order-2 lg:mx-4">
            <div>
              <div className="flex items-center">
                <div className="text-4xl font-baloo font-bold text-gray-800">
                  <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
                    Aaaandd relax...
                  </span>
                  😌<br /> Goodbye study stress 👋
                </div>
              </div>
              <div className="text-xl font-baloo mt-12 mb-16">
                Finally, feel at peace with this blissfully organised study hub.
                <br /> Access all your study resources from the comfort of one
                single place.
              </div>
              <div>
                <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
                    alt="Tick Icon"
                    width={32}
                    height={32}
                  />
                  <div className="ml-4">Everything in one place.</div>
                </div>
                <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
                    alt="Tick Icon"
                    width={32}
                    height={32}
                  />
                  <div className="ml-4">Fully customisable.</div>
                </div>
                <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
                    alt="Tick Icon"
                    width={32}
                    height={32}
                  />
                  <div className="ml-4">Super simple to use.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits3;