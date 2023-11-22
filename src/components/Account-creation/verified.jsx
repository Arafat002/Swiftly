import React from "react";
import Checkmark from "../../assets/checkmark.svg";
const Verified = () => {
  return (
    <div>
      <img src={Checkmark} alt="" />
      <h2>Account Created</h2>
      <p>You've created a business account with swiftly</p>
      <button>Continue</button>
    </div>
  );
};

export default Verified;
