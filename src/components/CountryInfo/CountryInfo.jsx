import React, { useState, useEffect } from "react";
import getFetch from "../../api/getFetch";

const CountryInfo = ({ country }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;

    const fetchData = async () => {
      const data = await getFetch(`country/${country}`);
      setCountryData(data);
      setLoading(false);
    };

    setLoading(true);
    fetchData();
  }, [country]);

  if (!country) return null;

  if (loading) return <p>Country info loading...</p>;

  if (!countryData) return <p>No info</p>;

  return (
    <div>
      <p>{countryData[0].Country}</p>
      <p>Date - {countryData[countryData.length - 1].Date}</p>
      <p>Amount of Active - {countryData[countryData.length - 1].Active}</p>
      <p>Amount Confirmed - {countryData[countryData.length - 1].Confirmed}</p>
      <p>Amount of deaths - {countryData[countryData.length - 1].Deaths}</p>
    </div>
  );
};

export default CountryInfo;
