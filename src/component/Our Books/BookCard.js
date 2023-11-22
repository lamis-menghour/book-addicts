import { Link } from "react-router-dom";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";
import { useBookDetails } from "../../context/BookDetailsContext";

function BookCard({ item }) {
  const { id, title, author, price } = item;
  const { getItemQuantity, increaseItemQuantity, cartItems } =
    useShoppingCart();
  const { addToFavorites, favoriteItems } = useFavoriteIcon();
  const { openBookDetails } = useBookDetails();

  const isItemFavorite = favoriteItems.some((item) => item.id === id);
  const isItemCart = cartItems.some((item) => item.id === id);

  const [isHeartHovered, setHeartHovered] = useState(false);
  const [isCartHovered, setCartHovered] = useState(false);

  const heartStyle = {
    color: isItemFavorite ? "red" : "var(--text-color)",
    ...(isHeartHovered && { color: "red" }),
  };
  const shoppingCartStyle = {
    color: isItemCart ? "var(--green)" : "var(--text-color)",
    ...(isCartHovered && { color: "var(--green)" }),
  };

  const quantity = getItemQuantity(id);

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={`/img/${title}.JPG`} alt={title} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        {/* <div className="book-pages-reviews">
          <span className="book-pages">{pages} صفحة</span>
          <span className="book-reviews">({getItemQuantity(id)})</span>
        </div> */}

        <div className="book-price">
          {price} دج
          <div className="add-to-cart">
            <FontAwesomeIcon
              icon={isItemFavorite ? faHeartSolid : faHeartRegular}
              style={heartStyle}
              className="heart"
              onClick={() => addToFavorites(id)}
              onMouseEnter={() => setHeartHovered(true)}
              onMouseLeave={() => setHeartHovered(false)}
            />

            <div className="shopping-cart-quantity">
              {quantity > 0 ? <p className="quantity">{quantity}</p> : null}
              <FontAwesomeIcon
                icon={faCartShopping}
                style={shoppingCartStyle}
                className="shopping-cart"
                onClick={() => increaseItemQuantity(id)}
                onMouseEnter={() => setCartHovered(true)}
                onMouseLeave={() => setCartHovered(false)}
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

export default BookCard;
