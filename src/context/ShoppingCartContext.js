import { React, useState, createContext, useContext } from "react";
import Cart from "../pges/Cart";

// Create Context
const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// Context Provider
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems = ", cartItems);

  function getItemQuantity(id) {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  function increaseItemQuantity(id) {
    setCartItems((currentItems) => {
      // Check if the item already exists in cart
      const existingItem = currentItems.find((item) => item.id === id);

      if (!existingItem) {
        return [
          ...currentItems,
          {
            id,
            quantity: 1,
          },
        ];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });

    const updatedItem = cartItems.find((item) => item.id === id);
    return updatedItem ? updatedItem.quantity : 0;
  }

  function decreaseItemQuantity(id) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return currentItems.filter((item) => item.id !== id);
      }
    });

    const updatedItem = cartItems.find((item) => item.id === id);
    return updatedItem ? updatedItem.quantity : 0;
  }

  function removeFromCart(id) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
