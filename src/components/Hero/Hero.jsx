import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="customBackground flex h-screen flex-wrap items-center justify-center gap-10 dark:bg-zinc-800 dark:text-white md:h-2/4">
      <div className="w-5/6 lg:w-1/3">
        <h1 className="my-10 text-5xl">
          Level Up Your <br />
          <span className="highlight dark:darkHighlight">
            Gaming Experience
          </span>
          !
        </h1>
        <p className="rounded-sm bg-background py-2 dark:bg-zinc-800">
          Discover the latest releases, classic favorites, and exclusive deals
          on top video games. Whether you're a casual player or a hardcore
          gamer, we've got the games to match your style.
        </p>
        <button
          className="group relative my-10 inline-block px-5 py-2 font-medium"
          onClick={() => navigate("products")}
        >
          <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#b499fa] dark:bg-zinc-300"></span>
          <span className="relative font-semibold text-highlight">
            Shop Now
          </span>
        </button>
      </div>
      <div className="m-10 hidden w-1/3 lg:block">
        <img src="src/assets/icons/hero-section.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
