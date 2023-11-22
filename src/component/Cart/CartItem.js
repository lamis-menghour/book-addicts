import { React } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import books from "../../dataBase/data";

function CartItem({ id, quantity }) {
  const { removeFromCart, editCartItem } = useShoppingCart();
  const item = books.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <div className="item">
      <img
        className="item-image"
        src={`/img/${item.title}.JPG`}
        alt={item.title}
      />
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <div className="item-details">
          <div className="item-totalPrice">
            <span>{quantity * item.price} دج</span>
            <span className="item-totalPrice-details">
              <span className="item-quantity">{quantity} </span> &times;{" "}
              <span className="item-price">{item.price} دج</span>
            </span>
          </div>
          <span className="item-icons">
            <span className="icon">
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => removeFromCart(item.id)}
              />
            </span>
            <span className="icon">
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => {
                  const newQuantityInput = prompt("Enter the new quantity:");
                  if (
                    !isNaN(newQuantityInput) &&
                    newQuantityInput.trim() !== ""
                  ) {
                    // It's a valid number, parse it and call your editCartItem function
                    editCartItem(item.id, parseInt(newQuantityInput, 10));
                  } else {
                    // It's not a valid number, handle the error or provide feedback to the user
                    alert("Please enter a valid number for the quantity.");
                  }
                }}
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
