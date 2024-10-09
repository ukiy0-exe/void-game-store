import { useContext } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import ThemeSwitcher from "./ThemeSwitcher";
import { CartContext } from "../../contexts/CartContext/CartContext";

const Icons = () => {
  const { state } = useContext(CartContext);
  const totalQnty = state.reduce((acc, item) => acc + item.cart_quantity, 0);
  return (
    <div className="menu flex basis-1/3 items-center justify-around md:basis-1/6">
      <Link to="/cart" className="px-2">
        <span className="relative">
          <img src="/assets/icons/shopping-cart.svg" alt="" />
          <span className="absolute -left-2 -top-2">
            {state.length > 0 ? (
              <p className="h-[25px] w-[25px] rounded-full bg-highlight p-1 text-center text-xs font-bold text-white opacity-80">
                {totalQnty}
              </p>
            ) : (
              ""
            )}
          </span>
        </span>
      </Link>
      <Link className="px-2">
        <img src="/assets/icons/profile.svg" alt="" />
      </Link>
      <Link className="px-2">
        <ThemeSwitcher />
      </Link>
      <Link className="px-2">
        <Hamburger />
      </Link>
    </div>
  );
};

export default Icons;
