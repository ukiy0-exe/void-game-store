import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className=" lg:basis-1/3 basis-1/2 text-center  flex-col md:flex-row hidden md:flex justify-around ">
      <NavLink className={isActive ? "active" : "inactive"} to="/">
        home
      </NavLink>
      <NavLink className={isActive ? "active" : "inactive"} to="/about">
        about
      </NavLink>
      <NavLink className={isActive ? "active" : "inactive"} to="/products">
        products
      </NavLink>
      <NavLink className={isActive ? "active" : "inactive"} to="/support">
        support
      </NavLink>
    </nav>
  );
};

export default Navigation;
