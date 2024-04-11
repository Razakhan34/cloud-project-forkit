import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import ReactImg from "../../Assets/skills/react.jpg";
import Js from "../../Assets/skills/js.jpg";
import Angular from "../../Assets/skills/angular.jpg";
import PHP from "../../Assets/skills/php.jpg";
import Java from "../../Assets/skills/java.jpg";

import "./MainProfile.css";
const MainProfile = () => {
  const [activeTab, setActiveTab] = useState("received-tab");

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <Navbar />

      <div className="main-container-parent">
        <div className="main-container">
          <div className="main-container-70">
            {/* User Details */}
            <div className="user-details">
              <img src="https://placekitten.com/100/100" />
              <div className="user-info">
                <div className="user-name">
                  <b>CodeVinayak</b>
                  <div className="button-user-container">
                    {" "}
                    <button className="edit-profile">Edit Profile</button>
                    <button className="connect-option">Connect</button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Skills and Stories */}
            <div className="user-skills">
              <div className="skill-badge-title">Skill Badges</div>
              <div className="skill-stories">
                {/* Inside the skill-stories div */}
                <div className="story">
                  <img src={ReactImg} alt="Skill Story 1" />
                  <p>
                    React
                    <img
                      className="verified-icon"
                      src="verified.png"
                      alt="Verified"
                    />
                  </p>
                </div>
                <div className="story">
                  <img src={Java} alt="Skill Story 1" />
                  <p>
                    Java
                    <img
                      className="verified-icon"
                      src="verified.png"
                      alt="Verified"
                    />
                  </p>
                </div>
                <div className="story">
                  <img src={Angular} alt="Skill Story 1" />
                  <p>
                    Angular
                    <img
                      className="verified-icon"
                      src="verified.png"
                      alt="Verified"
                    />
                  </p>
                </div>
                <div className="story">
                  <img src={PHP} alt="Skill Story 1" />
                  <p>
                    PHP
                    <img
                      className="verified-icon"
                      src="verified.png"
                      alt="Verified"
                    />
                  </p>
                </div>
                <div className="story">
                  <img src={Js} alt="Skill Story 1" />
                  <p>
                    Java Script
                    <img
                      className="verified-icon"
                      src="verified.png"
                      alt="Verified"
                    />
                  </p>
                </div>
                {/* Other skill stories */}
                {/* Add Skill */}
                <div className="add-skill">
                  <button>+</button>
                  <p>Add Skill</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <div className="about-title">About Me</div>
              <div className="about-content">
                <p>
                  Demo text for the about section. This is where you can provide
                  information about yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="main-container-30">
            <div className="notifications">
              <div className="notification-buttons">
                <button>Friends</button>
                <button>Requests</button>
                <button>Notifications</button>
              </div>
            </div>

            {/* Friends List Section */}
            <div className="friends-list">
              <div className="friends-title">Friends List</div>
              <div className="friend">
                <img src="https://placekitten.com/50/50" alt="Friend 1" />
                <div className="friend-info">
                  <b>
                    <p>Vinayak Singh</p>
                  </b>
                  <p>I am from MCA Department 1st Year.</p>
                </div>
              </div>
              <div className="friend">
                <img src="https://placekitten.com/51/51" alt="Friend 2" />
                <div className="friend-info">
                  <b>
                    <p>Mohammad Raza</p>
                  </b>
                  <p>I am from MCA Department 1st Year.</p>
                </div>
              </div>
              <div className="friend">
                <img src="https://placekitten.com/52/52" alt="Friend 3" />
                <div className="friend-info">
                  <b>
                    <p>Amit</p>
                  </b>
                  <p>I am from MCA Department 1st Year.</p>
                </div>
              </div>
              <div className="friend">
                <img src="https://placekitten.com/53/53" alt="Friend 4" />
                <div className="friend-info">
                  <b>
                    <p>Neha Singh</p>
                  </b>
                  <p>I am from MCA Department 1st Year.</p>
                </div>
              </div>
              <div className="friend">
                <img src="https://placekitten.com/54/54" alt="Friend 5" />
                <div className="friend-info">
                  <b>
                    <p>Somnath Pani</p>
                  </b>
                  <p>I am from MCA Department 1st Year.</p>
                </div>
              </div>
            </div>

            <div className="notifications-section">
              <div className="notification">
                <div className="notification-title">Notifications</div>
                <div className="notification-info">
                  <img
                    className="profile-pic"
                    src="https://placekitten.com/55/55"
                    alt="Profile"
                  />
                  <div className="friend-info">
                    <b>
                      <p>Vinayak Singh</p>
                    </b>
                    <p>Sent you a new message.</p>
                  </div>
                </div>
                <br />
                <div className="notification-info">
                  <img
                    className="profile-pic"
                    src="https://placekitten.com/54/55"
                    alt="Profile"
                  />
                  <div className="friend-info">
                    <b>
                      <p>Neha Singh</p>
                    </b>
                    <p>Sent you a new message.</p>
                  </div>
                </div>
                <br />
                <div className="notification-info">
                  <img
                    className="profile-pic"
                    src="https://placekitten.com/53/55"
                    alt="Profile"
                  />
                  <div className="friend-info">
                    <b>
                      <p>Amit Meerchandani</p>
                    </b>
                    <p>Sent you friend requests.</p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="friend-requests">
              <div className="requests-title">Requests</div>

              <div className="request-tabs">
                <div
                  className={`request-tab ${
                    activeTab === "received-tab" ? "active" : ""
                  }`}
                  onClick={() => showTab("received-tab")}
                >
                  Request Received
                </div>
                <div
                  className={`request-tab ${
                    activeTab === "sent-tab" ? "active" : ""
                  }`}
                  onClick={() => showTab("sent-tab")}
                >
                  Request Sent
                </div>
              </div>

              <div
                id="received-tab"
                className={`request-tab-content ${
                  activeTab === "received-tab" ? "active" : ""
                }`}
              >
                <div className="request">
                  <div className="request-info">
                    <img
                      className="profile-pic"
                      src="https://placekitten.com/56/56"
                      alt="some image"
                    />
                    <div className="friend-info">
                      <b>
                        <p>Amit</p>
                      </b>
                      <p>Sent you friend request</p>
                    </div>
                  </div>
                  <div className="request-buttons">
                    <button className="accept-button">Accept</button>
                    <button className="decline-button">Decline</button>
                  </div>
                </div>
              </div>

              <div
                id="sent-tab"
                className={`request-tab-content ${
                  activeTab === "sent-tab" ? "active" : ""
                }`}
              >
                <div className="request">
                  <div className="request-info">
                    <img
                      className="profile-pic"
                      src="https://placekitten.com/57/57"
                      alt="some image"
                    />
                    <div className="friend-info">
                      <b>
                        <p>Neha Singh</p>
                      </b>
                      <p>You sent friend request</p>
                    </div>
                  </div>
                  <div className="withdraw-button">Withdraw</div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
