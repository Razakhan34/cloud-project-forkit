import React from "react";
import "./MailConfirmation.css";
const MailConfirmation = () => {
  return (
    <div className="container-main-mail-confirmation">
      <div className="container-mail-confirmation">
        <h2>Password Reset Email Sent</h2>
        <p>Please check your email for the password reset link.</p>
      </div>
    </div>
  );
};

export default MailConfirmation;
