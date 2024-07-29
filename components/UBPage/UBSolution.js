import React from "react";

const Solution = ({ title, description }) => (
  <div className="flex flex-col items-center max-w-xs lg:max-w-none px-4 mb-8">
    <div className="rounded-full border-2 w-20 h-20 bg-white flex items-center justify-center mb-4 shadow-md">
      {/* Placeholder for image or icon */}
    </div>
    <p className="font-pop font-bold text-xl text-prim">{title}</p>
    <p className="max-w-72 text-center text-gray-700 font-cg mt-4">
      {description}
    </p>
  </div>
);

const UBSolution = () => {
  const solutions = [
    {
      title: "Brain is Overwhelmed",
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all."
    },
    {
      title: "Brain is Overwhelmed",
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all."
    },
    {
      title: "Brain is Overwhelmed",
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all."
    }
  ];

  return (
    <div className="pt-10 lg:px-0 px-8 mt-32 bg-white text-center">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">But it doesn&apos;t have to be like that:</h1>
      <p className="pt-4 text-lg text-sec font-cg">With the Ultimate ADHD brain, all you have to do is brain dump, and the system handles the rest for you.</p>
      <div className="pt-12 mx-48 flex flex-col lg:flex-row justify-evenly items-center">
        {solutions.map((solution, index) => (
          <Solution key={index} title={solution.title} description={solution.description} />
        ))}
      </div>
      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default UBSolution;