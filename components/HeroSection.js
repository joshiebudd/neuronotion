import Image from "next/image";

const HeroSection = () => {
  const handleButtonClick = (e) => {
    // Log the custom pixel event
    logCustomPixelEvent("HeroBuyNowClick");
  };

  const logCustomPixelEvent = (eventName) => {
    // Log event to Facebook Pixel
    fbq("trackCustom", "HeroBuyNowClick");
  };

  return (
    <section id="hero" className="bg-gray-100 hero-section pt-24 sm:pt-32">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-10 font-bold leading-none tracking-tight text-black text-5xl">
          💤 Silence the ADHD Chaos. <br /> 3x your Productivity 🧠
        </h1>
        <p className="mb-10 text-xl font-normal text-black sm:px-18 xl:px-48 mt-6">
          Block out the noise with Neuro Notion: <br />The Ultimate ADHD Study Notion Template.
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          {/* Get NeuroNotes Button */}
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Buy Now
          </a>
        </div>

        {/* Stars */}
        <div className="mb-2 flex justify-center">
          <span className="mt-3 mb-0 text-3xl leading-none text-orange-600">
            ★★★★★
          </span>
        </div>
        <span className="mt-0 mb-0 text-sm text-gray-800">
          4.84/5 from 1,300+ Students with ADHD.
        </span>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-12 lg:py-4">
        {/* Next.js Image component for optimized image loading */}
        <div className="centered-image max-w-full lg:max-w-[800px] pb-8 sm:pb-16">
          <Image
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/maindemo.webp"
            alt="template"
            width={800} // Set the width of the image (you can adjust as needed)
            height={566} // Set the height of the image (adjust for the aspect ratio of your image)
            priority={1}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; // Export the component
