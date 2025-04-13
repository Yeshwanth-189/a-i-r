import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 shadow-md">
      <div className="flex-1">
        <a className="text-xl font-bold text-primary">ShopSmart</a>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-sm"
        />
      </div>

      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <span className="material-icons">shopping_cart</span>
        </button>
        <button className="btn btn-outline btn-primary ml-2">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
