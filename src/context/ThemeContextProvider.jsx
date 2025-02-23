import React, { createContext, useContext, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook to use ThemeContext
const useThemeContext = () => {
  return useContext(ThemeContext);
};

// ThemeContextProvider Component
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeContextProvider };
export default ThemeContextProvider;
