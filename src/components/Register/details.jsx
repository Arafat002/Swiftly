// src/components/RegistrationPage/AccountInfo.js
import React from "react";
import { useState } from "react";
const AccountInfo = ({ onPrev }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  return (
    <div>
      <h2>Almost There!</h2>
      <p>Provide us with your accurate details</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fulltName">Full Name</label>
        <br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
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
          <select id="reg-type">
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
          <select id="reg-type">
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <br />
        <label htmlFor="password">CreatePassword</label>
        <br />
        <input
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
          <label htmlFor="agreementChecked">
            I acknowledge that i have read, understood, and agree to be bound by
            swiftly’s Terms and Conditions and Privacy Notice.
          </label>
          <br />
          <input
            type="checkbox"
            id="agreementChecked"
            name="agreementChecked"
            required
          />
          <label htmlFor="agreementChecked">
            Tick the box if you want to receive news, interesting updates and
            offers from swiftly.
          </label>
        </div>

        <button type="submit">Create Password</button>
      </form>
    </div>
  );
};

export default AccountInfo;
