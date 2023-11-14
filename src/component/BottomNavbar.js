import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <Link to="/" className="nav-link active">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/كتبنا" className="nav-link">
        <FontAwesomeIcon icon={faBook} />
      </Link>
      <Link to="/المفضلة" className="nav-link">
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link to="/مشترياتي" className="nav-link">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </nav>
  );
}

export default BottomNavbar;
