import React from "react";

const Problem = ({ title, description, iconUrl }) => (
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

const UBProblems = () => {
  const problems = [
    {
      title: "Brain is Overwhelmed",
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/overwhelmed.webp"
    },
    {
      title: "Chaotic Organisation",
      description: "17 different apps. 10 different subscriptions. Yet still no feeling of calm.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/chaotic.webp"
    },
    {
      title: "Just scraping by...",
      description: "Never thriving. Only surviving. Scraping by each day.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/Icons%20WEBP/scraping.webp"
    }
  ];

  return (
    <div className="pt-6 px-4 lg:px-0 mt-16 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-prim font-bold text-2xl lg:text-3xl text-prim mb-2">All ADHDers have these problems:</h1>
        <p className="text-base text-sec font-cg mb-6">As a team of ADHDers ourselves, we&apos;ve been here before...</p>
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start justify-center items-center space-y-8 lg:space-y-0 lg:space-x-4">
          {problems.map((problem, index) => (
            <Problem key={index} title={problem.title} description={problem.description} iconUrl={problem.iconUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UBProblems;
