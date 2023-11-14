import { React, useState, createContext, useContext } from "react";
import Favorite from "../pges/Favorite";

// Create Context
const FavoriteItemsContext = createContext({});

export function useFavoriteIcon() {
  return useContext(FavoriteItemsContext);
}

// Context Provider
export function FavoriteItemsProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  console.log("favoriteItems = ", favoriteItems);

  function addToFavorite(id) {
    console.log("id ", id);

    setFavoriteItems((currentItems) => {
      // Check if the item already exists in favorites
      if (currentItems.some((item) => item.id === id)) {
        // Item already exists, so no need to add it again
        return currentItems;
      }

      // Item doesn't exist, add it to favorites
      return [
        ...currentItems,
        {
          id,
        },
      ];
    });
  }

  function removeFromFavorite(id) {
    setFavoriteItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <FavoriteItemsContext.Provider
      value={{
        addToFavorite,
        removeFromFavorite,
        favoriteItems,
      }}
    >
      {children}
    </FavoriteItemsContext.Provider>
  );
}
