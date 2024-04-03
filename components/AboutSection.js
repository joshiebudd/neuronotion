import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-blue-50 About_NeuroNotion">
      <div className="py-12 sm:px-16 px-4 mx-auto max-w-screen-xl sm:px-6 text-center">
      <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
            About us
            </div>
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-baloo font-bold text-gray-900">
            About Neuro Notion
          </h2>
          <p className="mb-4 mt-6 font-baloo text-xl">
            Neuro Notion was <b>founded out of frustration </b> for a lack of tools for
            people with ADHD. There are so many amazing productivity tools out
            there, Notion being one of them, but using 10 different apps only
            leads to <b>inevitable distractions. </b> 
            <br /> 
            <br /> 
            So, we made it our
            job to create something <b>simple, but mightily impressive </b> that would
            leave no choice but to stay focused. 
            <br />
            <br /> We spoke to countless ADHDers and <b> listened to what they wanted </b> in a tool like
            this - and made exactly that. All of our team use it and find it
            extremely helpful - and we hope you do too!
            <br />
            <br />
          </p>
          <p className="mb-4 font-baloo font-medium italic text-xl text-gray-900">
            We would love to hear your thoughts or testimonials to display on
            our website - please reach out and contact the team!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
