import Image from 'next/image';

const HeroSection = () => {

    const handleButtonClick = (e) => {
      e.preventDefault(); // Prevent the default anchor behavior

            // Log the custom pixel event
            logCustomPixelEvent('HeroBuyNowClick');


      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        const topPosition = pricingSection.offsetTop + (pricingSection.offsetHeight / 2) - (window.innerHeight / 2);
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }
    };


  const logCustomPixelEvent = (eventName) => {
      // Log event to Facebook Pixel
      fbq('trackCustom', 'HeroBuyNowClick');
  };


  return (
    <section id="hero" className="bg-gray-50 hero-section pt-32 sm:pt-28 md:pt-30 lg:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-10 font-bold leading-none tracking-tight text-black text-4xl">
          Silence the ADHD Chaos. <br /> 3x your Productivity.
        </h1>
        <p className="mb-10 text-lg font-normal text-black sm:px-18 lg:text-xl xl:px-48">
          Discover Clarity and Control with Neuro Notion. Your ultimate ADHD study partner which streamlines resources and seamlessly organizes.
        </p>

        <div className="mt-4 flex justify-center space-x-4">
        {/* Get NeuroNotes Button */}
        <a href="#pricing" onClick={handleButtonClick} className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
          Buy Now
        </a>
      </div>

        {/* Stars */}
        <div className="mb-2 flex justify-center">
          <span className="mt-3 mb-0 text-3xl leading-none text-black">★★★★★</span>
        </div>
        <span className="mt-0 mb-0 text-sm text-gray-800">
          4.82/5 from 1,300+ Students with ADHD.
        </span>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-12 lg:py-4">
        {/* Next.js Image component for optimized image loading */}
        <div className="centered-image max-w-full lg:max-w-[800px] pb-16">
          <Image
          style={{ width:'100%' }}
          loading="eager"
          src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/maindemo.webp"
          alt="template"
          width={800}  // Set the width of the image (you can adjust as needed)
          height={566} // Set the height of the image (adjust for the aspect ratio of your image)
          layout="responsive" // This makes the image scale nicely to the parent element's width
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; // Export the component
