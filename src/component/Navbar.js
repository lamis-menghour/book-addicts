import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
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

  return (
    <nav className="navbar ar">
      <div className="nav-links">
        <Link to="/" className="logo">
          <img src="/img/logo.png" alt="logo" />
        </Link>
        <Link to="/" className="nav-link active">
          الرئيسية
        </Link>
        <Link to="/كتبنا" className="nav-link">
          كتبنا
        </Link>
        <Link to="/المفضلة" className="nav-link">
          المفضلة
        </Link>
        <Link to="/مشترياتي" className="nav-link">
          مشترياتي
        </Link>
      </div>

      <div className="nav-left">
        <Link to="/Login" className="user">
          <FontAwesomeIcon icon={faUser} />
        </Link>

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
}

export default Navbar;
