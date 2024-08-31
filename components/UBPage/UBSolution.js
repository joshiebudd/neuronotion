import React from "react";

const Solution = ({ title, description, iconUrl }) => (
  <div className="flex flex-col items-center max-w-xs lg:max-w-none px-2 mb-4">
    <img src={iconUrl} alt={title} className="mb-2" style={{ width: '144px', height: '144px' }} />
    <p className="font-pop font-bold text-xl text-prim">{title}</p>
    <p className="max-w-72 text-center text-gray-700 font-cg">
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
    <div className="pt-10 lg:px-0 px-4 mt-32 bg-white text-center">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">But it doesn&apos;t have to be like that:</h1>
      <p className="pt-4 text-lg text-sec font-cg">With the Ultimate ADHD brain, all you have to do is brain dump, and the system handles the rest for you.</p>
      <div className="pt-12 mx-48 flex flex-col lg:flex-row justify-evenly items-center">
        {solutions.map((solution, index) => (
          <Solution key={index} title={solution.title} description={solution.description} iconUrl={solution.iconUrl} />
        ))}
      </div>
    </div>
  );
};

export default UBSolution;
