import React from "react";
import Marquee from "react-fast-marquee";
import { useFetch } from "../../hooks/useFetch";

const LogoTicker = () => {
  const { data } = useFetch("src/data/partners.json");

  return (
    <Marquee
      direction={"right"}
      gradient={true}
      gradientColor={"#DDD6FE"}
      speed={50}
    >
      <div className=" w-full lg:w-dvw flex justify-around  items-center border-t-2 border-b-2 border-highlight text-highlight">
        {data.map((partner) => (
          <div className="flex justify-between  items-center" key={partner.id}>
            <img
              loading="lazy"
              className="w-8 my-5 opacity-40"
              src={partner.img}
              alt={partner.id}
            />
            <p className="mx-2 opacity-40">{partner.company_name}</p>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default LogoTicker;
