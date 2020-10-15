import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import "./App.css";

function FunctionContextComponent() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    background: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333"
  };
  return (
    <>
      <button className="themeStyles" onClick={toggleTheme}>
        Light Theme
      </button>
      <div className="themeStyles" style={themeStyles}>
        Functional Theme
      </div>
    </>
  );
}

export default FunctionContextComponent;
