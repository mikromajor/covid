import React from "react";
import "./Select.css";

const Select = ({ children }) => {
  return (
    <select
      name="countries"
      id="countriesList"
      autoFocus
      className="form-select"
      aria-label="Default select example"
      onchange="myFunction()"
    >
      <option value="" defaultValue disabled hidden>
        Choose a country:
      </option>
      {children}
    </select>
  );
};
export default Select;
