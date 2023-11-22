import { React, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function CheckOut() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { total, setCartItems } = useShoppingCart();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      alert("رقم الهاتف يجب أن يكون مكونًا من 10 أرقام");
      return;
    }

    const order = {
      name: name,
      lastName: lastName,
      adress: adress,
      phoneNumber: phoneNumber,
      total: `${total} دج`,
    };

    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    window.location.replace("/");
    setCartItems([]);
  };

  return (
    <form className="checkOut-form" onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input-field firstName">
          <label>الإسم</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-field lastName">
          <label>اللقب</label>
          <input
            type="text"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="input-field adress">
          <label>العنوان</label>
          <input
            type="text"
            required
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          />
        </div>
        <div className="input-field phoneNumber">
          <label>رقم الهاتف</label>
          <input
            type="number"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
      </div>

      <button type="submit" className="btn">
        إرسال
      </button>
    </form>
  );
}

export default CheckOut;
