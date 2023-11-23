import React from "react";
import "./style.css";

const ForgotPasswordModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="header-input">Forgot Password?</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <label className="input-label" htmlFor="">
          New Password
        </label>
        <br />
        <input type="password" className="inputt" placeholder="enter here" />

        <br />
        <label htmlFor="" className="input-label">
          Confirm Password
        </label>
        <br />
        <input className="inputt" type="password" placeholder="enter here" />
        <div>
          <p>Your password must contain</p>
          <ul>
            <li>must contain a capital letter</li>
            <li>must be upto 8 letters</li>
            <li>must contain numbers and characters</li>
            <li>Password match</li>
          </ul>
        </div>
        <button className="Reset-button">Reset password</button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
