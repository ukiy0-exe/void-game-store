import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";
import { addToCart } from "../contexts/CartContext/actions";

export function useAddToCart() {
  const { dispatch } = useContext(CartContext);

  return (product) => {
    dispatch(addToCart(product));
  };
}
