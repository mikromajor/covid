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
    console.log('periodDays', periodDays);
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


  //   // data validation
  //   if (
  //     startPeriod > statisticsData.countryData.length ||
  //     endPeriod > statisticsData.countryData.length ||
  //     startPeriod < 1 ||
  //     endPeriod < 1
  //   ) {
  //     return (
  //       <Error
  //         className={"warning"}
  //         id={"notSuitableLength"}
  //         label={"No information available for this period"}
  //       />
  //     );
  //   } else if (!periodDays) {
  //     return (
  //       <Error
  //         className={"warning"}
  //         id={"noPeriodDays"}
  //         label={"Entered period has 0 day"}
  //       />
  //     );
  //   }

  //   firstObj =
  //     statisticsData.countryData[
  //       statisticsData.countryData.length - 1 - startPeriod
  //     ];
  //   lastObj =
  //     statisticsData.countryData[
  //       statisticsData.countryData.length - 1 - endPeriod
  //     ];
  // }
  // //input standard period
  // else {
  //   periodDays = statisticsData.last - statisticsData.first;
  //   firstObj =
  //     statisticsData.countryData[
  //       statisticsData.countryData.length - 1 - statisticsData.first
  //     ];
  //   lastObj =
  //     statisticsData.countryData[
  //       statisticsData.countryData.length - 1 - statisticsData.last
  //     ];
  // }

  // const statisticsResult = (key) => {
  //   return Math.abs(firstObj[key] - lastObj[key]);
  // };