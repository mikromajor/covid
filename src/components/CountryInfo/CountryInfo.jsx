import React, { useEffect, useState } from "react";
import getFetch from "../../api/getFetch";
import { Button, Card, Loader, Error } from "../UI";
import { DAY, WEEK, MONTH } from '../../utils/constants';
import "./CountryInfo.css";


const CountryInfo = ({ country, countryData, setCountryData,
  setPeriod, setShowInputMenu, setShowStatistics }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

      const request = await getFetch(`country/${country}`);
      console.log('request in useEff ->', request);
      setCountryData(request);
      setLoading(false);
    };
    if (!country.length) return;
    setLoading(true);
    fetchData();
  }, [country]);

  if (loading) {
    return (<Loader />)
  }
  if (!countryData.length)
    return (
      <Error label={'No information about covid in this country'} />
    );

  const name = countryData[0].Country;
  const periodDays = countryData.length - 1;
  const active = countryData[countryData.length - 1].Active;
  const confirmed = countryData[countryData.length - 1].Confirmed;
  const deaths = countryData[countryData.length - 1].Deaths;

  const setStandardPeriod = (period) => {
    setPeriod(period);
    setShowStatistics(true);
  }
  return (
    <div className="countryInfo">

      <Card name={name} period={periodDays} active={active} confirmed={confirmed} deaths={deaths} />

      <Button callback={() => setStandardPeriod(DAY)} label={'For yesterdayday'} />
      <Button callback={() => setStandardPeriod(WEEK)} label={'For last week'} />
      <Button callback={() => setStandardPeriod(MONTH)} label={'For last month'} />
      <Button
        callback={() => setShowInputMenu(true)}
        label={"Input your period"}
      />
    </div>
  );
}


export default CountryInfo;
