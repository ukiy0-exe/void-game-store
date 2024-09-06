import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className=" w-full sticky top-0 z-40  py-2 flex justify-around items-center bg-secondary bg-opacity-50 backdrop-blur-sm border-b-2 border-highlight dark:bg-zinc-900 dark:text-zinc-400">
      <Logo />
      <Navigation />
      <Icons />
    </header>
  );
};

export default Header;
