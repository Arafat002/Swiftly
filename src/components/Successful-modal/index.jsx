import React from "react";
import "./style.css";
import Successful from "../../assets/successful.svg";

const SuccessfulModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img className="success" src={Successful} alt="" srcset="" />
        <h2 className="header-success">Successful</h2>
        <p className="pg-success">Your password has been updated</p>
        <button className="button-success">Back to Login</button>
      </div>
    </div>
  );
};

export default SuccessfulModal;
