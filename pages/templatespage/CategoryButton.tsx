export default function CategoryButton({
  category,
  selectedCategory,
  onClick,
}) {
  const isSelected = selectedCategory === category;
  return (
    <button
      className={`${
        isSelected ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
      } rounded-md py-2 px-4 m-2`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
}
