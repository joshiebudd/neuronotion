import React from "react";

const steps = [
  "Duplicate",
  "Duplicate",
  "Duplicate"
];

const UBSetUp = () => {
  return (
    <div className="lg:px-0 px-8">
      <h1 className="font-bold text-2xl lg:text-[30px] text-center mt-10">Your perfect system, in just 10 minutes</h1>
      <div className="flex space-x-4 lg:mx-auto lg:w-2/3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center lg:pt-4 lg:space-y-4">
            <span className="font-bold text-2xl lg:text-[60px]">{index + 1}</span>
            <span className="font-bold text-xl lg:text-[30px]">{step}</span>
            <p className="text-center">Checkout, Access via email, and Duplicate to your Notion space.</p>
          </div>
        ))}
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default UBSetUp;
