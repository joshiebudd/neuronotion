import React from "react";
import Image from "next/image";

const Benefits1 = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-2 pb-8 sm:pb-24 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center mb-1 mt-2">
        <h2 className="text-4xl font-baloo font-bold text-gray-800">
 Built by 
 <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
  {' '} ADHD </span> experts.{' '}
 <span className="sm:block">
  For <span className="from-blue-400 to-blue-700 bg-gradient-to-tl bg-clip-text text-transparent">
  {' '} ADHD</span> students ✨</span>
</h2>
<p className="mt-2 text-gray-700 text-lg font-baloo font-regular text-gray-900">
  We know your struggles,{' '}
  <span className="inline sm:inline-block">
    and we&apos;re here to solve them.
  </span>
</p>
        </div>
        <div className="gap-x-4 lg:gap-y-2 flex items-center justify-center mt-16 flex-wrap md:flex-nowrap">
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 md:order-1 w-full min-w-[200px] md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit1.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
              height={320}
            />
          </div>

          <div className="max-w-[600px] flex flex-col mb-12 order-1 md:mb-0 md:order-2 lg:items-start lg:mx-4">
            <div>
              <div className="flex items-center">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueArrowUp.webp"
                alt="Blue Up Arrow"
                width={48}
                height={48}
              />
                <div className="text-4xl tracking-tight font-baloo font-bold text-gray-900 ml-4">
        More <span className="from-blue-400 to-blue-700 bg-gradient-to-br bg-clip-text text-transparent">Hyperfocus</span>
      </div>
              </div>
              <div className="flex items-center mt-4">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/redArrowDown.webp"
                alt="Blue Up Arrow"
                width={48}
                height={48}
              />
                <div className="text-4xl tracking-tight font-baloo font-bold text-gray-900 ml-4">
                  Less Distractions
                </div>
              </div>
            </div>
            <div className="text-xl font-baloo font-normal my-6">
              Lock into your studies and get into the zone, distraction-free.
              All the focus tools you need, just one click away.
            </div>
            <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">Science-backed Tools.</div>
            </div>
            <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">Distraction Free Zone.</div>
            </div>
            <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
              <Image
                src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                alt="Tick Icon"
                width={32}
                height={32}
              />
              <div className="ml-4">Made for ADHDers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits1;
