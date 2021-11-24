import React, { useState } from "react";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
import Statistics from "./Statistics/Statistics";
import InputMenu from "./InputMenu/InputMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [period, setPeriod] = useState({
    start_period: 0,
    end_period: 0,
  });

  const [showInputMenu, setShowInputMenu] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false)
  // console.log('APP country ->', country);
  // console.log('APP countryData -> ', countryData);
  console.log('APP period -> ', period);
  // console.log('APP showInputMenu', showInputMenu);
  // console.log('APP showStatistics', showStatistics);

  return (
    <>
      <CountriesList setCountry={setCountry} />
      <main className="content">
        {showInputMenu && <InputMenu
        period={period}
          setPeriod={setPeriod}
          setShowInputMenu={setShowInputMenu}
          setShowStatistics={setShowStatistics}
        />}
        {!!country.length &&
          <CountryInfo
          country={country}
            countryData={countryData}
            setCountryData={setCountryData}
            setPeriod={setPeriod}
            setShowInputMenu={setShowInputMenu}
            setShowStatistics={setShowStatistics}

          />}
        {showStatistics && <Statistics
          period={period}
          countryData={countryData}
          setShowStatistics={setShowStatistics}
        />}
      </main>

    </>
  );
};

export default App;


