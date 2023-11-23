// src/components/Login/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import trackPaymentSvg from "../../assets/trackpayment.svg"; // Adjust the path based on your project structure
import "./Login.css";
import { Link } from "react-router-dom";

import ForgotPasswordSupportModal from "../forgot-password-modal";
const Login = () => {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleForgotPasswordClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleLogin = async () => {
    //
    // Don't forget to install to install axios
    // Implement authentication logic here
    //

    try {
      const responce = await axios.post("http://127.0.0.1:1234/v1/auth/login", {
        loginMail: usermail,
        loginPassword: password,
      });
      console.log(responce);
      if (responce.data.status === "success") {
        // Redirect to dashboard here
        console.log("Logging in with:", { usermail, password });
      } else {
        // Throw error
        console.log("error");
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
        <h2 className="logintext">Login</h2>
        <form>
          <label className="form-label">
            Email Address
            <br />
            <br />
            <input
              className="form-content"
              placeholder="example@gmail.com"
              type="text"
              required
              value={usermail}
              onChange={(e) => setUsermail(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            Password
            <br />
            <br />
            <input
              className="form-content"
              placeholder="enter password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="form-options">
            <div>
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
            Don't have an account? <Link to="/register">create account</Link>
          </p>
        </form>
      </div>
      {showModal && <ForgotPasswordSupportModal onClose={closeModal} />}
    </div>
  );
};

export default Login;
