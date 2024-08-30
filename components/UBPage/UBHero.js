import React from "react";

const UBHero = () => {
  const imageLinks = [
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/samuel.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/parker.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/Tariq.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle.jpg",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/493.webp",
  ];

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-32 lg:px-0 px-8 bg-white py-16">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-center font-prim font-bold text-4xl lg:text-[60px] text-prim">
          Regain Control of your ADHD
        </h1>
        <p
          className="text-center font-cg font-semibold text-xl lg:text-[20px] text-sec pt-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          It&apos;s simple: You braindump. It shows you exactly what you need to
          know at the perfect time.
        </p>
        <button
          onClick={handleScrollToPricing}
          className="bg-prim text-sec py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim mt-6"
        >
          Get Ultimate ADHD Brain
        </button>
        <div className="flex mt-8 items-center">
          <div className="flex space-x-1">
            {imageLinks.map((link, index) => (
              <div
                key={index}
                className="rounded-full border-2 w-10 h-10 bg-white flex items-center justify-center"
              >
                <img
                  src={link}
                  alt={`User ${index + 1}`}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col pl-4 text-center">
            <span className="text-2xl text-accent4">⭐⭐⭐⭐⭐</span>
            <span className="font-cg text-gray-700">
              4.9/5 from other ADHDers.
            </span>
          </div>
        </div>
      </div>
      <div className="px-8 mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
        <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4 mx-auto">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/UBDarkModeDemoRoundedShadowFinal.webp"
            alt="template"
            width={1920}
            height={1280}
            priority={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UBHero;
