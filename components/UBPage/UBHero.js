import React from "react";

const UBHero = () => {
  return (
    <div className="mt-32 lg:px-0 px-8">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl lg:text-[60px]">HERO TITLE</h1>
        <p className="text-center font-semibold text-xl lg:text-[20px] pt-4">Sub Heading</p>
        <button className="border-none px-4 py-3 bg-purple-600 w-max text-white rounded-lg mt-2">Get Ultimate ADHD Brain</button>
        <div className="flex mt-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
            ))}
          </div>
          <div className="flex flex-col pl-4">
            <span>⭐⭐⭐⭐⭐</span>
            <span>4.9/5 from other ADHDers.</span>
          </div>
        </div>
      </div>
      <div className="px-8 mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
        <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/mainDemoNew.webp"
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
