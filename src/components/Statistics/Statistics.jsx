import React from "react";
import Error from "../UI/Error/Error";
import Button from "../UI/Button/Button";
import "./Statistics.css";

const Statistics = ({ statisticsData, setStatisticsData }) => {
  let periodDays = null;
  let firstObj;
  let lastObj;

  if (!statisticsData) return null;
  // date from fetch coming looks  like that
  // arrObj[{objStatisticInfAboutCovidForFirstDay},{...SecondDay},{....}]
  // logics:  arr[{1}{2}{y}{4}{x}{6}{now}]
  // x - endPeriod
  // y - startPeriod
  // amountDays = nowDate-xDate
  // x = arr[ (arr.length-1) - amountDays ]

  // input users period:
  if (statisticsData.date) {
    //testing inputs periods value]
    if (!statisticsData.first || !statisticsData.last) {
      return (
        <Error
          className={"warning"}
          id={"noFirstLast"}
          label={"You have forgotten enter period"}
        />
      );
    }
    const dateToday = new Date();
    const dateFirst = new Date(statisticsData.first);
    const dateLast = new Date(statisticsData.last);

    const startPeriod = Math.trunc((dateToday - dateFirst) / 86400000); //Determine the number of days from today to the start of a given period
    const endPeriod = Math.trunc((dateToday - dateLast) / 86400000); //Determine the number of days from today to the start of a given period
    periodDays = Math.abs(startPeriod - endPeriod);

    // data validation
    if (
      startPeriod > statisticsData.countryData.length ||
      endPeriod > statisticsData.countryData.length ||
      startPeriod < 1 ||
      endPeriod < 1
    ) {
      return (
        <Error
          className={"warning"}
          id={"notSuitableLength"}
          label={"No information available for this period"}
        />
      );
    } else if (!periodDays) {
      return (
        <Error
          className={"warning"}
          id={"noPeriodDays"}
          label={"Entered period has 0 day"}
        />
      );
    }

    firstObj =
      statisticsData.countryData[
        statisticsData.countryData.length - 1 - startPeriod
      ];
    lastObj =
      statisticsData.countryData[
        statisticsData.countryData.length - 1 - endPeriod
      ];
  }
  //input standard period
  else {
    periodDays = statisticsData.last - statisticsData.first;
    firstObj =
      statisticsData.countryData[
        statisticsData.countryData.length - 1 - statisticsData.first
      ];
    lastObj =
      statisticsData.countryData[
        statisticsData.countryData.length - 1 - statisticsData.last
      ];
  }

  const statisticsResult = (key) => {
    return Math.abs(firstObj[key] - lastObj[key]);
  };

  return (
    <div className="statisticsInfo">
      <h2>{statisticsData.countryData[0].Country}</h2>
      <p>For period days: {periodDays}</p>
      <p>Amount of Active: {statisticsResult("Active")} </p>
      <p>Amount Confirmed: {statisticsResult("Confirmed")}</p>
      <p>Amount of deaths: {statisticsResult("Deaths")}</p>
      <Button
        id={"hidSt"}
        callback={setStatisticsData}
        callbackValue={null}
        label={"Hidden Statistics"}
      />
    </div>
  );
};
export default Statistics;
