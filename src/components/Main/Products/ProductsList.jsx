import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useAddToCart } from "../../../hooks/useAddToCart";

const ProductsList = () => {
  const { data } = useFetch("src/data/products.json");
  const addToCart = useAddToCart();

  return (
    <>
      <div className="m-2 flex flex-wrap items-center justify-center gap-5 py-10">
        {data.map((product) => {
          const platform = product.platforms;
          return (
            <div
              className="flex h-[350px] w-96 flex-col justify-between bg-[#CDC5F1] p-5 md:w-[300px]"
              key={product.id}
            >
              <img
                loading="lazy"
                className="h-[120px] w-full border-2 border-highlight object-cover"
                src={product.img}
                alt={product.id}
              />
              <h2 className="my-2 font-semibold text-highlight">
                {product.company_name}
              </h2>
              <div className="flex w-max items-center justify-between">
                {Object.keys(platform).map((key) => {
                  if (platform[key]) {
                    return (
                      <img
                        loading="lazy"
                        className="mr-3 w-8"
                        src={`src/assets/icons/partners/${key}.svg`}
                        alt={product.id}
                        key={key}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <h3 className="text-right text-xl font-semibold text-highlight">
                €{product.price}
              </h3>
              <button
                className="group relative my-2 inline-block px-5 py-2 font-medium"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa]"></span>
                <span className="relative font-semibold text-highlight">
                  Add to Cart
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
