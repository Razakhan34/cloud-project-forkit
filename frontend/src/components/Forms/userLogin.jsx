import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Toggle from "./Toggle";

import "./userLogin.css";

const UserLogin = () => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="main-container-user-login">
        <div
          className={
            active ? "container-user-login active" : "container-user-login"
          }
          id="container"
        >
          <SignUpForm onClickToggle={handleToggle} />
          <LoginForm />
          <Toggle active={active} onClickToggle={handleToggle} />
        </div>
      </div>
    </>
  );
};

export default UserLogin;
