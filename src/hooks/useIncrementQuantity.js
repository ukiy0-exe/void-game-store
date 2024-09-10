import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";
import { incrementQuantity } from "../contexts/CartContext/actions";

export function useIncrementQuantity() {
  const { dispatch } = useContext(CartContext);

  return (product) => {
    dispatch(incrementQuantity(product));
  };
}
