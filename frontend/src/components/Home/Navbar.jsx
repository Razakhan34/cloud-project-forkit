import React from "react";
import "./homepage.css";
import ForkitLogo from "../../Assets/forkit-logo.png";
import Amit from "../../Assets/amit.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/home">
          <img src={ForkitLogo} alt="ForkIt Logo" />
        </Link>
        <h1>ForkIt</h1>
      </div>
      <div className="profile">
        <h3 style={{ marginRight: "30px" }}>Message</h3>
        <img src={Amit} alt="logo of owner" />
        <div className="dropdown">
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
