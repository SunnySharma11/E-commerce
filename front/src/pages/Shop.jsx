import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";


const Shop = () => {
  return (
    <div>
      <div className="tw:pl-43 tw:pr-45 tw:border">
        <Navbar />
      </div>
      <Products />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Shop;
