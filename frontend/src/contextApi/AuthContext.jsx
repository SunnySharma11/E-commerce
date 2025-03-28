import { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const authToken = useMemo(() => (token ? `Bearer ${token}` : ""), [token]);

  const storeTokenInLS = (serverToken) => {
    if (serverToken) {
      setToken(serverToken);
      localStorage.setItem("token", serverToken);
    } else {
      console.error("No token received!");
    }
  };

  const logOutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, authToken, storeTokenInLS, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};