import React from "react";

const solutions = [
  "Brain is Overwhelmed",
  "Brain is Overwhelmed",
  "Brain is Overwhelmed"
];

const UBSolution = () => {
  return (
    <div className="pt-10 lg:px-0 px-8 ">
      <h1 className="text-center font-bold text-2xl lg:text-[40px]">But it doesn&apos;t have to be like that:</h1>
      <p className="text-center text-lg">With the Ultimate ADHD brain, all you have to do is brain dump, and the system handles the rest for you.</p>
      <div className="flex justify-evenly pt-4">
        {solutions.map((solution, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center">{solution}</p>
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

export default UBSolution;
