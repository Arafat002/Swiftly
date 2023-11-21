// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Login from "./components/Login/Login"; // Import your Login component

ReactDOM.render(
  <React.StrictMode>
    <Login /> {/* Render the Login component instead of App */}
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
