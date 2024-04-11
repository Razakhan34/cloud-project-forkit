import React, { useEffect, useState } from "react";

import "./ResetPassword.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../store/user/user-actions";
import toast from "react-hot-toast";
import { forgotPasswordActions } from "../../store/user/forgot-password-slice";
import Loader from "../layout/loader/Loader";
const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, isUpdated } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password doesn't match");
      return;
    }
    const userData = new FormData();
    userData.set("password", password);
    dispatch(resetPassword(token, userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(forgotPasswordActions.clearError());
    }
    if (isUpdated) {
      toast.success("Reset password successfully");
      dispatch(forgotPasswordActions.resetPasswordReset());
      navigate("/");
    }
  }, [dispatch, error, isUpdated, navigate]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="container-main-reset-password">
          <div className="container-reset-password">
            <h2>Create New Password</h2>
            <form id="resetForm" onSubmit={resetPasswordSubmit}>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input type="submit" value="Reset Password" />
            </form>

            <Link to="/">Login</Link>
            <p>Or</p>

            <Link to="/forgot/password">Request Another Token!</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
