import React, { useEffect, useMemo, useState } from "react";
import { useCard } from "../context/Cart";
import CartItemsCard from "../components/CartItemsCard";
const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const {removeFromCart , cartItems} = useCard();
  const Totalprice = useMemo(() => {
    let totalAmount = cartItem.reduce((total, currentValue) => {
      if (!currentValue?.price) {
        return total;
      }
      return (total + currentValue.price) * currentValue.quantity;
    }, 0);
    return totalAmount;
  }, [cartItem]);

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold tracking-wider text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>
          <CartItemsCard
            Totalprice={Totalprice}
            cartItem={cartItem}
            removeItem={removeFromCart}
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;