import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import { useRemoveFromCart } from "../../../hooks/useRemoveFromCart";
import { useClearCart } from "../../../hooks/useClearCart";
import { useNavigate } from "react-router-dom";
import { useIncrementQuantity } from "../../../hooks/useIncrementQuantity";
import { useDecrementQuantity } from "../../../hooks/useDecrementQuantity";

const CartList = () => {
  const { state } = useContext(CartContext);
  const removeFromCart = useRemoveFromCart();
  const clearCart = useClearCart();
  const navigate = useNavigate();
  const incrementQnty = useIncrementQuantity();
  const decrementQnty = useDecrementQuantity();
  const totalPrice = state.reduce(
    (acc, item) => acc + item.price * item.cart_quantity,
    0,
  );
  const totalQnty = state.reduce((acc, item) => acc + item.cart_quantity, 0);

  console.log(totalPrice);

  return (
    <div className="customBackground flex h-full min-h-lvh items-center justify-center py-10">
      <div className="bg-[#CDC5F1] px-10 py-6 text-highlight">
        {state.length === 0 ? (
          <h2 className="my-2 text-center text-2xl font-semibold">
            Shopping Cart
          </h2>
        ) : (
          <h2 className="my-2 text-center text-2xl font-semibold">
            Shopping Cart 🛒
          </h2>
        )}
        {state.length === 0 ? (
          <p className="text-center">The cart is empty 😢</p>
        ) : (
          <ul>
            {state.map((product, index) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-4 items-center justify-center gap-4 md:grid-cols-[150px_3fr_1fr_20px_30px_20px_20px]"
                >
                  <img
                    src={product.img}
                    alt="title-img"
                    loading="lazy"
                    className="my-2 hidden h-[60px] w-full border-2 border-highlight object-cover md:inline"
                  />
                  <h2 className="col-span-5 md:col-span-1">
                    {product.company_name}
                  </h2>
                  <p className="mb-6 font-semibold md:my-0">${product.price}</p>
                  <button
                    onClick={() => {
                      decrementQnty(product);
                    }}
                    className="mb-6 md:my-0"
                  >
                    -
                  </button>
                  <p className="mb-6 text-center md:my-0">
                    {product.cart_quantity}
                  </p>
                  <button
                    className="mb-6 md:my-0"
                    onClick={() => {
                      incrementQnty(product);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="mb-6 md:my-0"
                    onClick={() => removeFromCart(index)}
                  >
                    ❌
                  </button>
                </li>
              );
            })}
            <p className="mt-5 border-t-2 border-highlight border-opacity-30 py-4 text-center">
              Products quantity:
              <span className="mx-2 font-semibold">{totalQnty}</span>
            </p>
            <p className="text-center">
              Total:{" "}
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </p>
          </ul>
        )}

        {state.length > 0 && (
          <div className="flex w-full justify-between">
            <button
              className="group relative my-2 inline-block w-[150px] px-5 py-2 font-medium"
              onClick={clearCart}
            >
              <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#fa9999]"></span>
              <span className="relative font-semibold text-highlight">
                Clear Cart
              </span>
            </button>
            <button
              className="group relative my-2 inline-block px-5 py-2 font-medium"
              onClick={() => {
                clearCart();
                navigate("/purchase");
              }}
            >
              <span className="duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-highlight transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-highlight bg-white group-hover:bg-[#a9fa99]"></span>
              <span className="relative font-semibold text-highlight">
                Purchase
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
