import React from "react";

const FinalCTA = () => {
  const handleBottomBuyNowClick = (e) => {
    logBottomBuyNowEvent(); // Log the BottomBuyNowClick event
  };

  const logBottomBuyNowEvent = () => {
    // Log event to Facebook Pixel for Bottom Buy Now click
    fbq("trackCustom", "BottomBuyNowClick");
  };

  return (
    <section className="pt-12 pb-12 bg-white Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900">
          Silence the ADHD Chaos. <br /> Make Studying Easy.
        </h1>

        <p className="mb-6 text-xl font-normal text-black sm:px-16 xl:px-48">
          The second brain for studying. Bring revision notes, flashcards,
          projects, <br />
          deadlines and ADHD focus tools into one place.
        </p>

        {/* Get NeuroNotes Button (Below "Must-have focus tools" text and above stars) */}
        <div className="mt-4">
          {" "}
          {/* Increased margin-top for spacing */}
          <a
            href="#pricing"
            onClick={handleBottomBuyNowClick}
            className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Buy Now
          </a>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-center">
          <span className="mt-4 mb-0 text-3xl leading-none text-orange-600">
            ★★★★★
          </span>
        </div>
        <span className="mt-0 mb-0 text-md text-gray-800">
          4.89/5 from 500+ ADHDers.
        </span>
      </div>
    </section>
  );
};

export default FinalCTA;
