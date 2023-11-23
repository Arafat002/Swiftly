import React from "react";
import Checkmark from "../../assets/checkmark.svg";
import "./style.css";
const Verified = () => {
  return (
    <div className="verified-container">
      <img className="success" src={Checkmark} alt="" />
      <h2 className="verified-header">Account Created</h2>
      <p className="verified-pg">
        You've created a business account with swiftly
      </p>
      <p className="verified-pg1">
        To generate your business account number click here
      </p>
      <button className="continue-button">Remind me later</button>
    </div>
  );
};

export default Verified;
