import React from "react";
import ReactDOM from "react-dom";
import "normalize.css"; //npm install normalize.css and should be imported before index.css
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
