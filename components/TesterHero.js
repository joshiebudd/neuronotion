import Image from "next/image";

const TesterHeroSec = () => {
  const handleButtonClick = (e) => {
    // Add any necessary logic here
    window.location.href = "https://buy.stripe.com/00gdT123dbNg9TG28r";
  };

  return (
    <section id="testerhero" className="bg-blue-50 testhero-section pt-20 sm:pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="px-0 md:px-60">
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
          Be a part of something huge for ADHDers. Become a tester today and help us change ADHD lives. <br /> Plus, get FREE access to a tool worth $129+. Secure your spot now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4">
          <a
            href="#"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Secure your spot.
          </a>
        </div>
        <div className="mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
          <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
            <img
              style={{ width: "100%" }}
              loading="eager"
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/UBDarkModeDemoRoundedShadow.png"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
        {/* New section added below */}
        <div className="mt-6 text-3xl font-baloo font-bold">COMING SOON! BECOME A TESTER TODAY!</div>
      </div>
    </section>
  );
};

export default TesterHeroSec;