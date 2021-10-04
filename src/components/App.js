import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
// import InputMenu from '../InputMenu/InputMenu'
import Statistics from "./Statistics/Statistics";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState(null); // ua | ru | usa
  const [statisticsData, setStatisticsData] = useState(null);
  // const [inputMenuData, setInputMenuData] = useState(null);
  //  {/* <InputMenu menu={inputMenuData} /> */}
  // {/**/}
  return (
    <>
      <CountriesList setCountry={setCountry} />
      <main className="content">
        <CountryInfo country={(country, setStatisticsData)} />
        <Statistics setStatistics={statisticsData} />
      </main>
    </>
  );
};

export default App;

// true && 123
// false && 123
