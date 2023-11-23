import React from "react";
import "./style.css";

const ForgotPasswordModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Forgot Password?</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p className="forgot-pg">
          Not to worry swiftly support team will send a password reset link to
          your email techtitans@gmail.com
        </p>
        <hr />
        <h2 className="header-forgot">Didn’t get the link?</h2>
        <div className="link-forgot">
          <a className="link-forgot1" href="#">
            Resend Link
          </a>
          <br />
          <br />
          <a className="link-forgot2" href="#">
            Change Email address
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
