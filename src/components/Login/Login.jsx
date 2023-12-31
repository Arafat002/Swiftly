// src/components/Login/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import trackPaymentSvg from "../../assets/trackpayment.svg"; // Adjust the path based on your project structure
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import ForgotPasswordSupportModal from "../forgot-password-modal";
const Login = () => {
  const [error, setError] = useState("");
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleForgotPasswordClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    //
    // Don't forget to install to install axios
    // Implement authentication logic here
    //

    try {
      const responce = await axios.post(
        "https://swiftly.cyclic.app/v1/auth/login",
        {
          loginMail: usermail,
          loginPassword: password,
        }
      );
      console.log(responce);
      if (responce.data.status === "success") {
        navigate("/dashboard");
      } else {
        setError(responce.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <div className="image-half">
        <img src={trackPaymentSvg} alt="Track Payment" />
        <p className="img-p">Simplifying business payments efficiently</p>
      </div>
      <div className="form-half">
        <h2 className="logintext">LOGIN</h2>
        <form>
          <label className="form-label">Email Address</label>
          <br />
          <input
            className="form-content"
            placeholder="example@gmail.com"
            type="text"
            required
            value={usermail}
            onChange={(e) => setUsermail(e.target.value)}
          />
          <br />
          <label className="form-label">Password</label>
          <br />
          <input
            className="form-content"
            placeholder="enter password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-options">
            <div className="check-box">
              <input type="checkbox" id="remindMe" />
              <label className="remindme-label" htmlFor="remindMe">
                Remind me
              </label>
            </div>
            <div>
              <a href="#" onClick={handleForgotPasswordClick}>
                Forgot Password?
              </a>
            </div>
          </div>
          <br />
          <button
            className="login-button"
            type="button"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Login
          </button>
          <p className="no-account">
            Don't have an account?{" "}
            <Link to="/register/country">create account</Link>
          </p>
        </form>
      </div>
      {showModal && <ForgotPasswordSupportModal onClose={closeModal} />}
    </div>
  );
};

export default Login;
