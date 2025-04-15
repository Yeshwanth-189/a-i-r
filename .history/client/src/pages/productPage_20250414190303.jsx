import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ProductPage = () => {
  //   const { productId } = useParams();
  const location = useLocation();

  const product = location.state?.product;

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Left: Main Product */}
      <div className="md:col-span-2 space-y-4">
        <img
          src={product.image}
          alt={product.product_name}
          className="w-full h-64 object-contain rounded-md"
        />
        <h1 className="text-2xl font-bold">{product.product_name}</h1>
        <p className="text-gray-600">{product.about_product}</p>
        <div className="flex gap-4 mt-4">
          <button className="btn btn-primary">❤️ Favorite</button>
          <button className="btn btn-success">🛒 Purchase</button>
        </div>
      </div>

      {/* Right: Similar Products
      <div>
        <h2 className="text-xl font-semibold mb-3">You May Also Like</h2>
        <div className="space-y-4">
          {similarProducts.map((item) => (
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
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductPage;
