import React from "react";

const UBCheckboxes = () => {
  return (
    <div className="pt-10">
      <div className="w-max mx-auto">
        <h1 className="text-center font-bold text-xl lg:text-[40px]">Everything, in ONE place.</h1>
        <div className="flex pt-4 flex-col">
          {[...Array(2)].map((_, index) => (
            <label key={index}>
              <input type="checkbox" />
              <span>Checkbox</span>
            </label>
          ))}
        </div>
      </div>
      <p> Insert a testimonial here </p>
      <hr className="mt-10" />
    </div>
  );
};

export default UBCheckboxes;
