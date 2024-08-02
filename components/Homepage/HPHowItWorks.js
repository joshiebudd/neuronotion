import React from 'react';

const HPHowItWorksSection = () => {
  return (
    <section className="text-center pb-20 md:pb-40 bg-opacity-10">
      <div className="relative shadow-xl px-4 md:px-8 py-8 md:py-16 bg-accent2 bg-opacity-10 rounded-3xl max-w-5xl mx-4 md:mx-auto">
        <h2 className="text-3xl md:text-5xl text-prim font-pop font-bold mb-6 md:mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-12 items-center mb-8 md:mb-12 space-y-8 md:space-y-0">
          <div className="text-center">
            <div className="text-6xl md:text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">1</div>
            <p className="text-lg md:text-xl font-prim text-prim text-opacity-80">
              <span className="text-2xl md:text-3xl font-prim font-bold text-prim">Choose</span> <br />a template
            </p>
          </div>
          <div className="flex items-center transform rotate-90 md:rotate-0">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-6 h-6 md:w-8 md:h-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">2</div>
            <p className="text-lg md:text-xl font-prim text-prim text-opacity-80">
              <span className="text-2xl md:text-3xl font-prim font-bold text-prim">Access</span> <br />via email
            </p>
          </div>
          <div className="flex items-center transform rotate-90 md:rotate-0">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-6 h-6 md:w-8 md:h-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">3</div>
            <p className="text-lg md:text-xl font-prim text-prim text-opacity-80">
              <span className="text-2xl md:text-3xl font-prim font-bold text-prim">Duplicate</span> <br />to Notion
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <a href="https://www.neuro-notion.com/templates" className="bg-prim text-sec py-3 px-8 md:px-10 font-prim font-bold rounded-xl text-lg md:text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim transition-colors duration-300 inline-block">
            Browse Templates
          </a>
        </div>
      </div>
    </section>
  );
}

export default HPHowItWorksSection;
