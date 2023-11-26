import React from "react";
import Logo from "../../assets/Logo.svg";
import Login from "../Login/Login";
import RegistrationPage from "../Register/Register";

const LandingPage = () => {
  return (
    <div>
      <img src={Logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div>
        <button onClick={<Login />}>Login</button>
        <button onClick={<RegistrationPage />}>Sign up</button>
      </div>
    </div>
  );
};

export default LandingPage;
