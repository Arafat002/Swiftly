import React from "react";
import "./style.css";

const ForgotPasswordSupportModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="support-header">Forgot Password?</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p className="support-pg">
          Not to worry swiftly support team will send a password reset pin OTP
          to your email techtitans@gmail.com.
        </p>

        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
};

export default ForgotPasswordSupportModal;
