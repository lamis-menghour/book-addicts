import { React, useEffect, useState } from "react";
// import { useLocalStorage } from "../../hooks/useLocalStorage";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/orders", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((orders) => {
        setOrders(orders);
        console.log("data =", orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [setOrders]);

  return (
    <div className="orders-container">
      <h2>جدول الطلبات</h2>
      <table>
        <thead>
          <tr>
            <th>الإسم</th>
            <th>اللقب</th>
            <th>العنوان</th>
            <th>رقم الهاتف</th>
            <th>المجموع</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.lastName}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.total}</td>
              {console.log(order)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
