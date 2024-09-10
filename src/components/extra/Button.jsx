import React from "react";

const Button = () => {
  return (
    <button
      className="group relative my-10 inline-block px-5 py-2 font-medium"
      onClick={() => navigate("products")}
    >
      <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
      <span className="relative font-semibold text-highlight">Shop Now</span>
    </button>
  );
};

export default Button;
