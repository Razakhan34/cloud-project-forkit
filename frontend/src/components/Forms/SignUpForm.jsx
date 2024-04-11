import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../store/user/user-actions";
import toast from "react-hot-toast";
import { userActions } from "../../store/user/user-slice";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../layout/loader/Loader";

const SignUpForm = ({ onClickToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const signupDataHandler = (e) => {
    setUser((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    const signUpData = new FormData();
    signUpData.set("name", name);
    signUpData.set("email", email);
    signUpData.set("password", password);
    dispatch(signup(signUpData));
    onClickToggle();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(userActions.clearError());
    }
    if (isAuthenticated) {
      toast.success("Registration has been completed successfully");
      navigate("/home");
    }
  }, [dispatch, error, navigate, isAuthenticated]);

  return (
    <>
      {loading && <Loader />}
      <div className="form-container sign-up">
        <form onSubmit={signupSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <Link to="/google/auth" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </Link>
            {/* <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a> */}
            {/* <a href="#" className="icon"><i className="fa-brands fa-github"></i></a> */}
            {/*  <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a> */}
          </div>
          <span>or use your email for registeration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={signupDataHandler}
          />
          <input
            type="email"
            placeholder="Email/Reg. No"
            name="email"
            value={email}
            onChange={signupDataHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={signupDataHandler}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
