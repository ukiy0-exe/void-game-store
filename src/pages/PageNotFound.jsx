import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="customBackground h-screen flex flex-col justify-center items-center">
      <img className="w-[500px] " src="src/assets/icons/404.svg" alt="" />
      <p className="w-[500px] text-center bg-background rounded- p-4">
        The page you’re looking for might have been moved or doesn’t exist
        anymore. <br />
        But don’t worry, you can always head back to our{" "}
        <Link
          className="font-semibold hover:font-extrabold border-b-2 border-primary"
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
