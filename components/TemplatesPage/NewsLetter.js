import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-prim font-bold text-prim mb-8">Join the ADHD Newsletter</h2>
        <p className="text-lg text-gray-700 font-sec lg:px-48 md:px-16 mb-8">
          Every Single Day, you&apos;ll receive a{" "}
          <span className="font-bold">2-minute email</span> containing practical
          tips, stories, and examples of how to better manage your ADHD, completely free.
        </p>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <input
            type="text"
            placeholder="Enter First Name"
            className="border border-gray-400 p-3 rounded-xl w-full max-w-lg"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="border border-gray-400 p-3 rounded-xl w-full max-w-lg"
          />
          <button className="bg-prim text-sec py-3 px-6 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim transition-colors duration-300">
            Join Email List
          </button>
          <div className="pt-4 text-lg font-sec italic text-gray-700">
            No Spam. Unsubscribe in one click.
          </div>
        </div>
        <hr className="mt-8 w-full border-t border-gray-400" />
      </div>
    </section>
  );
};

export default NewsLetter;
