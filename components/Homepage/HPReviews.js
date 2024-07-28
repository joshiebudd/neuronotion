import React from "react";
import IframeResizer from "iframe-resizer-react";

const HPReviews = () => {
  return (
    <section
      id="review"
      className="flex flex-col items-center bg-white w-full overflow-visible gap-5"
    >
      <div className="text-center max-w-screen-sm p-10">
        <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
          Reviews
        </div>
        <h2 className="text-4xl tracking-tight font-baloo font-bold leading-10 text-gray-900">
          What Our Community Thinks About Us 👨‍👩‍👦‍👦
        </h2>
        <p className="pt-3 text-lg font-baloo text-gray-800">
          Over 1,000 users have transformed their systems with Neuro Notion&apos;s Templates.
        </p>
      </div>
      <IframeResizer
        className="w-full px-10 md:px-64"
        style={{ marginBottom: "30px" }}
        src="https://widget.senja.io/widget/d2b3e6ba-b6ed-47f2-8c12-3fb4bfae5ed1"
        scrolling="yes"
      />
    </section>
  );
};

export default HPReviews;
