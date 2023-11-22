// src/components/Login/Login.jsx
import React, { useState } from "react";
import axios from 'axios'
import trackPaymentSvg from "../../assets/trackpayment.svg"; // Adjust the path based on your project structure
import "./Login.css";
const Login = () => {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    //
    // Don't forget to install to install axios
    // Implement authentication logic here
    //

    try{
      const responce = await axios.post('http://127.0.0.1:1234/v1/auth/login', {
        loginName: usermail,
        loginPassword: password
      }) 
      console.log(responce)
      if(responce.data.status === "success"){
        // Redirect to dashboard here
        console.log("Logging in with:", { usermail, password });
      }else{
        // Throw error
        console.log('error')
      }
    }catch(err){
      console.log(err)
    }
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
              value={usermail}
              onChange={(e) => setUsermail(e.target.value)}
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
          <button type="button" onClick={(e)=>{handleLogin(e)}}>
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
