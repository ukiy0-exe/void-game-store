import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";
import { clearCart } from "../contexts/CartContext/actions";

export function useClearCart() {
  const { dispatch } = useContext(CartContext);

  return () => {
    dispatch(clearCart());
  };
}
