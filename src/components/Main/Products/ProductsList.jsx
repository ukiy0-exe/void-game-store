import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const { data } = useFetch("src/data/products.json");
  console.log(data);
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:m-10 m-5 flex flex-wrap gap-5 justify-center items-center">
        {data.map((product) => {
          const platform = product.platforms;
          console.log(platform);
          return (
            <div
              className="md:w-[300px] w-screen h-[390px] bg-white px-5 py-5 rounded-lg flex flex-col justify-between"
              key={product.id}
            >
              <img
                loading="lazy"
                className="h-[150px] w-full object-cover rounded-lg"
                src={product.img}
                alt={product.id}
              />
              <h2 className="font-semibold my-3">{product.company_name}</h2>
              <div className="flex justify-between items-center w-max">
                {Object.keys(platform).map((key) => {
                  if (platform[key]) {
                    return (
                      <img
                        loading="lazy"
                        className="w-8 mr-2"
                        src={`src/assets/icons/partners/${key}.svg`}
                        alt={product.id}
                        key={key}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <h3 className="font-semibold text-xl text-right">
                €{product.price}
              </h3>
              <button
                className="relative inline-block font-medium group py-2 px-5 my-2"
                onClick={() => navigate("/cart")}
              >
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-highlight group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-highlight group-hover:bg-[#b499fa]"></span>
                <span className="relative text-highlight font-semibold">
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
