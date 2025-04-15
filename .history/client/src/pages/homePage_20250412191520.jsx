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

import SON from "../assets/sonybravia.png";
import SAM from "../assets/samsung.png";
import VU from "../assets/vu.jpg";
import LG from "../assets/lg.png";
import TCL from "../assets/TCL.jpg";
import ECO from "../assets/ecovacs.jpg";
import COW from "../assets/cowayairpurifier.jpg";

const categories = [
  { name: "Car & Motorbike", image: car },
  { name: "Computer & Accessories", image: computer },
  { name: "Electronics", image: electronics },
  { name: "Health & Personal Care", image: health },
  { name: "Home & Kitchen", image: home },
  { name: "Office Products", image: office },
];

const brandImageMap = {
  SON: SON,
  SAM: SAM,
  VU: VU,
  LG: LG,
  TCL: TCL,
  ECO: ECO,
  COW: COW,
};
const getBrandImage = (productName) => {
  const name = productName?.toLowerCase();
  for (const brand in brandImageMap) {
    if (name.startsWith(brand.toLowerCase())) {
      return brandImageMap[brand];
    }
  }
  return null; // fallback if no match
};

const Section = ({ title, products, isMegaDeal = false }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="card bg-base-100 shadow-md p-4"
        >
          <figure>
            <img
              src={getBrandImage(product.product_name) || product.image}
              alt={product.product_name}
              className="h-28 sm:h-36 md:h-44 w-full object-contain"
            />
          </figure>
          <h3 className="font-semibold text-sm md:text-base mb-1">
            {product.product_name.length > 35
              ? product.product_name.slice(0, 35).toUpperCase() + "..."
              : product.product_name.toUpperCase()}
          </h3>

          {/* Mega Deal pricing */}
          {isMegaDeal ? (
            <div className="flex flex-col text-sm mb-2">
              <span className="text-gray-500 line-through">
                ${product.actual_price}
              </span>
              <span className="text-green-600 font-semibold">
                ${product.discounted_price}{" "}
                <span className="text-sm text-red-500 ml-1">
                  ({product.discount_percentage} OFF)
                </span>
              </span>
            </div>
          ) : (
            <></>
          )}

          {/* Star Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.383a1 1 0 00.95.69h3.564c.969 0 1.371 1.24.588 1.81l-2.883 2.095a1 1 0 00-.364 1.118l1.1 3.383c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.883 2.095c-.784.57-1.838-.197-1.539-1.118l1.1-3.383a1 1 0 00-.364-1.118L3.431 8.81c-.783-.57-.38-1.81.588-1.81h3.564a1 1 0 00.95-.69l1.1-3.383z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">
              {product.rating?.toFixed(1)} ({product.rating_count})
            </span>
          </div>
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
    <div className="!bg-green-700">
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
        <Section title="🛍️ Mega Deals" products={discounts} isMegaDeal={true} />
        <Section title="🔥 Hot & Trending" products={topPopular} />
        <Section title="⭐ Top Rated" products={topRated} />
        <Section title="💎 Hidden Gems" products={hiddenGems} />
      </div>
    </div>
  );
};

export default HomePage;
