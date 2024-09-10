import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useFetch } from "../../hooks/useFetch";
import About from "../../pages/About";
import { ThemeContext } from "../../contexts/ThemeContext";

const LogoTicker = () => {
  const { data } = useFetch("src/data/partners.json");
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Marquee
        direction={"right"}
        gradient={darkMode ? true : false}
        gradientColor={"#DDD6FE"}
        speed={60}
      >
        <div className="flex w-full items-center justify-around border-b-2 border-t-2 border-highlight text-highlight dark:bg-zinc-900 dark:text-zinc-400 lg:w-dvw">
          {data.map((partner) => (
            <div
              className="flex items-center justify-between opacity-40 dark:opacity-100"
              key={partner.id}
            >
              <img
                loading="lazy"
                className="my-5 w-8"
                src={partner.img}
                alt={partner.id}
              />
              <p className="mx-2">{partner.company_name}</p>
            </div>
          ))}
        </div>
      </Marquee>
      <About />
    </>
  );
};

export default LogoTicker;
