import Image from "next/image";

const TesterHeroSec = () => {
  const handleButtonClick = (e) => {
    // Add any necessary logic here
    window.location.href = "https://buy.stripe.com/00gdT123dbNg9TG28r";
  };

  return (
    <section id="testerhero" className="bg-blue-50 testhero-section pt-20 sm:pt-20">
      <style>
        {`
          .heroTitleLarge-container {
            display: flex;
            justify-content: center;
          }

          .heroTitleLarge-container img {
            max-width: 240px;
          }
        `}
      </style>
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-2 lg:py-16">
        <div className="heroTitleLarge-container">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/heroTitleLarge.png"
            alt="titleheader"
            height={240}
            priority={1}
          />
        </div>
        <div className="px-0 md:px-60 pt-10">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/WaitingListHeroTitle.png"
            alt="titleheader"
            height={240}
            priority={1}
          />
        </div>
        <p className="mt-5 mb-6 text-xl font-baloo font-regular text-slate-950 sm:px-24">
          Be a part of something huge for ADHDers. Join the waiting list today and be the first to get access. <br /> Plus, get over 50% discount on the final version worth $129+. Secure your spot now.
        </p>
        {/* Added input fields */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/RoundedUBProdDemo.png"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
        {/* New section added below */}
        <div className="mt-6 text-3xl font-baloo font-semibold">COMING SOON! JOIN THE WAITING LIST TODAY!</div>
      </div>
    </section>
  );
};

export default TesterHeroSec;