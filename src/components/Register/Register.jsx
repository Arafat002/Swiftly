// src/components/RegistrationPage/RegistrationPage.js
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountryInfo from "./country";
import AccountInfo from "./details";
import Verification from "./verification";
import ProgressHeader from "./ProgressHeader";
import "./Register.css";

const RegistrationPage = () => {
  const [currentLocation, setCurrentLocation] = useState(0);

  const [registerationDetails, setRegisterationDetails] = useState({
    firstName: "",
    country: "",
    businessType: "",
    lastName: "",
    email: "",
    CAC: "",
    password: "",
  });

  // Functions to get user details

  const addCountry = (country, businessType) => {
    setRegisterationDetails({ ...registerationDetails, country, businessType });
  };
  const addOtherDetails = ({ firstName, lastName, email, password }) => {
    setRegisterationDetails({
      ...registerationDetails,
      firstName,
      lastName,
      email,
      password,
    });
  };

  useEffect(() => {
    console.log(registerationDetails);
  }, [registerationDetails]);

  return (
    <>
      <ProgressHeader currentLocation={currentLocation} />

      <Routes>
        <Route
          path="/country"
          element={
            <CountryInfo
              setCurrentLocation={setCurrentLocation}
              addCountry={addCountry}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/user-details"
          element={
            <AccountInfo
              setCurrentLocation={setCurrentLocation}
              addOtherDetails={addOtherDetails}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/otp-verification"
          element={
            <Verification
              setCurrentLocation={setCurrentLocation}
              registerationDetails={registerationDetails}
            />
          }
        />
      </Routes>
    </>
  );
};

export default RegistrationPage;
