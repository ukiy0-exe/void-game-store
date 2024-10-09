import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="customBackground flex h-screen flex-col items-center justify-center">
      <img className="w-[500px]" src="/assets/icons/404.svg" alt="" />
      <p className="rounded- w-[500px] bg-background p-4 text-center">
        The page you’re looking for might have been moved or doesn’t exist
        anymore. <br />
        But don’t worry, you can always head back to our{" "}
        <Link
          className="border-b-2 border-primary font-semibold hover:font-extrabold"
          to="/"
        >
          home
        </Link>{" "}
        page and start fresh!
      </p>
    </div>
  );
};

export default PageNotFound;
