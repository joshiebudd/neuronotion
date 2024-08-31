import React from "react";

const Solution = ({ title, description, iconUrl }) => (
  <div className="flex flex-col items-center max-w-xs w-full lg:max-w-none px-2 mb-8">
    <div className="h-[120px] flex items-center justify-center mb-2">
      <img src={iconUrl} alt={title} style={{ width: '160px', height: '160px' }} />
    </div>
    <div className="h-[25px] flex items-center justify-center mb-1">
      <p className="font-pop font-bold text-xl text-prim text-center">{title}</p>
    </div>
    <p className="max-w-full text-center text-gray-700 font-cg text-md">
      {description}
    </p>
  </div>
);

const UBSolution = () => {
  const solutions = [
    {
      title: "Regain Control of your ADHD",
      description: "Let the system handle the executive function tasks that your brain is rubbish at.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/regainingcontrol.webp"
    },
    {
      title: "Peace of mind",
      description: "Everything in one place, automatically organised for you.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/peace.webp"
    },
    {
      title: "Thriving in all areas",
      description: "Routines in check, on top of tasks, progressing towards goals.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/thriving.webp"
    }
  ];

  return (
    <div className="pt-6 px-4 lg:px-0 mt-16 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-prim font-bold text-3xl lg:text-3xl text-prim mb-2">But it doesn&apos;t have to be like that:</h1>
        <p className="text-base text-sec font-cg mb-12">With the Ultimate ADHD brain, all you have to do is brain dump, and the system handles the rest for you.</p>
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start justify-center items-center space-y-8 lg:space-y-0 lg:space-x-4">
          {solutions.map((solution, index) => (
            <Solution key={index} title={solution.title} description={solution.description} iconUrl={solution.iconUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UBSolution;
