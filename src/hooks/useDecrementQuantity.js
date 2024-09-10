import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";
import { decrementQuantity } from "../contexts/CartContext/actions";

export function useDecrementQuantity() {
  const { dispatch } = useContext(CartContext);

  return (product) => {
    dispatch(decrementQuantity(product));
  };
}
