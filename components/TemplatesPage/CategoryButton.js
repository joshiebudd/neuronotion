import React from "react";

const CategoryButton = ({ category, selectedCategory, onClick }) => {
  const isSelected = selectedCategory === category;
  return (
    <button
      className={`py-2 px-6 font-prim font-bold rounded-xl text-lg shadow-md transition-colors duration-300 m-2 ${
        isSelected
          ? 'bg-prim text-sec shadow-gray-600 hover:bg-sec hover:text-prim'
          : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800'
      }`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
