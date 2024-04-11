import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/user/user-actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    navigate("/home");
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={loginSubmit}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          {/* <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a> */}
          {/* <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a> */}
        </div>
        <span>or use your email password</span>
        <input
          type="email"
          placeholder="Email/Reg. No"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Link to="/forgot/password">Forget Your Password?</Link>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
