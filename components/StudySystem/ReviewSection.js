import React from "react";
import IframeResizer from "iframe-resizer-react";

const ReviewSection = () => {
  return (
    <section
      id="review"
      className="content-center items-center bg-white flex flex-none
       flex-col flex-nowrap gap-5 h-min justify-start overflow-visible position-relative
        w-full"
    >
      <div className="gap-3.5 max-w-screen-sm	text-center overflow-hidden p-10">
      <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
            Reviews
            </div>
        <div>
          <h2 className=" text-4xl sm:px-24 tracking-tight font-baloo font-bold leading-10	text-gray-900">
            What Our Community Thinks About Us 👨‍👩‍👦‍👦
          </h2>
        </div>
        <div className="pt-3">
          <p className="sm:px-24 text-lg font-baloo text-center leading-6 text-gray-800">
            Over 1,000 users have transformed their systems with Neuro Notion&apos;s Templates.
          </p>
        </div>
      </div>
      <IframeResizer
        className="px-10 md:px-64"
        style={{
          width: "100%",
          marginBottom: "30px",
        }}
        src="https://widget.senja.io/widget/d2b3e6ba-b6ed-47f2-8c12-3fb4bfae5ed1"
        scrolling="yes"
      />
    </section>
  );
};

export default ReviewSection;
