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
    <section className="pt-12 pb-12 px-4 bg-white Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 text-center lg:px-16">
      <h1 className="mb-4 text-4xl font-baloo font-bold leading-none tracking-tight text-gray-900">
 Silence the ADHD Chaos. <br />
 <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
   Make Studying Easy.
 </span>
</h1>

        <p className="mb-6 text-xl font-baloo font-regular text-black sm:px-16">
          The <b> second brain for studying </b>. Bring revision notes, flashcards,
          projects, <br />
          deadlines and ADHD focus tools into one place.
        </p>

        <div className="mt-4">
          {" "}
        <a
            href="#pricing"
            onClick={handleBottomBuyNowClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get for Free.
          </a>
        </div>

{/* Star Rating */}
<div className="mb-2 flex justify-center">
  <span className="mt-4 mb-0 text-3xl leading-none text-blue-300">
    ★★★★★
  </span>
</div>
<span className="mt-0 mb-0 text-md font-baloo text-gray-800">
  <a href="#review" className="underline">
    4.86/5
  </a>{" "}
  from 500+ ADHDers.
</span>
      </div>
    </section>
  );
};

export default FinalCTA;
