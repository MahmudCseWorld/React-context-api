import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
