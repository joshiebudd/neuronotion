import React from "react";

const problems = [
  "Brain is Overwhelmed",
  "Brain is Overwhelmed",
  "Brain is Overwhelmed"
];

const UBProblems = () => {
  return (
    <div className="pt-10 lg:px-0 px-8">
      <h1 className="text-center font-bold text-2xl lg:text-[40px]">All ADHDers have these problems:</h1>
      <p className="pt-4 text-center text-lg">As a team of ADHDers ourselves, we&apos;ve been here before...</p>
      <div className="pt-4 flex justify-evenly">
        {problems.map((problem, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center">{problem}</p>
            <p className="max-w-72 text-center">
              Too much to remember, too many things to keep on top of, not enough time or energy to do it all.
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default UBProblems;
