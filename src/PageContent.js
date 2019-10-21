import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      weidth: "100vw",
      hieght: "100vh"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
