import React from "react";
import "./Button.css";

const Button = ({ id, callback, label }) => {
  // const {id, callback, label} = props;

  return (
    <button
      id={id}
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
