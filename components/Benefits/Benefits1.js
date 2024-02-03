import React from "react";
import UpArrowIcon from "../Common/Icons/UpArrowIcon";
import DownArrowIcon from "../Common/Icons/DownArrowIcon";
import Image from "next/image";

const Benefits1 = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-8 pb-8 sm:pb-24 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900">
            Block out the noise
            <br />
            and channel the flow state ✨
          </h2>
          <p className="mt-6 text-gray-700 text-xl text-gray-900">
            Neuro Notion is built by ADHDers for ADHDers... We know your
            struggles, and we&apos;re here to solve them.
          </p>
        </div>
        <div className="gap-x-4 lg:gap-y-2 flex items-center justify-center mt-16 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 md:order-1 w-full min-w-[200px] md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit1.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
              height={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="max-w-[600px] flex flex-col mb-12 order-1 md:mb-0 md:order-2 lg:items-start lg:mx-4">
            <div>
              <div className="flex items-center">
                <UpArrowIcon color="#15803d" />
                <div className="text-4xl tracking-tight font-bold ml-4">
                  More Hyper-focus
                </div>
              </div>
              <div className="flex items-center mt-4">
                <DownArrowIcon color="#b91c1c" />
                <div className="text-4xl tracking-tight font-bold ml-4">
                  Less Distractions
                </div>
              </div>
            </div>
            <div className="text-xl my-8">
              Lock into your studies and get into the zone, distraction-free.
              All the focus tools you need, just one click away.
            </div>
            <div className="text-2xl font-bold flex items-center mt-4">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">Science-backed ADHD Tools.</div>
            </div>
            <div className="text-2xl font-bold flex items-center mt-8">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">Distraction Free Zone.</div>
            </div>
            <div className="text-2xl font-bold flex items-center mt-8">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">All-in-one solution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits1;
