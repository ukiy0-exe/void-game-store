import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="basis-1/5">
      <Link
        className="text-2x1 flex items-center justify-center font-black"
        to="/"
      >
        <span className="logo mr-2">
          <img src="/assets/icons/logo.svg" alt="" />
        </span>
        <span className="hidden md:block">Void.</span>
      </Link>
    </div>
  );
};

export default Logo;
