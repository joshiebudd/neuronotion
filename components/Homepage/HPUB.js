import React from 'react';

const HPUBSection = () => {
  return (
    <section className="flex justify-center items-center py-8 pb-20 bg-white">
      <div className="shadow-lg px-24 py-16 bg-accent2 bg-opacity-5 rounded-3xl max-w-5xl mx-auto text-left">
        <div>
          <img src="https://NeuroNotionPullZonw.b-cdn.net/MainPageCroppedRoundedGlowPNG.png" alt="ADHD Notion Starter Bundle" className="px-8 py-4 w-full max-w-5xl"/>
        </div>
        <div className="flex justify-between items-center">
          <div>
          <h2 className="text-3xl mt-4 text-prim font-prim font-bold">Your new best friend... <br /> <span className="text-accent1">Ultimate ADHD Brain 2.0</span></h2>
          <p className="text-slate-700 font-prim text-md mb-4"> Let your executive function relax for once... offload <br /> everything into an all-in-one life management platform.</p>
          </div>
          <button className="bg-prim text-sec py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim">Get For Free</button>
          </div>
      </div>
    </section>
  );

}

export default HPUBSection;
