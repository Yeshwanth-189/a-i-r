import React from "react";

const categories = [
  { name: "Car & Motorbike" },
  { name: "Computer & Accessories" },
  { name: "Electronics" },
  { name: "Health & Personal Care" },
  { name: "Home & Kitchen" },
  { name: "Office Products" },
];

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="card-body items-center text-center">
              <h6 className="card-title text-md sm:text-lg">{category.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
