import React, { useState } from "react";

import FctnCtxtComponent from "./FunctionContextComponent";
import ClassCtxtComponent from "./ClassCtxtComponent";

import "./App.css";

export const ThemeContext = React.createContext();
export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    console.log(toggleTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle</button>

        <FctnCtxtComponent />
        <ClassCtxtComponent />
      </ThemeContext.Provider>
    </>
  );
}
