import React from "react";

const UnlockSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="shadow-lg rounded-3xl bg-accent1 bg-opacity-5 p-8 md:p-16 flex flex-col justify-center text-left">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-prim font-bold text-prim mb-4">
                Unlock everything for 50% OFF
              </h2>
              <p className="text-lg text-gray-700 font-sec mb-6">
                Get access to all current and future templates with one single
                payment.
              </p>
              <button className="bg-prim text-sec py-3 px-6 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim transition-colors duration-300">
                Get All Access
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-8 w-full border-t border-gray-400" />
      </div>
    </section>
  );
};

export default UnlockSection;
