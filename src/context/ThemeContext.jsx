// context/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Provider que envuelve la app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // 'light' o 'dark'

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook para usar el contexto más fácil
export const useTheme = () => useContext(ThemeContext);
