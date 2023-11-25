import React from "react";
import "./style.css";

const NewClientModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="client-header">New client</h2>
        <p>you are about to create a profile for your client</p>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <label htmlFor="">Client's first name</label>
          <br />
          <input type="text" placeholder="enter here" />
          <label htmlFor="">Client's last name</label>
          <br />
          <input type="text" placeholder="enter here" />
          <label htmlFor="">Client's Phone number</label>
          <br />
          <input type="text" placeholder="enter here" />
          <label htmlFor="">Client's Country</label>
          <br />
          <input type="text" placeholder="enter here" />
          <label htmlFor="">Client's Email</label>
          <br />
          <input type="text" placeholder="enter here" />
          <label htmlFor="">Client's Address</label>
          <br />
          <input type="text" placeholder="enter here" />
        </div>

        <button className="con-btn">Create Profile</button>
      </div>
    </div>
  );
};

export default NewClientModal;
