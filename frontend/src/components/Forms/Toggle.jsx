import React, { useState, useEffect } from "react";
import TypeEffect from "./TypeEffect";
const Toggle = ({ active, onClickToggle }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className={`toggle-panel toggle-left ${active ? "active" : ""}`}>
          <h1>Helping you to</h1>
          <br />
          <h1 id="learn">
            <TypeEffect
              words={[
                "connect with peers",
                "do pair programming",
                "learn while collaborating",
                "exchange resources",
                "share skills",
                "build connections",
              ]}
            />
          </h1>
          <button className={active ? "hidden" : ""} onClick={onClickToggle}>
            Sign In
          </button>
        </div>
        <div className={`toggle-panel toggle-right ${active ? "" : "active"}`}>
          <h1>NEW HERE?</h1>
          <br />

          <button className={!active ? "hidden" : ""} onClick={onClickToggle}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
