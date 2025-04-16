import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import SON from "../assets/sonybravia.png";
import SAM from "../assets/samsung.png";
import VU from "../assets/vu.jpg";
import LG from "../assets/lg.png";
import TCL from "../assets/TCL.jpg";
import ECO from "../assets/ecovacs.jpg";
import COW from "../assets/cowayairpurifier.jpg";
import AGA from "../assets/agaro.jpg";
import BRA from "../assets/brandconq.jpg";
import DR from "../assets/drtrust.png";
import ENV from "../assets/envie.png";
import GIZ from "../assets/gizga.jpg";
import INA from "../assets/inalsa.jpg";
import POR from "../assets/portronics.jpg";
import REF from "../assets/reffair.jpg";
import SAI from "../assets/saifsmart.jpg";
import SWI from "../assets/swiffer.jpg";
import KAN from "../assets/kanget.jpg";
import ZEB from "../assets/Zebronics.jpg";
import LOG from "../assets/logitech.png";
import SOU from "../assets/Sounce.png";
import AMA from "../assets/Amazonbasics.jpg";
import QUA from "../assets/Quantum.jpg";
import AIR from "../assets/Aircase.jpg";
import CAR from "../assets/carecase.jpg";
import TVA from "../assets/tvara.jpg";
import AME from "../assets/Americavaccum.png";
import XIA from "../assets/xiaomi.jpg";
import ONE from "../assets/oneplus.png";
import ORA from "../assets/oratech.jpg";
import PHI from "../assets/philips.jpg";
import MOR from "../assets/morphy.jpg";
import BOR from "../assets/borosil.png";
import ACE from "../assets/acer.png";
import acer127 from "../assets/acer 127.png";
import acer139 from "../assets/acer 139.jpg";
import acer109 from "../assets/acer 109.png";
import acer100 from "../assets/acer 100.jpg";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const handlePurchase = async (product) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const stripe = await stripePromise;
    const response = await axios.post(
      "http://localhost:8000/create-checkout-session",
      {
        product_name: product.product_name,
        amount: 100000,
      }
    );

    if (response.data.url) {
      localStorage.setItem("purchasedProduct", JSON.stringify(product));
      window.location.href = response.data.url;
    }
  } catch (error) {
    console.error("Stripe checkout error:", error);
  }
};

const imageMap = {
  acer127: acer127,
  acer139: acer139,
  acer109: acer109,
  acer100: acer100,
};
const getImageForProduct = (productName) => {
  const prefix = productName?.toLowerCase().slice(0, 8).replace(/\s/g, "");
  console.log("Prefix:", prefix);
  return imageMap[prefix] || null;
};

const brandImageMap = {
  SON: SON,
  SAM: SAM,
  VU: VU,
  LG: LG,
  TCL: TCL,
  ECO: ECO,
  COW: COW,
  AGA: AGA,
  BRA: BRA,
  DR: DR,
  ENV: ENV,
  GIZ: GIZ,
  INA: INA,
  POR: POR,
  REF: REF,
  SAI: SAI,
  SWI: SWI,
  KAN: KAN,
  ZEB: ZEB,
  LOG: LOG,
  SOU: SOU,
  AMA: AMA,
  QUA: QUA,
  AIR: AIR,
  CAR: CAR,
  TVA: TVA,
  AME: AME,
  XIA: XIA,
  ONE: ONE,
  ORA: ORA,
  PHI: PHI,
  MOR: MOR,
  BOR: BOR,
  ACE: ACE,
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

const ProductPage = () => {
  //   const { productId } = useParams();
  const location = useLocation();
  const [isFavorited, setIsFavorited] = React.useState(false);
  const product = location.state?.product;
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (!product?.product_id) return;

    axios
      .get(`http://localhost:8000/recommend/item/${product.product_id}`)
      .then((res) => setSimilarProducts(res.data))
      .catch((err) => console.error("Failed to fetch similar items:", err));
  }, [product?.product_id]);

  return (
    <div className="w-full px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-4">
      {/* Left: Main Product */}
      <div className="space-y-4 text-justify leading-relaxed tracking-wide">
        <div className="overflow-hidden rounded-md group">
          <img
            src={getBrandImage(product.product_name) || product.image}
            alt={product.product_name}
            className="w-full h-64 object-contain rounded-md"
          />
        </div>

        <h1 className="text-2xl font-bold">
          {product.product_name.toUpperCase()}
        </h1>
        <p className="text-gray-600">
          {product.about_product
            ? product.about_product.toUpperCase()
            : product.product_name.toUpperCase()}
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            variant="outlined"
            color="error"
            startIcon={
              isFavorited ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )
            }
            onClick={() => setIsFavorited((prev) => !prev)}
          >
            Wishlist
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => handlePurchase(product)}
            startIcon={<ShoppingCartIcon />}
          >
            Purchase
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Similar Items you may like</h2>

        {similarProducts.length === 0 ? (
          <p className="text-gray-500">No similar items found.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {similarProducts.map((item) => (
              <div
                key={item.product_id}
                className="card bg-base-100 shadow-md p-3"
              >
                <img
                  src={getImageForProduct(item.product_name) || item.image}
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
        )}
      </div>
    </div>
  );
};

export default ProductPage;
