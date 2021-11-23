import React from "react";

const Input = ({ label, value, callback }) => {
  return (
    <input
      id={label}
      type='date'
      value={value}
      onChange={(e) => {
        if (!callback) return;
        callback(e.target.value);
      }}
    />
  );
};
export default Input;
