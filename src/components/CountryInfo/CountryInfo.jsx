import React, { useState, useEffect } from "react";
import getFetch from "../../api/getFetch";
import "./CountryInfo.css";
import Button from "../UI/Button/Button";
import { calcStatistics } from "../../utils/calcStatistics";

const CountryInfo = ({ country, setStatisticsData, setInputMenu }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("country", country);
  alert("CountryInfo 12");

  const day = {
    first: 1,
    last: 2,
    countryData: countryData,
    date: false,
  };
  const week = {
    first: 1,
    last: 7,
    countryData: countryData,
    date: false,
  };
  const month = {
    first: 1,
    last: 30,
    countryData: countryData,
    date: false,
  };
  useEffect(() => {
    if (country === null || country === undefined) return;

    console.log("country", country);
    alert("CountryInfo 36");

    const fetchData = async () => {
      const data = await getFetch(`country/${country}`);
      setCountryData(data);
      setLoading(false);
    };

    setLoading(true);
    fetchData();
  }, [country]);

  if (country === null || country === undefined) return null;

  if (loading) return <p>Country info loading...</p>;

  if (countryData === null || countryData === undefined || countryData.length)
    return <p>No info</p>;

  // <Button
  //       callback={setInputMenu}
  //       callbackValue={countryData}
  //       label={"Input your period"}
  //     />

  return (
    <div id="CountryInfo">
      <p>{countryData[countryData.length - 1].Country}</p>
      <p>Date : {countryData[countryData.length - 1].Date}</p>
      <p>Amount of Active : {countryData[countryData.length - 1].Active}</p>
      <p>Amount Confirmed : {countryData[countryData.length - 1].Confirmed}</p>
      <p>Amount of deaths : {countryData[countryData.length - 1].Deaths}</p>

      <Button
        callback={calcStatistics}
        callbackValue={(setStatisticsData, week)}
        label={"week"}
      />
    </div>
  );
};

export default CountryInfo;
