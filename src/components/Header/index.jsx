// Header.js

import React from "react";
import ProfileIcon from "../../assets/profile.svg";
import "./style.css";
const Header = () => {
  return (
    <header className="header-bar">
      <div className="header-content">
        <h2>Welcome, Caramel</h2>
        <div className="search-bar">
          {/* Add your search bar component or input here */}
          <input type="text" placeholder="Search..." />
        </div>
        <div className="account-profile">
          <img src={ProfileIcon} alt="Profile" />
          <span>Arafat</span>
          <p>business owner</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
