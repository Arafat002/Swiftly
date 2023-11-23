// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Root";

import Verified from "./components/Account-creation/verified";
ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
