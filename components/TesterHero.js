import Image from "next/image";

const TesterHeroSec = () => {
  const handleButtonClick = (e) => {
    // Add any necessary logic here
  };
  return (
    <section id="testerhero" className="bg-blue-50 hero-section pt-20 sm:pt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="px-0 md:px-40">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/heroTitleLargeBaloo.png"
            alt="titleheader"
            height={240}
            priority={1}
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
            <img
              style={{ width: "100%" }}
              loading="eager"
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/UBDarkModeDemoRoundedShadow.webp"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TesterHeroSec;