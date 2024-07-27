import React from "react";

export default function ADHDControlSection() {
  return (
    <section
      id="takecontrol"
      className="bg-blue-50 py-20 sm:py-24 flex flex-col items-center space-y-8"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
        Take Control of your ADHD
      </h1>
      <p className="text-lg text-center">
        This is a subtitle
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <a
          href="#pricing"
          className="StandardCheckoutButton inline-block bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg px-6 py-3 text-lg font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
        >
          Get for Free
        </a>
        <a
          href="#pricing"
          className="StandardCheckoutButton inline-block bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg px-6 py-3 text-lg font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
        >
          Get for Free
        </a>
      </div>
      <p className="text-center font-medium">
        Trusted by and Affiliated with:
      </p>
      <div className="border border-gray-300 p-6 rounded-lg w-full max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
          Free ADHD Notion Starter Bundle
        </h2>
        <p className="text-lg text-center">
          Get organized and boost your productivity with our curated templates.
        </p>
      </div>
    </section>
  );
}