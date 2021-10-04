import React from "react";
import Select from "../../UI/Select/Select";

const CountriesSelection = ({ data, setCountry }) => {
  return (
    <>
      <Select handleOnChange={setCountry}>
        <option value="" defaultValue disabled hidden>
          Choose a country:
        </option>
        {data.map((item, index) => (
          <option key={item.Slug} value={item.Slug}>
            {index}. {item.Country}
          </option>
        ))}
      </Select>
    </>
  );
};

export default CountriesSelection;
