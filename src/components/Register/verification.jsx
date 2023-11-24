import React, { useState, useRef, useEffect } from "react";

const Verification = ({ setCurrentLocation }) => {
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
  useEffect(() => {
    setCurrentLocation(3);
  });
  return (
    <div className="verify-container">
      <h2 className="verify-header">We just sent you an email </h2>
      <p className="verify-pg">
        Kindly enter the security code we just sent to techtitans@gmail.com in
        order to verify your email.
      </p>
      <h2 className="verify-header-2">Verification Code </h2>
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
      <button className="verify-btn">Verify Email</button>
      <p className="pg-ver">
        Didn’t receive OTP?<a href="">Resend OTP</a>{" "}
      </p>
    </div>
  );
};

export default Verification;
