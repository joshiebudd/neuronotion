import React from "react";

const Problem = ({ title, description }) => (
  <div className="flex flex-col items-center max-w-xs lg:max-w-none px-4 mb-8">
    <div className="rounded-full border-2 w-20 h-20 bg-white flex items-center justify-center mb-4 shadow-md">
      {/* Placeholder for image or icon */}
    </div>
    <p className="font-pop font-bold text-xl text-prim">{title}</p>
    <p className="max-w-72 text-center text-gray-700 font-cg">
      {description}
    </p>
  </div>
);

const UBProblems = () => {
  const problems = [
    {
      title: "Brain is Overwhelmed",
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all."
    },
    {
      title: "Chaotic Organisation",
      description: "17 different apps. 10 different subscriptions. Yet still no feeling of calm."
    },
    {
      title: "Just scraping by...",
      description: "Never thriving. Only surviving. Scraping by each day."
    }
  ];

  return (
    <div className="pt-10 lg:px-0 px-8 mt-32 bg-white text-center">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">All ADHDers have these problems:</h1>
      <p className="pt-4 text-lg text-sec font-cg">As a team of ADHDers ourselves, we&apos;ve been here before...</p>
      <div className="pt-12 mx-48 flex flex-col lg:flex-row justify-evenly items-center">
        {problems.map((problem, index) => (
          <Problem key={index} title={problem.title} description={problem.description} />
        ))}
      </div>
    </div>
  );
};

export default UBProblems;