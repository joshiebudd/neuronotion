import React from "react";
import Image from "next/image";

const Benefits2 = () => {
  return (
    <section id="benefits" className="bg-gray-200 benefits-section">
      <div className="py-8 pb-8 sm:pb-24 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="gap-x-4 lg:gap-y-2 flex flex-wrap md:flex-nowrap items-center mt-16">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 w-full md:w-fit">
            <Image
              src="/benefit2.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="mx-12 lg:mx-4 flex flex-col items-center max-w-[600px] lg:items-start mb-12 md:mb-0 order-1">
            <div className="mb-8">
              <div className="flex items-center">
                <div className="text-4xl tracking-tight font-bold ml-2">
                  Finally, no more <br /> forgotten deadlines 😅
                </div>
              </div>
              <div className="text-xl text-right w-full md:w-fit mt-4">
                ...or awkward double bookings
              </div>
            </div>
            <div className="text-xl">
            Find peace of mind when studying. You handle the fun stuff,
            we&apos;ll handle the boring organisation.

            </div>
            <div>
              <div className="text-2xl font-bold flex items-center mt-16">
                <Image src="/tick.png" alt="Tick Icon" width={32} height={32} />
                <div className="ml-4">Built-in Reminders & Deadlines.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image src="/tick.png" alt="Tick Icon" width={32} height={32} />
                <div className="ml-4">Prioritise Important Tasks.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image src="/tick.png" alt="Tick Icon" width={32} height={32} />
                <div className="ml-4">Connect Favourite Apps.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits2;
