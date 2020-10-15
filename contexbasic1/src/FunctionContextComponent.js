import React, {useContext} from 'react'
import { ThemeContext } from "./App";import "./App.css";


function FunctionContextComponent() {

const dark = useContext(ThemeContext)
const themeStyles = {
    background: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333"
}
  return (
    <div className="themeStyles" style={themeStyles} >
              Functional Theme
            </div>
  )
}

export default FunctionContextComponent
