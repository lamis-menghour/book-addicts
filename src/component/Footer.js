import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faT,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-section">
      <div className="top">
        <div className="contact">
          <h1>تواصلو معنا</h1>
          <div className="social-icons">
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="newsletter">
          <form action="">
            <h3>اشترك للحصول على آخر التحديثات</h3>
            <div className="inputs">
              <input
                type="email"
                name=""
                placeholder="قم بإدخال بريدك الإلكتروني"
                id=""
                className="box"
              />
              <input type="submit" value="اشترك الان" className="btn" />
            </div>
          </form>
        </div>
      </div>
      <div className="bottom">
        <FontAwesomeIcon icon={faAngleUp} /> {"  "} إذهب إلى الأعلى 
      </div>
    </div>
  );
}

export default Footer;
