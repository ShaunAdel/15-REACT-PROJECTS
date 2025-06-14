import React, { useEffect } from 'react';

const Alert = ({ type, msg, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [type, msg, showAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
