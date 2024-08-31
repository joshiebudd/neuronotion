import React from "react";

const UBClarity = () => {
  return (
    <div className="px-8 lg:px-0 pt-10 mt-16 bg-white text-center">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">Transform your chaos into clarity:</h1>
      <p className="pt-4 text-lg text-sec font-cg">in just a few clicks</p>
      <div className="bg-gray-200 rounded-3xl flex items-center justify-center aspect-video my-8 lg:mx-60">
        <video
          className="rounded-3xl w-full h-full"
          controls
          src="https://NeuroNotionPullZonw.b-cdn.net/Introducing%20UAB%202.0.mp4"
          alt="Introducing UAB 2.0"
        />
      </div>
      
      {/* Testimonial */}
      <div className="flex justify-center items-center mb-16 px-4 lg:px-0">
        <div className="flex flex-col items-center text-center max-w-md w-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-accent4 mb-4">★★★★★</span>
              <div className="flex-grow flex items-center justify-center">
                <span className="text-gray-700 font-cg font-normal">
                  This template is an unbelievable <b>all-in-one system</b> with incredible automation. It&apos;s perfect for use <b>out of the box</b> with super clear instructions at every page. <b>I would highly recommend it to anyone with ADHD.</b>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2 mx-auto overflow-hidden">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Avatars/Bruno.webp"
                  alt="Bruno Gomes"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-pop font-bold text-prim block">
                Bruno Gomes
              </span>
              <span className="text-gray-500 font-cg block">
                Biomedical Scientist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UBClarity;
