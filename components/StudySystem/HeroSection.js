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
    <section id="hero" className="bg-blue-50 hero-section pt-20 sm:pt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="px-0 md:px-80">
          <Image
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/heroTitleLargeLC.webp"
            alt="titleheader"
            width={640}
            height={240}
            priority
          />
        </div>
        <p className="mt-5 mb-6 text-xl font-baloo font-regular text-slate-950 sm:px-24">
          Drown the noise in 90 seconds and study for as long as you want. This Notion Study template helps you focus fast. And with tools that make studying fun and effective, you won&apos;t need a new TikTok hack anytime soon.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4">
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get for Free.
          </a>
        </div>
        <div className="mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
          <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
            <Image
              style={{ width: "100%" }}
              loading="eager"
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/mainDemoNew.webp"
              alt="template"
              width={1920}
              height={1280}
              priority
            />
          </div>
        </div>
        {/* Testimonials */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <span className="mt-0 mb-0 text-3xl leading-none text-blue-400">★★★★★</span>
            </div>
            <span className="mt-0 mb-0 text-md font-baloo font-regular text-slate-900">
              &quot;Completely changed my study system - for the better!&quot;
            </span>
          </div>

          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <span className="mt-0 mb-0 text-3xl leading-none text-blue-400">★★★★★</span>
            </div>
            <span className="mt-0 mb-0 text-md font-baloo font-regular text-slate-900">
              &quot;So easy to set up and use! Its so helpful already.&quot;
            </span>
          </div>

          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <span className="mt-0 mb-0 text-3xl leading-none text-blue-400">★★★★★</span>
            </div>
            <span className="mt-0 mb-0 text-md font-baloo font-regular text-slate-900">
              &quot;Don&apos;t sleep on this one people! The promises are real!&quot;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
