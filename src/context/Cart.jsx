import React, { createContext, useContext, useState } from "react";

// Step 1: Create a new context
const CardContext = createContext();

// Step 2: Create a context provider component
export const CardProvider = ({ children }) => {
  // Move Zustand store logic into context provider
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isExist = cartItems.find((product) => product.id === item.id);
    if (isExist) {
      const updatedCartItems = cartItems.map((product) =>
        product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

 

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };



  // Step 3: Return the context provider with the Zustand store logic
  return (
    <CardContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// Step 4: Custom hook to consume the context
export const useCard = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
