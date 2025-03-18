import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize token lazily
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // Memoized auth token
  const authToken = useMemo(() => (token ? `Bearer ${token}` : ""), [token]);

  // Store token in localStorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Logout function
  const logOutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  // Fetch user details
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
  }, [token]); // Refetch user when token changes

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, user, authToken, isLoading, storeTokenInLS, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
