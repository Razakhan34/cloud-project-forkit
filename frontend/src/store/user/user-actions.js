import axios from "axios";
import { userActions } from "./user-slice";
import { forgotPasswordActions } from "./forgot-password-slice";

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(userActions.loginRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(
        "/api/v1/users/login",
        {
          email,
          password,
        },
        config
      );
      if (response.data.status === "success") {
        dispatch(userActions.loginSuccess(response.data.user));
      }
    } catch (error) {
      dispatch(userActions.loginFail(error.response.data.message));
    }
  };
};

export const signup = (userData) => {
  return async (dispatch) => {
    dispatch(userActions.loginRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(
        "/api/v1/users/signup",
        userData,
        config
      );
      if (response.data.status === "success") {
        dispatch(userActions.loginSuccess(response.data.user));
      }
    } catch (error) {
      dispatch(userActions.loginFail(error.response.data.message));
    }
  };
};

// forgot the password
export const forgotPassword = (userData) => {
  return async (dispatch) => {
    dispatch(forgotPasswordActions.forgotPasswordRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(
        "/api/v1/users/forgotPassword",
        userData,
        config
      );
      if (response.data.status === "success") {
        dispatch(
          forgotPasswordActions.forgotPasswordSuccess(response.data.message)
        );
      }
    } catch (error) {
      dispatch(
        forgotPasswordActions.forgotPasswordFail(error.response.data.message)
      );
    }
  };
};

// reset password
export const resetPassword = (token, userPassword) => {
  return async (dispatch) => {
    dispatch(forgotPasswordActions.forgotPasswordRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.patch(
        `/api/v1/users/resetPassword/${token}`,
        userPassword,
        config
      );
      if (response.data.status === "success") {
        dispatch(forgotPasswordActions.resetPasswordSuccess());
      }
    } catch (error) {
      dispatch(
        forgotPasswordActions.forgotPasswordFail(error.response.data.message)
      );
    }
  };
};
