import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopDiscounts,
  fetchTopRated,
  fetchHiddenGems,
  fetchTopPopular,
} from "../actions/topDiscountsActions";

// Category Images
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

// Reusable Section component
const Section = ({ title, products }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="card bg-base-100 shadow-md p-4"
        >
          <h3 className="font-semibold">
            {product.product_name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600">₹{product.discounted_price}</p>
        </div>
      ))}
    </div>
  </div>
);

const HomePage = () => {
  const dispatch = useDispatch();

  // Select all products by category
  const { discounts, topRated, hiddenGems, topPopular } = useSelector(
    (state) => state.topDiscounts
  );

  useEffect(() => {
    dispatch(fetchTopDiscounts());
    dispatch(fetchTopRated());
    dispatch(fetchHiddenGems());
    dispatch(fetchTopPopular());
  }, [dispatch]);

  return (
    <>
      {/* Category Tiles */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
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
        <Section title="🛍️ Mega Deals" products={discounts} />
        <Section title="🔥 Hot & Trending" products={topPopular} />
        <Section title="⭐ Top Rated" products={topRated} />
        <Section title="💎 Hidden Gems" products={hiddenGems} />
      </div>
    </>
  );
};

export default HomePage;
