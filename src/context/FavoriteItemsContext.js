import { React, useState, createContext, useContext } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

// Create Context
const FavoriteItemsContext = createContext({});

export function useFavoriteIcon() {
  return useContext(FavoriteItemsContext);
}

// Context Provider
export function FavoriteItemsProvider({ children }) {
  const [favoriteItems, setFavoriteItems] =  useLocalStorage("favorite-books", []);

  console.log("favoriteItems = ", favoriteItems);
  

  function addToFavorites(id) {
    setFavoriteItems((currentItems) => {
      // Check if the item already exists in favorites
      const isItemInFavorites = currentItems.some((item) => item.id === id);
  
      if (isItemInFavorites) {
        // Item already exists, remove it from favorites
        return currentItems.filter((item) => item.id !== id);
      } else {
        // Item doesn't exist, add it to favorites
        return [...currentItems, { id }];
      }
    });
    
  }

  function removeFromFavorites(id) {
    setFavoriteItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <FavoriteItemsContext.Provider
      value={{
        addToFavorites,
        removeFromFavorites,
        favoriteItems,
      }}
    >
      {children}
    </FavoriteItemsContext.Provider>
  );
}
