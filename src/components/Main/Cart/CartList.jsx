import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";

const CartList = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <ul>
          {state.map((product, index) => (
            <li key={index}>
              {product.company_name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
      {state.length > 0 && <button>Clear Cart</button>}
    </div>
  );
};

export default CartList;
