import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verification = ({ setCurrentLocation, registerationDetails }) => {
  const navigate = useNavigate;
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store OTP digits
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
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

  const handleOtpSubmit = async () => {
    const usermail = registerationDetails.email;
    const verifyOTP = otp.join("");
    try {
      const responce = await axios.post(
        `https://swiftly.cyclic.app/v1/auth/verify-otp?usermail=${usermail}&otp=${verifyOTP}`
      );
      console.log("The response", responce);

      if (responce.data.status === "failed") {
        console.log("Omo something haooened o");
        setError(responce.data.message);
      } else {
        try {
          console.log("Starting the registeration part");
          const regResponce = await axios.post(
            "https://swiftly.cyclic.app/v1/auth/register",
            registerationDetails
          );
          console.log(regResponce);
          if (regResponce.data.status === "success") {
            console.log("The registration was successful");
            console.log("Successful redirecting to the login page");
            navigate("../login");
          }
        } catch (error) {}
        console.log("An error occured, re-enter the otp key");
        navigate("../login");
      }
    } catch (error) {
      setError("An error occured, re-enter the otp key");
      console.log("Redirecting again");
      // navigate("/otp-verification");
    }
  };

  const getOTP = async () => {
    const usermail = registerationDetails.email;
    console.log("Thuis is the mail", usermail);
    try {
      const responce = await axios.post(
        `https://swiftly.cyclic.app/v1/auth/get-otp?usermail=${usermail}`
      );

      if (responce.data.error === "NO_MAIL_ADDRESS") {
        setError(responce.data.message);
        // navigate("../user-details");
        console.log(responce.data);
      }
      if (responce.data.status === "success") {
        setError(responce.data.message);
        console.log(responce.data);
      }
    } catch (error) {
      console.log(error);
      navigate("/otp-verication");
    }
  };

  useEffect(() => {
    getOTP();
    setCurrentLocation(3);
  }, []);
  return (
    <div className="country-container">
      <h2 className="country-header">We just sent you an email </h2>
      <p className="country-pg">
        Kindly enter the security code we just sent to techtitans@gmail.com in
        order to verify your email.
      </p>
      <h2 className="country-header-2">Verification Code </h2>
      <div className="verify-input-holder">
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
      <button className="continue-btn" onClick={(e) => handleOtpSubmit()}>
        Verify Email
      </button>
      <p className="acc-pg">
        Didn’t receive OTP?<a href="">Resend OTP</a>{" "}
      </p>
    </div>
  );
};

export default Verification;
