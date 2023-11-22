// import { React, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useAuthContext } from "../context/AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { isAdmin, checkUserRole } = useAuthContext();

//   const admin = {
//     email: "admin@gmail.com",
//     password: "adminadmin",
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     checkUserRole(email, password, admin);

//     // if (isAdmin) {
//     //   window.location.replace("/admin/products");
//     // }
//   };

//   return (
//     <div className="login-form">
//       <a href="/" id="close-login-form">
//         <FontAwesomeIcon icon={faTimes} />
//       </a>
//       <form action="">
//         <h2>تسجيل الدخول</h2>
//         <span>البريد الإلكتروني</span>
//         <input
//           type="email"
//           name=""
//           className="box"
//           placeholder="example@gmail.com"
//           id="email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           required
//         />
//         <span>كلمة المرور</span>
//         <input
//           type="password"
//           name=""
//           className="box"
//           placeholder="password"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           required
//         />
//         <div className="checkbox">
//           <input type="checkbox" name="" id="remamber-me" />
//           <label for="remamber-me">تذكرني</label>
//         </div>
//         <input
//           type="submit"
//           value="الدخول"
//           className="btn"
//           onClick={handleLogin}
//         />
//         <p>
//           نسيت كلمةالمرور؟ <a href="#">اضغط هنا</a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../context/AuthContext";
// import { useLocalStorage } from "../hooks/useLocalStorage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [checked, setChecked] = useLocalStorage("checked", false);

  const { checkUserRole } = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    checkUserRole(email, password);
  };

  return (
    <div className="login-form">
      <a href="/" id="close-login-form">
        <FontAwesomeIcon icon={faTimes} />
      </a>
      <form action="">
        <h2>تسجيل الدخول</h2>
        <span>البريد الإلكتروني</span>
        <input
          type="email"
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
          className="box"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="checkbox">
          <input
            type="checkbox"
            id="remember-me"
            // checked={checked}
            // onChange={(e) => setChecked(!checked)}
          />
          <label htmlFor="remember-me">تذكرني</label>
        </div>
        <input
          type="submit"
          value="الدخول"
          className="btn"
          onClick={handleLogin}
        />
        <p>
          نسيت كلمةالمرور؟ <a href="/">اضغط هنا</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
