import React from "react";

const Howitworks = () => {
  return (
    <div className="md:p-16 mt-8 p-8">
      <h1 className="font-bold text-2xl lg:text-[30px] text-center mt-10">
        How it works
      </h1>
      <div className="flex space-x-4 lg:mx-auto lg:w-2/3 mt-4">
        <div className="flex flex-col items-center lg:pt-4 lg:space-y-8">
          <span className="font-bold text-2xl lg:text-[60px]">1</span>
          <span className="font-bold text-xl lg:text-[30px]">Choose</span>
          <p className="text-center">
            Checkout, Access via email, and Duplicate to your Notion space.
          </p>
        </div>
        <div className="flex flex-col items-center lg:pt-4 lg:space-y-8">
          <span className="font-bold text-2xl lg:text-[60px]">2</span>
          <span className="font-bold text-xl lg:text-[30px]">Access</span>
          <p className="text-center">
            Checkout, Access via email, and Duplicate to your Notion space.
          </p>
        </div>
        <div className="flex flex-col items-center lg:pt-4 lg:space-y-8">
          <span className="font-bold text-2xl lg:text-[60px]">3</span>
          <span className="font-bold text-xl lg:text-[30px]">Duplicate</span>
          <p className="text-center">
            Checkout, Access via email, and Duplicate to your Notion space.
          </p>
        </div>
      </div>
      <hr className="mt-8 w-full border-t border-gray-400" />
    </div>
  );
};

export default Howitworks;
