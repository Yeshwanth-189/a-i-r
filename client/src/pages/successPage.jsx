import React from "react";
import { useEffect } from "react";
import axios from "axios";
import successImage from "../assets/success.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LG from "../assets/LGTV.jpg";
import MI from "../assets/MITV.jpg";
import Oneplus from "../assets/ONTV.jpg";
import Samsung from "../assets/SAMTV.jpg";
import SATV from "../assets/SATV.jpg";
import MI80 from "../assets/Mi80.jpg";
import redmi from "../assets/redmi.jpg";

const imageMap = {
  LG: LG,
  MI: MI,
  Oneplus: Oneplus,
  Samsung: Samsung,
  SATV: SATV,
  MI80: MI80,
  redmi: redmi,
};

const getBrandImage = (productName) => {
  const name = productName?.toLowerCase();
  for (const brand in imageMap) {
    if (name.startsWith(brand.toLowerCase())) {
      return imageMap[brand];
    }
  }
  return null; // fallback if no match
};

const SuccessPage = () => {
  const [similarProducts, setSimilarProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/recommend/user/AFSMISGEYDYIP3Z42UTQU4AKOYZQ`)
      .then((res) => setSimilarProducts(res.data))
      .catch((err) => console.error("Failed to fetch similar items:", err));
  }, []);

  return (
    <div className="w-full px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-4">
      {/* Payment Successful Message */}
      <h1 className="text-2xl font-bold text-green-500">
        PAYMENT SUCCESSFUL!{" "}
      </h1>
      <h2 className="text-xl font-bold mb-2">Customers also bought these </h2>
      <div className="space-y-4 text-justify leading-relaxed tracking-wide">
        <motion.div
          className="overflow-hidden rounded-md group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={successImage}
            alt={"Payment Successful"}
            className="w-full h-120 object-contain rounded-md"
          />
          <p className="text-2xl font-bold text-green-500 text-center">
            Thank you for your payment!
          </p>
        </motion.div>
        <div className="flex gap-4 mt-4"></div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {similarProducts.map((item) => (
            <div
              key={item.product_id}
              className="card bg-base-100 shadow-md p-3"
            >
              <img
                src={getBrandImage(item.product_name) || item.image}
                alt={item.product_name}
                className="w-full h-32 object-contain mb-2"
              />
              <h3 className="font-semibold text-sm line-clamp-2">
                {item.product_name.toUpperCase()}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.round(item.rating)
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
                  {item.rating?.toFixed(1)} ({item.rating_count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
