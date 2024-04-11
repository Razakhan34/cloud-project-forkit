import React, { useEffect, useState } from "react";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { forgotPassword } from "../../store/user/user-actions";
import { forgotPasswordActions } from "../../store/user/forgot-password-slice";
import toast from "react-hot-toast";
import Loader from "../layout/loader/Loader";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(forgotPasswordActions.clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(forgotPasswordActions.clearMessage());
      navigate("/mail/confirmation");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="container-main-forgot-password">
          <div className="container-forgot-password">
            <h2>Forgot Your Password?</h2>
            <p>Please enter your email address to reset your password.</p>
            <form id="resetForm" onSubmit={forgotPasswordSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="submit" value="Reset Password" />
            </form>
            <br />
            <Link to="/">Return to login</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
