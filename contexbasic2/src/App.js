import React from "react";

import FctnCtxtComponent from "./FunctionContextComponent";
import {ThemeProvider} from './ThemeContext'
import "./App.css";

// export const ThemeContext = React.createContext();
export default function App() {


  return (
    <>
      <ThemeProvider>

        <FctnCtxtComponent />
      </ThemeProvider>
    </>
  );
}
