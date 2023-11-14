import { React } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import books from "../../dataBase/data";

function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = books.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <div className="item">
      <img className="item-image" src={`/img/${item.title}.JPG`} />
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <div className="item-details">
          <p>
            <span className="item-quantity">{quantity} {" "}</span> &times;{" "}
            <span className="item-price">{item.price}</span> دج
          </p>
          <p className="item-totalPrice">
            {quantity * item.price} دج
            <span className="item-delete">
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => removeFromCart(item.id)}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
