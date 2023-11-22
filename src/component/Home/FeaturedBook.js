import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function FeaturedBook({ book, index }) {
  const { increaseItemQuantity } = useShoppingCart();
  return (
    <div className="featured-book ar" key={index}>
      <div className="icons">
        <a href="#">
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </div>
      <div className="book-image">
        <img src={book.image} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-price">
        <span className="book-new-price">{book.newPrice}دج</span>
        <span className="book-old-price">{book.oldPrice}دج</span>
      </div>
      <div className="add-to-cart" onClick={() => increaseItemQuantity(index)}>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
}

export default FeaturedBook;
