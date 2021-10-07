import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
import Statistics from "./Statistics/Statistics";
import InputMenu from "./InputMenu/InputMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
  const [inputMenuData, setInputMenuData] = useState(null);
  return (
    <>
      <CountriesList setCountry={setCountry} />
      <main className="content">
        <InputMenu
          inputMenuData={inputMenuData}
          setStatisticsData={setStatisticsData}
          setInputMenuData={setInputMenuData}
        />
        <CountryInfo
          country={country}
          setStatisticsData={setStatisticsData}
          setInputMenuData={setInputMenuData}
        />
        <Statistics
          statisticsData={statisticsData}
          setStatisticsData={setStatisticsData}
        />
      </main>
    </>
  );
};

export default App;

// true && 123
// false && 123
