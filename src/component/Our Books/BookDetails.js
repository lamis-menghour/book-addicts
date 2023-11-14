import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";
import books from "../../dataBase/data";

function BookDetails({ id }) {
  const [getItemQuantity, increaseItemQuantity, decreaseItemQuantity] =
    useShoppingCart();
  const { addToFavorite } = useFavoriteIcon();

  // // Use the 'id' parameter instead of the outer 'item' variable
  const BOOK = books.find((book) => book.id === id);
  if (!BOOK) return <p>لم يتم العثور على الكتاب</p>;

  return (
    <div className="book-details">
      <div className="book-cover">
        <img src={`/img/${BOOK.title}.JPG`} alt={`${BOOK.title} cover`} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{BOOK.title}</h3>
        <p className="book-author">{BOOK.author}</p>
        <p className="book-dscrp">{BOOK.dscrp}</p>
        <div className="book-pages-reviews">
          <span className="book-pages">{BOOK.pages} صفحة</span>
          <span className="book-reviews">({BOOK.reviews})</span>
        </div>

        <p className="book-price">
          <div className="book-price-quantity">
            <span className="total-price">{BOOK.price} دج </span>
            <span className="quantity">
              <span
                className="minus"
                onClick={() => decreaseItemQuantity(BOOK.id)}
              >
                -
              </span>
              <span className="number">{getItemQuantity(BOOK.id)}</span>
              <span
                className="plus"
                onClick={() => increaseItemQuantity(BOOK.id)}
              >
                +
              </span>
            </span>
          </div>

          <span className="add-to-cart">
            <FontAwesomeIcon
              icon={faHeart}
              className="liked"
              onClick={() => addToFavorite(BOOK.id)}
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="add-to-cart"
              onClick={() => increaseItemQuantity(BOOK.id)}
            />
          </span>
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
