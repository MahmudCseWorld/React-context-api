import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function PageContent (props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      width: "calc (100vw - 3px)",
      height: "calc(100vh - 20px)",
    };
    return <div style={styles}>{props.children}</div>;
}

export default PageContent;
