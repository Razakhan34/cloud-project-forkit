import React from "react";
import "./homepage.css";
const UserAccount = ({ name, image, skills }) => (
  <div className="user-account">
    <img src={image} alt="User Profile" />
    <div className="user-info">
      <div className="user-name">{name}</div>
      <div className="user-skills">{skills}</div>
    </div>
    <button className="connect-button">Connect</button>
  </div>
);

export default UserAccount;
