import React from "react";
import GetCountriesList from "../GetCountriesList/GetCountriesList";
import "./CountriesList.css";

const CountriesList = () => {
  return (
    <header>
      <nav>
        <form id="form">
          <label form="countriesList"></label>
          <GetCountriesList />
        </form>
      </nav>
    </header>
  );
};

export default CountriesList;
