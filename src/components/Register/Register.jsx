// src/components/RegistrationPage/RegistrationPage.js
import React, { useState } from "react";
import CountryInfo from "./country";
import AccountInfo from "./details";
import "./Register.css";

const RegistrationPage = () => {
  const [page, setPage] = useState(1); // 1 for PersonalInfo, 2 for AccountInfo

  const handleNext = () => {
    setPage(2);
  };

  const handlePrev = () => {
    setPage(1);
  };

  return (
    <div className="switch">
      <div>
        <button onClick={handlePrev} disabled={page === 1}>
          Country Information
        </button>
        <button onClick={handleNext} disabled={page === 2}>
          Account Information
        </button>
      </div>
      {page === 1 ? (
        <CountryInfo onNext={handleNext} />
      ) : (
        <AccountInfo onPrev={handlePrev} />
      )}
    </div>
  );
};

export default RegistrationPage;
