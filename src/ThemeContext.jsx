import React, { createContext, useState, useContext } from "react";

// Create Context
const ThemeContext = createContext();

// Custom Hook for easy use
export const useTheme = () => useContext(ThemeContext);

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
