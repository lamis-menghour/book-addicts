import React from "react";

function CheckOut() {
  return (
    <form className="checkOut-form">
      <div className="inputs">
        <div className="input-field firstName">
          <label>الإسم</label>
          <input type="text" required />
        </div>
        <div className="input-field lastName">
          <label>اللقب</label>
          <input type="text" required />
        </div>
        <div className="input-field adress">
          <label>العنوان</label>
          <input type="text" required />
        </div>
        <div className="input-field phoneNumber">
          <label>رقم الهاتف</label>
          <input type="number" required />
        </div>
      </div>

      <button type="submit">إرسال</button>
    </form>
  );
}

export default CheckOut;
