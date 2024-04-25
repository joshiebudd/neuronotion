import React from "react";
import Image from "next/image";

const Benefits2 = () => {
  return (
    <section
      id="benefits"
      className="bg-white benefits-section flex justify-center"
    >
      <div className="py-1 pb-8 sm:pb-12 px-8 mx-auto max-w-screen-xl">
        <div className="gap-x-4 lg:gap-y-2 flex justify-center flex-wrap md:flex-nowrap items-center mt-14">
          <div className="flex items-center text-center justify-center mb-2 mt-2 order-2 w-full md:w-fit">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/benefit2.webp"
              alt="Features Showcase"
              width={360}
              height={360}
            />
          </div>
          <div className="lg:mx-4 flex flex-col max-w-[600px] items-start mb-12 md:mb-0 order-1">
            <div className="mb-8 w-full flex items-end flex-col">
              <div className="flex items-center w-full">
                <div className="text-4xl font-baloo font-bold text-gray-800">
                  No more{" "}
                  <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
                    {" "}
                    forgetting{" "}
                  </span>{" "}
                  deadlines 😅
                </div>
              </div>
              <div className="text-xl text-right font-baloo font-semibold w-full md:w-fit mt-4 sm:mr-12">
                ...or awkward double bookings
              </div>
            </div>
            <div className="text-xl font-baloo mb-8">
              Never forget deadlines again. <br /> Make remembering stuff easy.
              <br /> So you can hyper-focus on what{" "}
              <span className="font-baloo font-bold">really</span> matters.
            </div>
            <div>
              <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4">Built-in reminders.</div>
              </div>
              <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4">Prioritise important tasks.</div>
              </div>
              <div className="text-2xl font-baloo font-semibold text-gray-900 flex items-center mt-6">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/blueTick.webp"
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