import React from "react";
import Image from "next/image";

const Benefits2 = () => {
  return (
    <section id="benefits" className="bg-gray-100 benefits-section">
      <div className="py-8 pb-8 sm:pb-24 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="gap-x-4 lg:gap-y-2 flex justify-center flex-wrap md:flex-nowrap items-center mt-16">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 order-2 w-full md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit2.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
              height={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="lg:mx-4 flex flex-col max-w-[600px] items-start mb-12 md:mb-0 order-1">
            <div className="mb-8 w-full flex items-end flex-col">
              <div className="flex items-center w-full">
                <div className="text-4xl tracking-tight font-bold ml-2">
                  Finally, no more <br /> forgotten deadlines 😅
                </div>
              </div>
              <div className="text-xl text-right w-full md:w-fit mt-4 sm:mr-12">
                ...or awkward double bookings
              </div>
            </div>
            <div className="text-xl">
              Put an end to forgetting important things. Neuro Notion makes
              remembering the stuff easy, so you can hyper-focus on what really
              matters.
            </div>
            <div>
              <div className="text-2xl font-bold flex items-center mt-16">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4">Built-in reminders</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4">Prioritise important tasks.</div>
              </div>
              <div className="text-2xl font-bold flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4">Connect favourite apps.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits2;
