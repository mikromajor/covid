import React from "react";
import Select from "../../UI/Select/Select";

const CountriesSelection = ({ data, setCountry }) => {
  return (
    <>
      <Select handleOnChange={setCountry}>
        {data.map((item, index) => (
          <option key={item.Slug} value={item.Slug}>
            {index + 1}. {item.Country}
          </option>
        ))}
      </Select>
    </>
  );
};

export default CountriesSelection;
