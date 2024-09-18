import React from "react";

const UBHero = () => {
  const imageLinks = [
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/samuel.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/parker.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/Tariq.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle.jpg",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/493.webp",
  ];

  const handleRedirectToGumroad = () => {
    window.location.href = "https://buy.stripe.com/4gw3en6jtdVo9TG00k";
  };

  return (
    <div className="pt-16 px-4 lg:px-0 mt-16 bg-white lg:mt-32">
      <div className="flex flex-col items-center mx-auto max-w-full lg:max-w-screen-lg">
        <h1 className="text-3xl font-bold text-center text-prim font-prim lg:text-[60px]">
          Regain Control of your ADHD
        </h1>
        <p
          className="pt-4 text-lg lg:text-[20px] font-semibold text-center text-sec font-cg"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          The perfect digital assistant for ADHDers, built by ADHDers, inside Notion.
          Let Ultimate Brain help you achieve more and stress less, with less overwhelm.
        </p>
        <button
          onClick={handleRedirectToGumroad}
          className="px-6 py-3 mt-6 text-lg lg:text-xl font-bold rounded-xl shadow-md bg-prim text-sec font-prim shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim"
        >
          Get Ultimate ADHD Brain
        </button>
        <div className="flex flex-col items-center mt-8 lg:flex-row lg:items-center">
          <div className="flex -space-x-3 mb-4 lg:mb-0">
            {imageLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white border-2 rounded-full"
              >
                <img
                  src={link}
                  alt={`User ${index + 1}`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col text-center lg:pl-4 lg:text-left">
            <span className="text-xl lg:text-2xl text-accent4">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-700 font-cg">4.9/5 from other ADHDers.</span>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-2 mx-auto text-center max-w-full lg:max-w-screen-xl">
        <div className="pb-0 mx-auto centered-image max-w-full sm:max-w-[950px] sm:pt-2">
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
