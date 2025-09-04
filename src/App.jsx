import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./styles.css";

function Content() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
