import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import CartItem from "../component/Cart/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import books from "../../src/dataBase/data";

function Cart({}) {
  const [total, setTotal] = useState();
  const { cartItems } = useShoppingCart();

  useEffect(() => {
    // Calculate the total when cartItems change

    // array.reduce(callback, initialValue);
    // The reduce function is a powerful array method in JavaScript that is used to reduce an array
    // to a single value. It iterates over each element of the array and applies a callback function
    // to accumulate a single result.

    const newTotal = cartItems.reduce((acc, item) => {
      console.log(item);
      return acc + item.quantity * books[item.id].price;
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);

  console.log("total = ", total);
  return (
    <div className="cart-section">
      {cartItems && cartItems.length > 0 ? (
        <div className="items-container">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p id="total">
            {" "}
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
