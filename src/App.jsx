// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "./App.css";
import Root from "./Root";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
