import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create context
const UserContext = createContext();

// 2️⃣ Custom hook
const useUserAuthContext = () => useContext(UserContext);

// 3️⃣ Utility: manually decode JWT payload
const parseJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Failed to parse JWT", e);
    return null;
  }
};

const AuthContextProvider = ({ children }) => {
  const [userType, setUserType] = useState(""); // "" | "applyUser" | "uploadUser"
  const [action, setAction] = useState("login"); // "login" | "signup"

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null); // in context only


  const [loading, setLoading] = useState(true);

  // Login → save token and parse user data
  const login = (newToken) => {
    const decoded = parseJwt(newToken);
    if (decoded) {
      setToken(newToken);
      setUserData(decoded); // store decoded data in context
      setIsAuthenticated(true);

      // persist token in localStorage
      localStorage.setItem("authToken", newToken);
    }
  };

  // Logout → clear everything
  const logout = () => {
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };

  // Restore token from localStorage on page load
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      const decoded = parseJwt(savedToken);
      if (decoded) {
        setToken(savedToken);
        setUserData(decoded);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    }
    setLoading(false)
  }, []);

  const value = {
    action,
    setAction,
    userType,
    setUserType,
    isAuthenticated,
    token,
    userData, // available after refresh
    login,
    logout,
    loading
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { useUserAuthContext };
export default AuthContextProvider;
