import React from "react";

const Howitworks = () => {
  return (
    <section className="text-center pb-20 bg-opacity-10 mt-28 mb-20">
      <div className="relative shadow-xl px-20 py-20 bg-sec bg-opacity-15 rounded-3xl max-w-5xl mx-auto">
        <h2 className="text-5xl text-prim font-prim font-bold mb-8">How it works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">1</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Choose</span> <br />a template.
            </p>
          </div>
          <div className="flex items-center">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">2</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Access</span> <br />via email.
            </p>
          </div>
          <div className="flex items-center">
            <img src="https://NeuroNotionPullZonw.b-cdn.net/reshot-icon-share-arrow-WS4HD3PU8X-325a1.svg" alt="Arrow" className="w-8 opacity-70" />
          </div>
          <div className="text-center">
            <div className="text-9xl text-prim text-opacity-85 font-bold hover:text-sec transition-colors duration-300">3</div>
            <p className="text-xl font-prim text-prim text-opacity-80">
              <span className="text-3xl font-prim font-bold text-prim">Duplicate</span> <br />to your Notion.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">

        </div>
      </div>
    </section>
  );
};

export default Howitworks;
