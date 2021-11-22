import React from "react";
import "./Button.css";

const Button = ({callback, label }) => {

  return (
    <button
      className="button"
      onClick={() => {
        if (!callback) return;
        callback();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
