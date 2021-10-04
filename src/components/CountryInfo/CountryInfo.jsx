import React, { useState, useEffect } from "react";
import getFetch from "../../api/getFetch";
import "./CountryInfo.css";
import Button from "../UI/Button/Button";

const CountryInfo = ({ country, setStatisticsData, setInputMenu }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
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
    if (country === null) return;

    const fetchData = async () => {
      const data = await getFetch(`country/${country}`);
      setCountryData(data);
      setLoading(false);
    };

    setLoading(true);
    fetchData();
  }, [country]);

  if (country === null) return null;

  if (loading) return <p>Country info loading...</p>;

  if (!countryData) return <p>No info</p>;

  return (
    <div id="CountryInfo">
      <p>{countryData[countryData.length - 1].Country}</p>
      <p>Date : {countryData[countryData.length - 1].Date}</p>
      <p>Amount of Active : {countryData[countryData.length - 1].Active}</p>
      <p>Amount Confirmed : {countryData[countryData.length - 1].Confirmed}</p>
      <p>Amount of deaths : {countryData[countryData.length - 1].Deaths}</p>
      {/* <Button callback={setStatisticsData} callbackValue={day} label={"day"} />
      <Button
        callback={setStatisticsData}
        callbackValue={week}
        label={"week"}
      />
      <Button
        callback={setStatisticsData}
        callbackValue={month}
        label={"month"}
      /> */}
      {/* <Button
        callback={setInputMenu}
        callbackValue={countryData}
        label={"Input your period"}
      /> */}
    </div>
  );
};

export default CountryInfo;
