import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import ThemeSwitcher from "./ThemeSwitcher";

const Icons = () => {
  return (
    <div className="menu md:basis-1/6 basis-1/3 flex items-center justify-around">
      <Link to="/cart" className="px-2">
        <img src="src/assets/icons/shopping-cart.svg" alt="" />
      </Link>
      <Link className="px-2">
        <img src="src/assets/icons/profile.svg" alt="" />
      </Link>
      <Link className="px-2">
        <ThemeSwitcher />
      </Link>
      <Link className="px-2">
        <Hamburger />
      </Link>
    </div>
  );
};

export default Icons;
