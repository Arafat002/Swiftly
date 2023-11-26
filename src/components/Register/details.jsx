// src/components/RegistrationPage/AccountInfo.js
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Register.css";
const AccountInfo = ({ onPrev2, setCurrentLocation, addOtherDetails }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
  };
  useEffect(() => {
    setCurrentLocation(2);
  });

  useEffect(() => {
    addOtherDetails({ ...formData });
  }, [formData]);

  console.log(formData);
  return (
    <div className="details">
      <h2 className="details-header">Almost There!</h2>
      <p className="details-pg">Provide us with your accurate details</p>
      <form className="details-form" onSubmit={handleSubmit}>
        <label htmlFor="fulltName">First Name</label>
        <br />
        <input
          className="form-input"
          placeholder="enter here"
          type="text"
          id="fullName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          className="form-input"
          placeholder="enter here"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
          className="form-input"
          placeholder="example@gmail.com"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <div>
          <label htmlFor="country">Business Registration Type</label>
          <br />
          <select id="reg-type" className="bus-select">
            <option value="">Sole Proprietorship</option>
            <option value="">Partnership</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="country">
            Is your business incorporated with the corporate affairs
            commission(CAC)
          </label>
          <br />
          <select id="reg-type" className="cac">
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <br />
        <label htmlFor="password">CreatePassword</label>
        <br />
        <input
          className="form-input"
          placeholder="enter password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          className="form-input"
          placeholder="enter password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="checkbox"
            id="agreementChecked"
            name="agreementChecked"
            required
          />
          <label className="details-agree" htmlFor="agreementChecked">
            I acknowledge that i have read, understood, and agree to be bound by
            swiftly’s <a href="">Terms and Conditions and Privacy Notice.</a>
          </label>
          <br />
          <br />
          <input
            type="checkbox"
            id="agreementChecked"
            name="agreementChecked"
            required
          />
          <label className="details-agree" htmlFor="agreementChecked">
            Tick the box if you want to receive news, interesting updates and
            offers from swiftly.
          </label>
        </div>

        <button className="create-btn" type="submit">
          <Anchor to={"../otp-verification"}>Create Account</Anchor>
        </button>
      </form>
    </div>
  );
};

const Anchor = styled(Link)`
  color: white;
`;

export default AccountInfo;
