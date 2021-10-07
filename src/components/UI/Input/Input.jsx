import React from "react";

const Input = ({ id, type, value, callback }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => {
        if (!callback) return;
        callback(e.target.value);
      }}
    />
  );
};
export default Input;
