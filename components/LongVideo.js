import React from "react";
import CourseFormBeta from "./CourseFormBeta";

const LongVideo = () => {
  return (
    <section className="px-4 bg-gray-100 pt-36 sm:pt-32">
      <div className="text-center">
        <div className="flex justify-center pb-6">
          <h2 className="md:max-w-[600px]  text-2xl md:text-4xl  font-bold leading-6 text-center ">
          Make ADHD your Superpower with a Study Focus System
          </h2>
        </div>
        <div className="timer-widget flex justify-center height-auto pt-4 pb-8">
          <div className="inline-block p-0 rounded-lg overflow-hidden">
            <video
              className="w-7/10 rounded-lg"
              controls
              poster="https://NeuroNotionPullZonw.b-cdn.net/LongThumbSquare.png"
            >
              <source
                src="https://NeuroNotionPullZonw.b-cdn.net/longsquare.mp4"
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
