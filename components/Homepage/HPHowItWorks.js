import React from 'react';


const HPHowItWorksSection = () => {
  return (
    <section className="text-center py-28 bg-accent4 bg-opacity-10 custom-rounded-t">
      <h2 className="text-5xl font-prim font-bold mb-8">How It Works</h2>
      <div className="flex justify-center space-x-12 items-center">
        <div>
          <div className="text-9xl text-prim font-bold hover:text-sec transition-colors duration-300">1</div>
          <p className="text-xl font-prim text-prim text-opacity-80">
            <span className="text-3xl font-prim font-bold text-prim">Choose</span> <br />a template
          </p>
        </div>
        <div className="flex items-center">
          <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 h-8 opacity-70" />
        </div>
        <div>
          <div className="text-9xl text-prim font-bold hover:text-sec transition-colors duration-300">2</div>
          <p className="text-xl font-prim text-prim text-opacity-80">
            <span className="text-3xl font-prim font-bold text-prim">Access</span> <br />via email
          </p>
        </div>
        <div className="flex items-center">
          <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 h-8 opacity-70" />
        </div>
        <div>
          <div className="text-9xl text-prim font-bold hover:text-sec transition-colors duration-300">3</div>
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
    </section>
  );
}

export default HPHowItWorksSection;
