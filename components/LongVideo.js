import React from "react";
import CourseFormBeta from "./CourseFormBeta";

const LongVideo = () => {
  return (
    <section className="px-4 bg-gray-100 pt-24 sm:pt-32">
      <div className="text-center">
        <div className="flex justify-center pb-12">
          <h2 className="md:max-w-[600px]  text-xl md:text-4xl  font-bold leading-5 text-center ">
            WATCH THIS LONG FORM VIDEO BELOW TO FIND OUT HOW TO DO XYZ. REPLACE
            COPY
          </h2>
        </div>
        <div className="timer-widget flex justify-center height-auto pt-4 pb-16">
          <div className="inline-block p-0 rounded-lg overflow-hidden">
            <video
              className="w-7/10 rounded-lg"
              controls
              poster="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/thumbnailfordemo.png"
            >
              <source
                src="https://neuronotionpullzonw.b-cdn.net/ProductDemoFinal.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <CourseFormBeta />
    </section>
  );
};

export default LongVideo;