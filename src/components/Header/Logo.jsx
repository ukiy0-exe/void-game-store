import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="basis-1/5">
      <Link
        className="text-2x1 font-black flex items-center justify-center"
        to="/"
      >
        <span className="mr-2 logo">
          <img src="src/assets/icons/logo.svg" alt="" />
        </span>
        <span className="hidden md:block">Void.</span>
      </Link>
    </div>
  );
};

export default Logo;
