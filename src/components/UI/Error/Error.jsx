import React from "react";
import "./Error.css";

const Error = ({ id, className, label }) => {
  return (
    <h2 id={id} className={className}>
      {label}
    </h2>
  );
};

export default Error;
