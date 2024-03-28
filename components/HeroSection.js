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
  A focus{' '}
  <span className={`text-red-800 ${styles.strike}`}>Hack</span>
  <span className="text-sky-800">System</span> <br /> to help your ADHD brain study
</h1>


    <p className="mb-10 text-xl font-normal text-black sm:px-18 xl:px-48 mt-6">
    Drown the noise in 90 seconds and study for as long as you want. This Notion template helps you focus fast. And with tools that make studying fun and effective, you won&apos;t need a new TikTok hack anytime soon.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4">
      {/* Get NeuroNotes Button */}
      <a
        href="#pricing"
        onClick={handleButtonClick}
        className="StandardCheckoutButton inline-block mb-2 sm:mb-0 rounded-lg bg-sky-800 px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Get Lifetime Access.
      </a>
    </div>
    <p className="mt-2 font-bold text-md text-center text-sm">
      Guaranteed to improve your studies, or your money back.
    </p>
    {/* Stars */}
    <div className="mb-2 flex justify-center">
      <span className="mt-3 mb-0 text-3xl leading-none text-orange-600">
        ★★★★★
      </span>
    </div>
    <span className="mt-0 mb-0 text-sm text-gray-800">
      <a href="#review" className="underline">
        4.86/5
      </a>{" "}
      from 1,300+ Students with ADHD.
    </span>
  </div>
    
  <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-12 lg:py-4">
    {/* Next.js Image component for optimized image loading */}
    <div className="centered-image max-w-full lg:max-w-[800px] pb-8 sm:pb-16">
      <Image
        style={{ width: "100%" }}
        loading="eager"
        src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/ipaddemo.webp"
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