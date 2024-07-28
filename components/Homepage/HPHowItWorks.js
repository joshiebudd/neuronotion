import React from 'react';

const HPHowItWorksSection = () => {
  return (
    <section className="text-center pb-40 bg-opacity-10">
      <div className="relative shadow-xl px-8 py-16 bg-accent4 bg-opacity-20 rounded-3xl max-w-5xl mx-auto">
        <h2 className="text-5xl font-prim font-bold mb-8">How It Works</h2>
        <div className="flex justify-center space-x-12 items-center mb-12">
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">1</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Choose</span> <br />a template
            </p>
          </div>
          <div className="flex items-center">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 h-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">2</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Access</span> <br />via email
            </p>
          </div>
          <div className="flex items-center">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 h-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">3</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Duplicate</span> <br />to Notion
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-prim text-sec py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim transition-colors duration-300">
            Browse Templates
          </button>
        </div>
      </div>
    </section>
  );
}

export default HPHowItWorksSection;
