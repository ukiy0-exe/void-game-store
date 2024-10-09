import React from "react";
import { useNavigate } from "react-router-dom";

const ThanksForPurchase = () => {
  const navigate = useNavigate();
  return (
    <div className="customBackground flex h-screen flex-col items-center justify-center">
      <img
        className="w-[500px]"
        src="/assets/icons/successful-purchase.svg"
        alt=""
      />
      <h1 className="highlight text-3xl text-primary">
        Thanks for Purchase 😊
      </h1>
      <div className="flex w-96 items-center justify-between">
        <button
          className="group relative my-10 inline-block px-5 py-2 font-medium"
          onClick={() => navigate("/")}
        >
          <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
          <span className="relative font-semibold text-highlight">Home</span>
        </button>
        <button
          className="group relative my-10 inline-block px-5 py-2 font-medium"
          onClick={() => navigate("/products")}
        >
          <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
          <span className="relative font-semibold text-highlight">
            Want more games!
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThanksForPurchase;
