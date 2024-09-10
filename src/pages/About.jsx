import React from "react";
import UnderConstruction from "../components/extra/UnderConstruction";

const About = () => {
  return (
    <div className="customBackground flex items-center justify-center dark:bg-zinc-800 dark:text-white">
      <p className="highlight -rotate-6 text-center">About Page</p>
      <UnderConstruction />
    </div>
  );
};

export default About;
