import React from "react";
import Image from "next/image";

const DarkModeSection = () => {
  return (
    <section className="bg-gray-800 darkmode-section">
      <div className="py-8 pb-12 sm:pb-20 px-4 mx-auto max-w-screen-xl sm:pt-16 lg:px-56">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-100">
            Dark mode people, <br /> we got you 😎
          </h2>
          <p className="text-gray-100 text-xl">
            Keep things fresh by toggling dark mode on/off whenever you like,
            it&apos;s beautifully satisfying in both.
          </p>
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Center horizontally */}
          <Image
            style={{ width: "100%" }}
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/darkmodedemo.webp"
            alt="template"
            width={1200} // Set the width of the image (you can adjust as needed)
            height={800} // Set the height of the image (adjust for the aspect ratio of your image)
            priority={1}
          />
        </div>
      </div>
    </section>
  );
};

export default DarkModeSection;
