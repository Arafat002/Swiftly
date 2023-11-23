// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Login from "./components/Login/Login"; // Import your Login component
import Register from "./components/Register/Register";
import Verified from "./components/Account-creation/verified";
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
