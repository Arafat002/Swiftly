// src/components/RegistrationPage/PersonalInfo.js
import React from "react";
import { useState } from "react";
import LogoSvg from "../../assets/logo.svg";

const CountryInfo = ({ onNext }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };
  return (
    <div>
      <img src={LogoSvg} alt="" />
      <div>
        <h2>
          Swiftly provides solutions to only business owners at the moment
        </h2>
        <p>select your country and click on business account to continue.</p>
        <div>
          <div>
            <label htmlFor="country">Country</label>
            <br />
            <select
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

            <div>
              <input
                type="radio"
                id="business"
                name="accountType"
                value="business"
                checked={selectedAccountType === "business"}
                onChange={handleAccountTypeChange}
              />
              <label htmlFor="business">Business Account</label>
            </div>
          </div>
        </div>
        <button>Continue</button>
        <p>
          Already have an account? <a href="">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
