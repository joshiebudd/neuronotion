import React from "react";

const CategoryCard = ({ image, title, subtitle, price }) => {
  return (
    <div className="border rounded-md p-4 m-2">
      {image ? (
        <img src={image} alt={title} className="w-300 h-300 object-cover" />
      ) : (
        <div className="w-300 h-[300px] md:h-[150px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="flex items-center justify-between px-2">
        <div>
          <h3 className="mt-2 text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="text-[48px] md:text-[24px] font-bold">${price}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
