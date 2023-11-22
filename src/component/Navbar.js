import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAdmin } = useAuthContext();
  const location = useLocation();

  const themes = [
    {
      // light theme
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.5)",
      "--text-color": "#0a0a0a",
      "--text-light": "#575757",
    },
    {
      // dark theme
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(29, 29, 29, 0.9)",
      "--shadow-color": "rgba(0, 0, 0, 0.5)",
      "--text-color": "#ffffff",
      "--text-light": "rgba(255, 255, 255, 0.5)",
    },
  ];
  const [darkTheme, setDarkTheme] = useState(false);
  const [settings, setSettings] = useState(themes[0]);

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  function changeTheme() {
    setDarkTheme(!darkTheme);
    const _theme = darkTheme ? { ...themes[0] } : { ...themes[1] };
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

  // -------------------------------

  const UserNavbar = () => (
    <nav className="navbar">
      <div className="nav-links">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          الرئيسية
        </Link>
        <Link
          to="/كتبنا"
          className={
            location.pathname === "/كتبنا" ? "nav-link active" : "nav-link"
          }
        >
          كتبنا
        </Link>
        <Link
          to="/المفضلة"
          className={
            location.pathname === "/المفضلة" ? "nav-link active" : "nav-link"
          }
        >
          المفضلة
        </Link>
        <Link
          to="/مشترياتي"
          className={
            location.pathname === "/مشترياتي" ? "nav-link active" : "nav-link"
          }
        >
          مشترياتي
        </Link>
      </div>

      <div className="nav-left">
        <div className="switch">
          <div
            className="theme"
            style={{
              justifyContent: darkTheme === true ? "flex-start" : "flex-end",
              backgroundColor: darkTheme === true ? "rgba(0, 0, 0)" : "#6a6d00",
            }}
            onClick={changeTheme}
          >
            <div className={darkTheme === true ? "dark" : "light"}></div>
          </div>
        </div>
      </div>
    </nav>
  );

  const AdminNavbar = () => (
    <nav className="navbar">
      <div className="nav-links">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <Link
          to="/admin/products"
          className={
            location.pathname === "/admin/products"
              ? "nav-link active"
              : "nav-link"
          }
        >
          كتبي
        </Link>

        <Link
          to="/admin/orders"
          className={
            location.pathname === "/admin/orders"
              ? "nav-link active"
              : "nav-link"
          }
        >
          طلباتي
        </Link>
      </div>

      <div className="nav-left">
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div className="switch">
          <div
            className="theme"
            style={{
              justifyContent: darkTheme === true ? "flex-start" : "flex-end",
              backgroundColor: darkTheme === true ? "rgba(0, 0, 0)" : "#6a6d00",
            }}
            onClick={changeTheme}
          >
            <div className={darkTheme === true ? "dark" : "light"}></div>
          </div>
        </div>
      </div>
    </nav>
  );

  return <div>{isAdmin ? <AdminNavbar /> : <UserNavbar />}</div>;
}

export default Navbar;
