import React, { useState, useEffect } from "react";
import getFetch from "../../api/getFetch";
import CountriesSelection from "./components/CountriesSelection";
import "./CountriesList.css";

const CountriesList = ({ setCountry }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getFetch("countries");
      setItems(countries);
    };
    fetchData();
  }, []);

  if (!items.length) return <p>Loading...</p>;

  return (
    <header>
      <nav>
        <form id="form">
          <label form="countriesList"></label>
          <CountriesSelection data={items} setCountry={setCountry} />
        </form>
      </nav>
    </header>
  );
};

export default CountriesList;
