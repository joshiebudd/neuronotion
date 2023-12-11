import React from 'react';

const FinalCTA = () => {

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const topPosition = pricingSection.offsetTop + (pricingSection.offsetHeight / 2) - (window.innerHeight / 2);
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <section className="pt-52 pb-52 bg-gray-50 Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">Silence the ADHD Chaos. <br /> Make Studying Easy.</h1>

        <p className="mb-6 text-lg font-normal text-black sm:px-16 lg:text-xl xl:px-48">The second brain for studying. Bring revision notes, flashcards, projects, <br />deadlines and ADHD focus tools into one place.</p>

        {/* Get NeuroNotes Button (Below "Must-have focus tools" text and above stars) */}
        <div className="mt-4"> {/* Increased margin-top for spacing */}
        <a href="#pricing" onClick={handleButtonClick} className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
Get Neuro Notion</a>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-center">
          <span className="mt-4 mb-0 text-3xl leading-none text-black">★★★★★</span>
        </div>
        <span className="mt-0 mb-0 text-md text-gray-800">4.89/5 from 500+ ADHDers.</span>
      </div>
    </section>
  );
};

export default FinalCTA;
