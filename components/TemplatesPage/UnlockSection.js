import React from "react";

const UnlockSection = () => {
  return (
    <section className="flex justify-center items-center pt-20 md:pt-32 md:pb-32 py-8 px-4 bg-white">
      <div className="relative shadow-xl px-8 py-8 md:px-16 bg-accent3 bg-opacity-10 rounded-3xl max-w-6xl md:max-w-7xl mx-auto text-left flex flex-col md:flex-row items-center">
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-center md:text-left font-prim font-bold text-prim mb-4">
            Unlock everything for 50% OFF
          </h2>
          <p className="text-base md:text-lg text-center md:text-left text-gray-700 font-sec mb-6">
            Get access to all current and future templates with one single payment.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-prim text-sec py-3 px-8 md:px-10 font-prim font-bold rounded-xl text-lg md:text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim transition-colors duration-300">
              Coming Soon!
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-center items-center p-2 md:p-6">
          <div className="relative flex items-center justify-center md:justify-start">
            <div className="absolute transform rotate-12 w-full">
              <img
                src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/StudySystemShadowedDemoDark.webp"
                alt="Template 1"
              />
            </div>
            <div className="absolute transform rotate-3 md:rotate-6 w-full">
              <img
                src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/TaskManagerShadowedDemo.webp"
                alt="Template 2"
              />
            </div>
            <div className="relative transform -rotate-6 md:-rotate-0 w-full">
              <img
                src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/UBDarkModeDemoRoundedShadowFinal.webp"
                alt="Template 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
