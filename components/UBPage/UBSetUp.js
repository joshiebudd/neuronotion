import React from "react";

const steps = [
  "Duplicate",
  "Duplicate",
  "Duplicate"
];

const UBSetUp = () => {
  return (
    <div className="lg:px-0 px-8 bg-white text-center py-10">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">Your perfect system, in just 10 minutes</h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-auto lg:w-2/3 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center lg:pt-4 lg:space-y-4 px-4 mb-8 lg:mb-0">
            <span className="font-pop font-bold text-4xl lg:text-[60px] text-prim">{index + 1}</span>
            <span className="font-pop font-bold text-xl lg:text-[30px] text-sec">{step}</span>
            <p className="text-center text-gray-700 font-cg mt-4">Checkout, Access via email, and Duplicate to your Notion space.</p>
          </div>
        ))}
      </div>
      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default UBSetUp;
