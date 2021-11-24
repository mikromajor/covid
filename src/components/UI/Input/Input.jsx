import React from "react";

const Input = ({ label, value, callback }) => {
  return (
    <input
      id={label}
      value={value}
      type='date'
      onChange={(e) => {
        if (!callback) return;
        callback(e.currentTarget.value);
      }}
    />
  );
};
export default Input;
