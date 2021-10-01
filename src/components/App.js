import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState(null); // ua | ru | usa

  return (
    <>
      <CountriesList setCountry={setCountry} />
      <CountryInfo country={country} />
    </>

    // true && 123
    // false && 123

    //  <main>
    //  <div id="menuInput" class="hidden"></div>
    //  <div id="content"></div>
    //  <div id="statistic" class="hidden"></div>
    // </main>
  );
};

export default App;
