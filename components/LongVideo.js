import React from "react";
import CourseFormBeta from "./CourseCampaign/CourseFormBeta";
import FunnelCopyBeta from "./CourseCampaign/FunnelCopyBeta";

const LongVideo = () => {
  return (
    <section className="px-4 bg-gray-100 pt-24 sm:pt-32">
      <div className="text-center">
        <div className="flex justify-center pb-6">
        <h2 className="md:max-w-[600px] text-2xl md:text-4xl leading-6 text-center">
  <span className="font-bold">[</span>
  <span className="font-extrabold text-red-700">NEW</span>
  <span className="font-bold">]</span>{" "}
  <span className="font-bold text-black">
    Final Year Uni Student With ADHD Reveals the System He Uses to Switch into Focus within 2-6 Minutes When He Needs to Study!
  </span>
</h2>
        </div>
        <h3 className="font-bold text-center mt-4">Plus: A tool you can download for FREE right now to help you focus! (No email required)</h3>
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
      <FunnelCopyBeta />
      <CourseFormBeta />
    </section>
  );
};

export default LongVideo;
