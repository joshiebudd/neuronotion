import React from 'react';

const HPBundleSection = () => {
  return (
    <section className="flex justify-center items-center py-8 bg-white">
      <div className="relative shadow-xl px-8 py-8 bg-sec bg-opacity-15 rounded-3xl max-w-5xl mx-auto text-left">
        <div className="relative flex justify-center items-center mb-8">
          <a href="https://neuronotionn.gumroad.com/l/adhdtaskmanager?_gl=1*1x78gja*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyNTU5Ny4xNjAuMS4xNzIyNTI3MTMwLjAuMC4w" className="relative -mr-80 ml-4 z-0 transform -rotate-6 transition-transform duration-500 hover:scale-105">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/TaskManagerShadowedDemo.webp"
              alt="ADHD Notion Task Manager Template"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </a>
          <a href="#" className="relative z-1 mb-20 transform rotate-0 transition-transform duration-500 hover:scale-105">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/StudySystemShadowedDemoDark.webp"
              alt="ADHD Notion Study System Template"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </a>
          <a href="https://neuronotionn.gumroad.com/l/qnelxm?_gl=1*10n5db9*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyNTU5Ny4xNjAuMS4xNzIyNTI1NzE1LjAuMC4w" className="relative mr-4 -ml-80 z-2 transform rotate-6 transition-transform duration-500 hover:scale-105">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/RoutinesShadowDemoUpdated.webp"
              alt="ADHD Notion Mental Health Tracker Template"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className="text-center">
          <h2 className="text-3xl mt-4 text-prim font-prim font-bold">Free ADHD Notion Starter Bundle</h2>
          <p className="text-slate-700 font-prim text-md mb-4"> Get free access to 4x ADHD Notion Templates to start taking back control. </p>
          <a href="https://www.neuro-notion.com/templates" className="btn btn-primary">
          Get Templates
          </a>
          <button className="bg-prim text-sec py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim">
            Get For Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default HPBundleSection;