import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLogin from "./components/Forms/userLogin";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import MainProfile from "./components/profile/MainProfile";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import MailConfirmation from "./components/forgotPassword/MailConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />

        <Route path="/home" element={<Home />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/mail/confirmation" element={<MailConfirmation />} />
        <Route path="/reset/password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<MainProfile />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
