import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
// import Statistics from "./Statistics/Statistics";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState(null); // ua | ru | usa
  // const [statisticsData, setStatisticsData] = useState(null);
  // const [inputMenuData, setInputMenuData] = useState(null);
  return (
    <>
      <CountriesList setCountry={setCountry} />
      <main className="content">
        {/* <InputMenu menu={inputMenuData} /> */}
        <CountryInfo country={country} />
        {/* , setStatisticsData */}
        {/* <Statistics setStatistics={statisticsData} /> */}
      </main>
    </>

    // true && 123
    // false && 123
  );
};

export default App;
