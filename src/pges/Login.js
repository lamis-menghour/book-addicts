import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const admin = {
    email: "admin@gmail.com",
    password: "adminadmin",
  };

  function submitForm(e) {
    e.preventDefault();

    if (email === admin.email) {
      if (password === admin.password) {
        alert("welcome admin");
      } else {
        setPassword("");
        alert("كلمة المرور خاطئة");
      }
    } else if (email === "") {
      alert("الرجاء إدخال بريدك الإلكتروني");
    } else {
      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className="login-form">
      <a href="/" id="close-login-form" >
        <FontAwesomeIcon icon={faTimes} />
      </a>
      <form action="">
        <h2>تسجيل الدخول</h2>
        <span>البريد الإلكتروني</span>
        <input
          type="email"
          name=""
          className="box"
          placeholder="example@gmail.com"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <span>كلمة المرور</span>
        <input
          type="password"
          name=""
          className="box"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="checkbox">
          <input type="checkbox" name="" id="remamber-me" />
          <label for="remamber-me">تذكرني</label>
        </div>
        <input
          type="submit"
          value="الدخول"
          className="btn"
          onClick={submitForm}
        />
        <p>
          نسيت كلمةالمرور؟ <a href="#">اضغط هنا</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
