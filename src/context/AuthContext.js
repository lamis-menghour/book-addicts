import React, { useContext, createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);

  const admin = {
    email: "admin@gmail.com",
    password: "adminadmin",
  };

  const checkUserRole = (email, password) => {
    if (email === admin.email) {
      if (password === admin.password) {
        // alert("Welcome admin");
        setIsAdmin(true);
      } else {
        alert("كلمة المرور خاطئة");
      }
    } else if (email === "") {
      alert("الرجاء إدخال بريدك الإلكتروني");
    } else {
      alert(" البريد الإلكتروني خاطئ");
    }
    console.log("authoContext ", isAdmin);
    if (isAdmin) {
      window.location.replace("/admin/products");
    }
  };

  return (
    <AuthContext.Provider value={{ isAdmin, checkUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
