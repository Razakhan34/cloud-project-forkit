import React from "react";
import UserAccount from "./UserAccount";
import Amit from "../../Assets/amit.png";
import ForkitLogo from "../../Assets/forkit-logo.png";
import Raza from "../../Assets/raza.jpg";

import "./homepage.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="search-bar">
        <form action="/search" method="GET">
          <input
            type="text"
            name="technology"
            placeholder="Search for a technology..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="user-accounts">
        <UserAccount
          name="Khan Mohammed Raza"
          image={Raza}
          skills="React, MongoDB, DSA"
        />
        {/* Add more user accounts as needed */}
      </div>
      <div className="user-accounts">
        <UserAccount
          name="Amit Meerchandani"
          image={Amit}
          skills="Blockchain, UI, Solidity"
        />
        {/* Add more user accounts as needed */}
      </div>
    </div>
  );
};

export default Home;
