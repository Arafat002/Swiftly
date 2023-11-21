// src/components/Login/Login.jsx
import React, { useState } from "react";
import trackPaymentSvg from "../../assets/trackpayment.svg"; // Adjust the path based on your project structure
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement authentication logic here
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className="login-page">
      <div className="image-half">
        {/* Use the imported SVG image */}
        <img src={trackPaymentSvg} alt="Track Payment" />
        <p>Simplifying business payments efficiently</p>
      </div>
      <div className="form-half">
        <h2>Login</h2>
        <form>
          <label>
            Email Address:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div className="form-options">
            <div>
              <input type="checkbox" id="remindMe" />
              <label htmlFor="remindMe">Remind Me</label>
            </div>
            <div>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don’t have an account? <a href="">create account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
