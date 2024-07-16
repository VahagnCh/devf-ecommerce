import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const login = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      const payload = jwtDecode(token);
      setIsAuth(true);
      setUserPayload(payload);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUserPayload(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = jwtDecode(token);
        setIsAuth(true);
        setUserPayload(payload);
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
