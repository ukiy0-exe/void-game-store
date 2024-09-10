import React from "react";
import ProductsList from "../components/Main/Products/ProductsList";
import ProductsWelcome from "../components/Main/Products/ProductsWelcome";

const Products = () => {
  return (
    <div className="customBackground dark:bg-zinc-800 dark:text-white">
      <ProductsWelcome />
      <ProductsList />
    </div>
  );
};

export default Products;
