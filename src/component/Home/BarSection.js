import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faLock,
  faRotateRight,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function BarSection() {
  const barItems = [
    {
      icon: faTruckFast,
      // title: "Free Shipping",
      // subTitle: "order over $100",
      title: "توصيل مجاني",
      subTitle: "طلبية أكثر من 10000 دج",
    },
    {
      icon: faLock,
      // title: "secure payment",
      // subTitle: "100 secure payment",
      title: "دفع آمن 100%",
      subTitle: "الدفع عند الإستلام",
    },
    {
      icon: faRotateRight,
      // title: "easy returns",
      // subTitle: "10 days returns",
      title: "استرجاع سهل",
      subTitle: "استرجاع في غضون 5 أيام",
    },
    {
      icon: faHeadset,
      // title: "24/7 Support",
      // subTitle: "Call us nytime",
      title: "24/7 خدمة الزبائن",
      subTitle: "اتصل بنا في أي وقت",
    },
  ];

  return (
    <div className="icons-container ar">
      {barItems.map((item, index) => (
        <div className="icons" key={index}>
          <FontAwesomeIcon icon={item.icon} />
          <div className="text">
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BarSection;
