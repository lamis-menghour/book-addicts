import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faClose } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";
import books from "../../dataBase/data";
import { useBookDetails } from "../../context/BookDetailsContext";

function BookDetails({ link }) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    cartItems,
  } = useShoppingCart();
  const { addToFavorites, favoriteItems } = useFavoriteIcon();
  const { selectedBookId, closeBookDetails } = useBookDetails();
  const quantity = getItemQuantity(selectedBookId) || 1;

  // Use the 'id' parameter instead of the outer 'item' variable
  const BOOK = books.find((book) => book.id === selectedBookId);

  const isItemFavorite = favoriteItems.some(
    (item) => item.id === selectedBookId
  );
  const isItemCart = cartItems.some((item) => item.id === selectedBookId);

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

  return (
    <div className="book-details-section">
      {!BOOK ? (
        <p className="empty">لم يتم العثور على الكتاب</p>
      ) : (
        <div className="book-details">
          <div className="book-details-cover">
            <img src={`/img/${BOOK.title}.JPG`} alt={`${BOOK.title} cover`} />
          </div>
          <div className="book-details-info">
            <h3 className="book-details-title">{BOOK.title}</h3>
            <p className="book-details-author">{BOOK.author}</p>
            <p className="book-details-dscrp">{BOOK.dscrp}</p>
            <div className="book-details-pages-reviews">
              <span className="book-details-pages">{BOOK.pages} صفحة</span>
              <span className="book-details-reviews">({BOOK.reviews}21)</span>
            </div>

            <div className="book-details-price">
              <div className="book-details-price-quantity">
                <span className="total-price">{BOOK.price * quantity} دج </span>
                <span className="quantity">
                  <span
                    className="minus"
                    onClick={() => decreaseItemQuantity(BOOK.id)}
                  >
                    -
                  </span>
                  <span className="number">{quantity}</span>
                  <span
                    className="plus"
                    onClick={() => increaseItemQuantity(BOOK.id)}
                  >
                    +
                  </span>
                </span>
              </div>

              <div className="add-to-cart">
                <FontAwesomeIcon
                  icon={isItemFavorite ? faHeartSolid : faHeartRegular}
                  style={heartStyle}
                  className="liked"
                  onClick={() => addToFavorites(BOOK.id)}
                  onMouseEnter={() => setHeartHovered(true)}
                  onMouseLeave={() => setHeartHovered(false)}
                />

                <div className="shopping-cart-quantity">
                  {isItemCart && quantity >0  ? <p className="quantity">{quantity}</p> : null}
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={shoppingCartStyle}
                    className="shopping-cart"
                    onClick={() =>
                      quantity === 1
                        ? increaseItemQuantity(BOOK.id)
                        : getItemQuantity(BOOK.id)
                    }
                    onMouseEnter={() => setCartHovered(true)}
                    onMouseLeave={() => setCartHovered(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="close">
            <a href={link} onClick={closeBookDetails}>
              <FontAwesomeIcon icon={faClose} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
