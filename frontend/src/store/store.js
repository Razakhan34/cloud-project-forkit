import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user-slice";
import alertSlice from "./alert/alert-slice";
import forgotPasswordSlice from "./user/forgot-password-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
  },
});

export default store;
