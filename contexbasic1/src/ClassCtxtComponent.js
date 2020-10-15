import React, { Component } from "react";
import "./App.css";
import { ThemeContext } from "./App";

export default class ClassCtxtComponent extends Component {
  themeStyles(dark) {
    return {
      background: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333"
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return (
            <div className="themeStyles" style={this.themeStyles(darkTheme)} >
              Class Theme
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
