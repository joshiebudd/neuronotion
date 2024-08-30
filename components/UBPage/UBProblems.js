import React from "react";

const Problem = ({ title, description, iconUrl }) => (
  <div className="flex flex-col items-center max-w-xs lg:max-w-none px-4 mb-8">
    <img src={iconUrl} alt={title} className="mb-4" style={{ width: '72px', height: '72px' }} />
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
      description: "Too much to remember, too many things to keep on top of, not enough time or energy to do it all.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/icon%20svgs/scramble.png"
    },
    {
      title: "Chaotic Organisation",
      description: "17 different apps. 10 different subscriptions. Yet still no feeling of calm.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/icon%20svgs/scatteredpuzzle.svg"
    },
    {
      title: "Just scraping by...",
      description: "Never thriving. Only surviving. Scraping by each day.",
      iconUrl: "https://NeuroNotionPullZonw.b-cdn.net/icon%20svgs/mid.svg"
    }
  ];

  return (
    <div className="pt-10 lg:px-0 px-8 mt-32 bg-white text-center">
      <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">All ADHDers have these problems:</h1>
      <p className="pt-4 text-lg text-sec font-cg">As a team of ADHDers ourselves, we&apos;ve been here before...</p>
      <div className="pt-12 mx-48 flex flex-col lg:flex-row justify-evenly items-center">
        {problems.map((problem, index) => (
          <Problem key={index} title={problem.title} description={problem.description} iconUrl={problem.iconUrl} />
        ))}
      </div>
    </div>
  );
};

export default UBProblems;
