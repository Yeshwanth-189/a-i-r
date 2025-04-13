import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopDiscounts } from "../actions/topDiscountsActions";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.topDiscounts.products);
  useEffect(() => {
    dispatch(fetchTopDiscounts());
  }, [dispatch]);
  const Section = ({ title }) => (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="card bg-base-100 shadow-md p-4"
          >
            <h3 className="font-semibold">{product.product_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <figure>
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-28 sm:h-36 md:h-44 w-full object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h6 className="text-sm sm:text-base font-medium">
                  {category.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6">
        <Section title="🛍️ Mega Deals" />
        <Section title="🔥 Hot & Trending" />
        <Section title="⭐ Top Rated" />
        <Section title="💎 Hidden Gems" />
      </div>
    </>
  );
};

export default HomePage;
