import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
import Statistics from "./Statistics/Statistics";
import InputMenu from "./InputMenu/InputMenu";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState(null); // ua | ru | usa
  const [statisticsData, setStatisticsData] = useState(null);
  const [inputMenuData, setInputMenuData] = useState(null);
  const [printInputMenu, setPrintInputMenu] = useState(null);
  return (
    <>
      <CountriesList setCountry={setCountry} />
      <main className="content">
        <InputMenu
          inputMenuData={inputMenuData}
          printInputMenu={printInputMenu}
          setPrintInputMenu={setPrintInputMenu}
          setStatisticsData={setStatisticsData}
        />
        <CountryInfo
          country={country}
          setStatisticsData={setStatisticsData}
          setInputMenuData={setInputMenuData}
          setPrintInputMenu={setPrintInputMenu}
        />
        <Statistics statisticsData={statisticsData} />
      </main>
    </>
  );
};

export default App;

// true && 123
// false && 123
