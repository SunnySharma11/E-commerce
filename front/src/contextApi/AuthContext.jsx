import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const authToken = useMemo(() => (token ? `Bearer ${token}` : ""), [token]);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const logOutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const userAuthentication = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: { Authorization: authToken },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]); // Run again if token changes

  const [services, setServices] = useState([]);

  const fetchService = async () => {
    try {
      const response = await fetch("http://localhost:5000/service");
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logOutUser, isLoggedIn: !!token, user, services, authToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
