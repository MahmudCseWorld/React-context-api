import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Form from "./Form";

import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
