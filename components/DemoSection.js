import React from 'react';

const DemoSection = () => {
  return (
    <section className="bg-gray-50 demo-section pt-10 mt-16">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-black md:text-5xl lg:text-4xl">A peek under the hood</h1>
        <p className="mb-4 text-sm font-normal text-black sm:px-16 lg:text-md md:px-48">Eliminate the struggles of being distracted when juggling programs and tabs. Ease into a streamlined experience.</p>

        <div className="inline-block p-0 border-8 border-gray-300 border-opacity-20 rounded-lg overflow-hidden">
          <img src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/bigdemoannotated.webp" width="1000" height="1200" alt="annotated version of module page" className="centered-image" loading="lazy" />
        </div>

        <div className="mt-4">
          <a href="#pricing" className="StandardCheckoutButton inline-block rounded-xl bg-black mt-2 px-4 py-4 text-xl font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-600">Get Neuro Notion</a>
        </div>

        {/* Stars */}
        <div className="mb-2 flex justify-center">
          <span className="mt-3 mb-0 text-3xl leading-none text-black text-xl">★</span>
          <span className="mt-3 mb-0 text-3xl leading-none text-black text-xl">★</span>
          <span className="mt-3 mb-0 text-3xl leading-none text-black text-xl">★</span>
          <span className="mt-3 mb-0 text-3xl leading-none text-black text-xl">★</span>
          <span className="mt-3 mb-0 text-3xl leading-none text-black text-xl">★</span>
        </div>

        {/* Testimonial and Author Info */}
        <div className="text-center mx-auto mt-4 px-4">
          <span className="mt-0 text-sm text-gray-800">&quot;Neuro Notion has been an absolute game changer for studying with ADHD. 
          Finally, I have a place for my Notes, Flashcards, Essay plans, and everything in a single spot 
          so I no longer get distracted when jumping between tabs. Love it!&quot;</span>

          <div className="mt-4">
            <div className="flex justify-center">
              <img className="w-16 h-16 rounded-full" src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/hs_circle2.webp" alt="Avatar" />
            </div>
            <h2 className="text-lg font-semibold">Josh Budd</h2>
            <p className="text-gray-500">Final Year Student @ Loughborough University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
