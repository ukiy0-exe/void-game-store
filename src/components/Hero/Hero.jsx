import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="customBackground h-screen md:h-2/4 flex flex-wrap items-center justify-center gap-10">
      <div className="w-5/6 lg:w-1/3">
        <h1 className="text-5xl my-10">
          Level Up Your <br />
          <span className="highlight">Gaming Experience</span>!
        </h1>
        <p className="bg-background rounded-md py-2">
          Discover the latest releases, classic favorites, and exclusive deals
          on top video games. Whether you're a casual player or a hardcore
          gamer,
          <span className="">we've got the games to match your style.</span>
        </p>
        <button
          className="relative inline-block font-medium group py-2 px-5 my-10"
          onClick={() => navigate("products")}
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-highlight group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-highlight group-hover:bg-[#b499fa]"></span>
          <span className="relative text-highlight font-semibold">
            Shop Now
          </span>
        </button>
      </div>
      <div className="w-1/3 hidden lg:block m-10">
        <img src="src/assets/icons/hero-section.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
