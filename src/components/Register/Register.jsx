// src/components/RegistrationPage/RegistrationPage.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountryInfo from "./country";
import AccountInfo from "./details";
import Verification from "./verification";
import ProgressHeader from "./ProgressHeader";
import "./Register.css";

const RegistrationPage = () => {
  const [currentLocation, setCurrentLocation] = useState(3);
  return (
    <>
      <ProgressHeader currentLocation={currentLocation} />

      <Routes>
        <Route
          path="/country"
          element={<CountryInfo setCurrentLocation={setCurrentLocation} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/user-details"
          element={<AccountInfo setCurrentLocation={setCurrentLocation} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/otp-verification"
          element={<Verification setCurrentLocation={setCurrentLocation} />}
        />
      </Routes>
    </>
  );
};

export default RegistrationPage;
