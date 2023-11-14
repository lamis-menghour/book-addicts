import React from "react";
import FavoriteItem from "../component/Favorite/FavoriteItem";
import { useFavoriteIcon } from "../context/FavoriteItemsContext";

function Favorite() {
  const { favoriteItems } = useFavoriteIcon();

  return (
    <div className="cart-section">
      {favoriteItems && favoriteItems.length > 0 ? (
        <div className="items-container">
          {favoriteItems.map((item) => (
            <FavoriteItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p>قائمة الكتب المفضلة فارغة.</p>
      )}
    </div>
  );
}

export default Favorite;
