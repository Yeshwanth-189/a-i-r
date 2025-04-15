import React from "react";
import { useLocation } from "react-router-dom";
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

  const product = location.state?.product;

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-20 p-3">
      {/* Left: Main Product */}
      <div className="md:col-span-2 space-y-4 text-justify leading-relaxed tracking-wide">
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
          <Button className="btn btn-primary">❤️ Favorite</Button>
          <Button className="btn btn-success">🛒 Purchase</Button>
        </div>
      </div>
      Right: Similar Products
      <div>
        <h2 className="text-xl font-semibold mb-3">You May Also Like</h2>
        <div className="space-y-4">
          {/* {similarProducts.map((item) => (
            <div
              key={item.product_id}
              className="card bg-base-100 shadow p-3 text-sm"
            >
              <img
                src={item.image}
                alt={item.product_name}
                className="w-full h-28 object-contain"
              />
              <h3 className="font-medium mt-2">{item.product_name}</h3>
              <p className="text-gray-600">₹{item.discounted_price}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
