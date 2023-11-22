import books from "../../dataBase/data";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";
import { useBookDetails } from "../../context/BookDetailsContext";

function FavoriteItem({ id }) {
  // const { removeFromFavorite } = useFavoriteIcon();
  const item = books.find((item) => item.id === id);
  const { title, author, price } = item;
  const { getItemQuantity, increaseItemQuantity, cartItems } =
    useShoppingCart();
  const { removeFromFavorites } = useFavoriteIcon();
  const [isHovered, setHovered] = useState(false);

  const { openBookDetails } = useBookDetails();
  if (item == null) return null;

  const isItemCart = cartItems.some((item) => item.id === id);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const shoppingCartStyle = {
    color: isItemCart ? "var(--green)" : "var(--text-color)",
    ...(isHovered && { color: "var(--green)" }),
  };

  const quantity = getItemQuantity(id);
  return (
    <div className="card">
      <div className="cover">
        <img src={`/img/${title}.JPG`} alt={title} />
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>

        <div className="price">
          {price} دج
          <div className="favorite-icons">
            <FontAwesomeIcon
              icon={faHeart}
              className="liked"
              onClick={() => removeFromFavorites(id)}
            />
            <div className="shopping-cart-quantity">
              {quantity > 0 ? <p className="quantity">{quantity}</p> : null}
              <FontAwesomeIcon
                icon={faCartShopping}
                style={shoppingCartStyle}
                className="add-to-cart"
                onClick={() => increaseItemQuantity(id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </div>
        <Link
          to="/إقرأ-المزيد"
          className="view-more"
          onClick={() => openBookDetails(id)}
        >
          إقرأ المزيد
        </Link>
      </div>
    </div>
  );
}

export default FavoriteItem;
