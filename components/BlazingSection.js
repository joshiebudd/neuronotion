import React from "react";
import Image from "next/image";

const BlazingSection = () => {
  const handleButtonClick = () => {
    // Add your button click handler logic here
  };

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
              <div className="text-2xl font-baloo text-gray-900 flex items-center mt-4">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/1-min.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <p className="ml-2">
                  <span className="font-bold">Access:</span>{" "}
                  <span className="font-regular">
                    Get an email with the templace and access to in-depth
                    tutorials.
                  </span>
                </p>
              </div>
              <div className="text-2xl font-baloo text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/2-min.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <p className="ml-2">
                  <span className="font-bold">Add to Notion:</span>{" "}
                  <span className="font-regular">
                    Sign in/Register with Notion to add it to your personal
                    workspace.
                  </span>
                </p>
              </div>
              <div className="text-2xl font-baloo text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/3-min.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <p className="ml-2">
                  <span className="font-bold">Make it your own:</span>{" "}
                  <span className="font-regular">
                    Customise to your subjects and deadlines in less than 60
                    seconds.
                  </span>
                </p>
              </div>
              <div className="text-2xl font-baloo text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/4-min.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <p className="ml-2">
                  <span className="font-bold">Import:</span>{" "}
                  <span className="font-regular">
                    Import your notes/flashcards from Notion or another app.
                  </span>
                </p>
              </div>
              <div className="text-2xl font-baloo text-gray-900 flex items-center mt-8">
                <Image
                  src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/tick_orange.png"
                  alt="Tick Icon"
                  width={32}
                  height={32}
                />
                <p className="ml-2">
                  <span className="font-bold">Ready to go!:</span>{" "}
                  <span className="font-regular">
                    Stay laser-focused, for longer, without distractions.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-orange-400 to-orange-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get for Free.
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlazingSection;