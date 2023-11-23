// src/components/RegistrationPage/RegistrationPage.js
import React, { useState } from "react";
import CountryInfo from "./country";
import AccountInfo from "./details";
import Verification from "./verification";
import "./Register.css";

const RegistrationPage = () => {
  const [page, setPage] = useState(1); // 1 for CountryInfo, 2 for AccountInfo, 3 for AdditionalInfo

  const handleNext = () => {
    setPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="switch">
      <div>
        <button onClick={handlePrev} disabled={page === 1}>
          {page === 1
            ? "Country Information"
            : page === 2
            ? "Account Information"
            : "Verification"}
        </button>
        <button onClick={handleNext} disabled={page === 3}>
          {page === 1
            ? "Account Information"
            : page === 2
            ? "Verification"
            : "Next"}
        </button>
      </div>
      {page === 1 ? (
        <CountryInfo onNext={handleNext} />
      ) : page === 2 ? (
        <AccountInfo onPrev={handlePrev} onNext={handleNext} />
      ) : (
        <Verification onPrev={handlePrev} />
      )}
    </div>
  );
};

export default RegistrationPage;
