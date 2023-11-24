import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"; // Import your Login component
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/dashboard";

function Root() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Root;
