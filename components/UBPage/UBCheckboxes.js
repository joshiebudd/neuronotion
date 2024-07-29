import React from "react";

const UBCheckboxes = () => {
  return (
    <div className="pt-10 bg-white text-center">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">
          Everything, in ONE place.
        </h1>
        <div className="flex flex-col items-center pt-4">
          {[...Array(2)].map((_, index) => (
            <label key={index} className="flex items-center mb-4 text-xl font-prim text-gray-800">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-sec transition duration-150 ease-in-out mr-2" />
              <span>Checkbox {index + 1}</span>
            </label>
          ))}
        </div>
      </div>
      <p className="font-cg text-md text-gray-700">Insert a testimonial here</p>
      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default UBCheckboxes;
