import { Link } from "react-router-dom";
import { React } from "react";
import CartItem from "../component/Cart/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Cart() {
  const { cartItems, total } = useShoppingCart();

  return (
    <div className="cart-section">
      {cartItems && cartItems.length > 0 ? (
        <div className="items-container">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p id="total">
            المجموع : {""}
            <span>{total} دج</span>
          </p>
          <Link to="/checkOut" className="checkOut">
            الدفع
          </Link>
        </div>
      ) : (
        <p className="cart-empty">قائمة المشتريات فارغة.</p>
      )}
    </div>
  );
}

export default Cart;
