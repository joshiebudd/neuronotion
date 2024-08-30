import React from "react";

const steps = [
  {
    title: "Duplicate",
    description: "Checkout, Access &\nDuplicate to Notion."
  },
  {
    title: "Set Up",
    description: "Follow full video walkthrough (5 mins)"
  },
  {
    title: "Customize",
    description: "Make it your own. Be chaotic."
  }
];

const UBSetUp = () => {
  return (
    <div className="mt-20 bg-white text-center py-16">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">
        Your perfect system, in just 10 minutes
      </h1>
      <div className="shadow-xl px-2 md:px-4 py-8 md:py-16 bg-accent2 bg-opacity-10 rounded-3xl max-w-3xl mx-auto mt-16 min-h-[400px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center pt-4 space-y-4"
            >
              <span className="font-pop font-bold text-8xl text-prim">
                {index + 1}
              </span>
              <span className="font-pop font-bold text-xl lg:text-[30px] text-sec">
                {step.title}
              </span>
              <p className="text-center text-gray-700 font-cg mt-4 whitespace-pre-line">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UBSetUp;
