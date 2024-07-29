import React from "react";

const CategoryCard = ({ image, title, subtitle, price }) => {
  return (
    <div className="shadow-lg rounded-3xl bg-white p-6 text-left">
      {image ? (
        <img src={image} alt={title} className="w-full h-64 object-contain rounded-t-3xl" />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-3xl">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-prim font-bold text-prim mb-2">{title}</h3>
          <p className="text-gray-700 font-sec text-md">{subtitle}</p>
        </div>
        <div className="text-3xl font-prim font-bold text-prim">{price}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
