import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-around border-b-2 border-highlight bg-secondary bg-opacity-50 py-2 backdrop-blur-sm dark:bg-zinc-900 dark:text-zinc-400">
      <Logo />
      <Navigation />
      <Icons />
    </header>
  );
};

export default Header;
