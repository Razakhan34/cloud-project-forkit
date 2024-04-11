import React, { useState, useEffect } from "react";
import "./Alert.css";
const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;
    if (visible) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [visible]);

  const hideAlert = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={`alert alert--${type}`} onClick={hideAlert}>
          {message}
        </div>
      )}
    </>
  );
};
export default Alert;
