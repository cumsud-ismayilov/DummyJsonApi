import React from "react";
const categories = [
  "all",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2 mt-[16px] p-[8px]">
      {categories.map((cat) => (
        <button
          className={`px-4 py-1 rounded-full border ${
            selected === cat
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } transition`}
          onClick={() => setSelected(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
