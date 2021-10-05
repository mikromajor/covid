import React, { useState, useEffect } from "react";
import getFetch from "../../api/getFetch";
import "./CountryInfo.css";
import Button from "../UI/Button/Button";

const CountryInfo = ({ country, setStatisticsData }) => {
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
    setStatisticsData(null);

    if (!country) return;

    const fetchData = async () => {
      const data = await getFetch(`country/${country}`);
      setCountryData(data);
      setLoading(false);
    };

    setLoading(true);
    fetchData();
  }, [country, setStatisticsData]);

  if (!country) {
    console.log("problem with country in CountryInfo 42", country);
    return null; // country===null
  }

  if (loading) return <p>Country info loading...</p>;

  if (!countryData) {
    setStatisticsData(null);
    return <p className="countryInfo">Errors no info from server</p>;
  }
  if (!countryData.length) {
    setStatisticsData(null);
    return (
      <p className="countryInfo">No information about covid in this country</p>
    );
  }
  return (
    <div className="countryInfo">
      <h2>{countryData[countryData.length - 1].Country}</h2>
      <p>Date : {countryData[countryData.length - 1].Date}</p>
      <p>Amount of Active : {countryData[countryData.length - 1].Active}</p>
      <p>Amount Confirmed : {countryData[countryData.length - 1].Confirmed}</p>
      <p>Amount of deaths : {countryData[countryData.length - 1].Deaths}</p>

      <Button callback={setStatisticsData} callbackValue={day} label={"day"} />

      <Button
        callback={setStatisticsData}
        callbackValue={week}
        label={"week"}
      />
      <Button
        callback={setStatisticsData}
        callbackValue={month}
        label={"month"}
      />
      {/* <Button
        callback={setInputMenu}
        callbackValue={countryData}
        label={"Input your period"}
      /> */}
    </div>
  );
};

export default CountryInfo;
