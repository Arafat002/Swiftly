import React, { useState } from "react";
import "./style.css";
import DashboardIcon from "../../assets/dashboard.svg";
import AlertIcon from "../../assets/alert.svg";
import ClientIcon from "../../assets/client.svg";
import HistoryIcon from "../../assets/history.svg";
import LogoutIcon from "../../assets/logout.svg";
import SettingsIcon from "../../assets/settings.svg";
import SupportIcon from "../../assets/support.svg";
import TrackIcon from "../../assets/track.svg";
import TransactionIcon from "../../assets/transaction.svg";
import LogoSvg from "../../assets/swiftly.svg";
import { Link } from "react-router-dom";

function ReactSideBar() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <img className="Logo" src={LogoSvg} alt="" />
      <ul>
        <li>
          <img src={DashboardIcon} alt="Dashboard" className="icon" />
          <p>Dashboard</p>
        </li>
        <li>
          <img src={ClientIcon} alt="All client" className="icon" />
          <p>All client</p>
        </li>
        <li>
          <img src={TransactionIcon} alt="All transactions" className="icon" />
          <p>All transactions</p>
        </li>
        <li>
          <img src={TrackIcon} alt="Track Transactions" className="icon" />
          <p>Track Transactions</p>
        </li>
        <li>
          <img src={HistoryIcon} alt="Track Transactions" className="icon" />
          <p>Payments history</p>
        </li>
        <li>
          <img src={SupportIcon} alt="Support" className="icon" />
          <p>Support</p>
        </li>
        <li>
          <img src={AlertIcon} alt="Alerts" className="icon" />
          <p>Alerts</p>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <ul>
        <li>
          <img src={SettingsIcon} alt="Settings" className="icon" />
          <p>Settings</p>
        </li>
        <li>
          <img src={LogoutIcon} alt="Logout" className="icon" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default ReactSideBar;
