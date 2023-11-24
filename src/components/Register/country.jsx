// src/components/RegistrationPage/PersonalInfo.js
import React from "react";
import { useState, useEffect } from "react";
import LogoSvg from "../../assets/logo.svg";
import "./Register.css";
import { Link } from "react-router-dom";

const CountryInfo = ({ onNext, setCurrentLocation }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };
  useEffect(() => {
    setCurrentLocation(1);
  }, []);
  return (
    <div>
      <img className="Logo" src={LogoSvg} alt="" />
      <div className="country-container">
        <h2 className="country-header">
          Swiftly provides solutions to only business owners at the moment
        </h2>
        <p className="country-pg">
          select your country and click on business account to continue.
        </p>
        <div className="country-select">
          <div>
            <label htmlFor="country">Country</label>
            <br />
            <select
              className="country-label"
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="ng">Nigeria</option>
              <option value="gh">Ghana</option>
              <option value="ic">Ivory Coast</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <br />
          <div>
            <div>Select account</div>

            <div className="acc-type">
              <label htmlFor="business">Business Account</label>
              <input
                className="account-type"
                type="radio"
                id="business"
                name="accountType"
                value="business"
                checked={selectedAccountType === "business"}
                onChange={handleAccountTypeChange}
              />
            </div>
          </div>
        </div>
        <button className="continue-btn">
          <Link to={"../user-details"}>Continue</Link>
        </button>
        <p className="acc-pg">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
