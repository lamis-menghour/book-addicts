import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";

function BookCard({ item }) {
  const { id, title, author, pages, reviews, price } = item;
  const { increaseItemQuantity } = useShoppingCart();
  const { addToFavorite } = useFavoriteIcon();

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={`/img/${title}.JPG`} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="book-pages-reviews">
          <span className="book-pages">{pages} صفحة</span>
          <span className="book-reviews">({reviews})</span>
        </div>

        <p className="book-price">
          {price} دج
          <span className="add-to-cart">
            <FontAwesomeIcon
              icon={faHeart}
              className="liked"
              onClick={() => addToFavorite(id)}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="add-to-cart"
              onClick={() => increaseItemQuantity(id)}
            />
          </span>
        </p>
        <Link to="/إقرأ-المزيد" className="view-more">
          إقرأ المزيد
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
