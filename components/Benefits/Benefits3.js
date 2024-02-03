import React from "react";
import Image from "next/image";

const Benefits1 = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-8 pb-8 sm:pb-24 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="gap-x-4 lg:gap-y-2 flex items-center mt-16 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 md:order-1 w-full min-w-[200px] md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit3.webp"
              alt="More Hyper-focus, Less Distractions"
              width={240}
              height={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="max-w-[600px] flex-grow justify-center flex flex-col items-center w-full mb-12 order-1 md:mb-0 md:order-2 lg:mx-4">
            <div>
              <div className="flex items-center">
                <div className="text-4xl tracking-tight font-bold">
                  Aaaanddd relax... <br /> no more study stress 😮‍💨
                </div>
              </div>
              <div className="text-xl mt-16">
                Finally, feel at peace with this blissfully organised study hub
                which you can make your own. Access all your study resources
                from the comfort of one single place.
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center mt-16">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                    alt="Tick Icon"
                    width={32}
                    height={32}
                  />
                  <div className="ml-4">Everything in one place.</div>
                </div>
                <div className="text-2xl font-bold flex items-center mt-8">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                    alt="Tick Icon"
                    width={32}
                    height={32}
                  />
                  <div className="ml-4">Fully customisable.</div>
                </div>
                <div className="text-2xl font-bold flex items-center mt-8">
                  <Image
                    src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
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

export default Benefits1;
