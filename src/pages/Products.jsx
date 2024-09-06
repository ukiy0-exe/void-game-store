import React from "react";
import ProductsList from "../components/Main/Products/ProductsList";
import ProductsWelcome from "../components/Main/Products/ProductsWelcome";

const Products = () => {
  return (
    <div className="customBackground">
      <ProductsWelcome />
      <ProductsList />
    </div>
  );
};

export default Products;
