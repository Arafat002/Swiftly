import React from "react";
import Logo from "../../assets/swiftly.svg";
import Login from "../Login/Login";
import "./style.css";
import { Link } from "react-router-dom";
import LandingPicture from "../../assets/product-logo.png";
import RegistrationPage from "../Register/Register";

const LandingPage = () => {
  return (
    <div className="page">
      <div className="navbar">
        <img src={Logo} alt="" />
        <div class="menu">
          <a href="#Home">Home</a>
          <a href="#Aboutus">Pricing</a>
          <a href="#">About</a>
          <a href="#contactus">Contact</a>
          <button className="button-a">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="button-b">
            <Link to={"/register"}>Sign up</Link>
          </button>
        </div>
      </div>
      <div>
        <h1>
          Simplifying <span>Small Business</span>
          <br />
          Payments
        </h1>
        <p className="discover-p">
          Discover the simplest way to manage your personal business finance
        </p>
        <div>
          <ul>
            <li>
              <span className="checkmark">&#10003;</span> Track unpaid invoices
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Manage payments
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Receive Real-time
              alerts
            </li>
          </ul>
          <div>
            <button className="button-c">Download App</button>
            <button className="button-d">Visit website</button>
          </div>
          <div>
            <h3>We would love to keep up with you!</h3>
            <p className="cancel-p">Feel free to cancel anytime</p>
            <input className="email" type="email" placeholder="Email address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
