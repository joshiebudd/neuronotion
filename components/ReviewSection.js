import React from "react";
import IframeResizer from "iframe-resizer-react";

const ReviewSection = () => {
  return (
    <section
      id="review"
      className="content-center items-center bg-gray-100 flex flex-none
       flex-col flex-nowrap gap-5 h-min justify-start overflow-visible position-relative
        w-full"
    >
      <div className="gap-3.5 max-w-screen-sm	overflow-hidden p-10">
        <div>
          <h2 className=" text-4xl tracking-tight font-bold  leading-10	text-center">
            What customers are saying about us.
          </h2>
        </div>
        <div className="pt-3">
          <p className="text-center text-xl text-center leading-6 text-gray-700">
            Over 5,000 users have transformed their digital productivity and
            organization with Neuro Notion.
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
        scrolling="no"
      />
    </section>
  );
};

export default ReviewSection;