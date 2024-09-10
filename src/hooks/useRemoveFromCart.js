import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";
import { removeFromCart } from "../contexts/CartContext/actions";

export function useRemoveFromCart() {
  const { dispatch } = useContext(CartContext);

  return (index) => {
    dispatch(removeFromCart(index));
  };
}
