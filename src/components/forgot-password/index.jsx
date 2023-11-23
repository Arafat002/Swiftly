import React from "react";
import "./style.css";
import { useState, useRef } from "react";

const ForgotPasswordModal = ({ onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]); // Array to store OTP digits
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };
  const handleInputKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter OTP</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p className="forgot-pg">
          Enter the 6 digit code that was sent to your email address
          techtitans@gmail.com
        </p>
        <div>
          {otp.map((digit, index) => (
            <input
              className="verify-input"
              key={index}
              ref={inputRefs.current[index]}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleInputKeyDown(index, e)}
            />
          ))}
        </div>

        <hr />
        <h2 className="header-forgot">Didn’t get the OTP?</h2>
        <div className="link-forgot">
          <a className="link-forgot1" href="#">
            Resend OTP
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
