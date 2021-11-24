import React from "react";
import { Card } from "../UI";
import Button from "../UI/Button/Button";
import "./Statistics.css";

const Statistics = ({ period, countryData, setShowStatistics }) => {
  const { start_period, end_period } = period;

  if (countryData.length) {
    const calculate = (keyWord) => { return Math.abs(countryData[countryData.length - start_period - 1][keyWord] - countryData[countryData.length - end_period - 1][keyWord]) }



    const name = countryData[0].Country;
    const periodDays = Math.abs(start_period - end_period);
    const active = calculate("Active");
    const confirmed = calculate('Confirmed')
    const deaths = calculate('Deaths')

		return (
			<div className="statisticsInfo">
        <Card name={name} period={periodDays} active={active} confirmed={confirmed} deaths={deaths} />
        <Button
          callback={() => setShowStatistics(false)}
          label={"Hidden Statistics"}
        />
      </div>
    );
  }
};
export default Statistics;

