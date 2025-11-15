import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const session = sessionStorage.getItem("session");
    return session ? JSON.parse(session) : null;
  });

  const login = (name, password) => {
    if (name === "admin" && password === "1234") {
      const session = { name };
      setUser(session);
      sessionStorage.setItem("session", JSON.stringify(session));
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;