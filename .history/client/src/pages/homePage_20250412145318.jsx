import React from "react";

// Import category images
import car from "../assets/bikes.jpg";
import computer from "../assets/computer.jpg";
import electronics from "../assets/electronics.jpg";
import health from "../assets/health.png";
import home from "../assets/kitchen.png";
import office from "../assets/office.jpg";

const categories = [
  { name: "Car & Motorbike", image: car },
  { name: "Computer & Accessories", image: computer },
  { name: "Electronics", image: electronics },
  { name: "Health & Personal Care", image: health },
  { name: "Home & Kitchen", image: home },
  { name: "Office Products", image: office },
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
            <figure>
              <img
                src={category.image}
                alt={category.name}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-md sm:text-lg font-medium">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
