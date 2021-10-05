import React, { useState, useEffect } from "react";
import "./Statistics.css";

const Statistics = ({ statisticsData }) => {
  console.log("statisticsData", statisticsData);

  const [statisticsOut, setStatisticsOut] = useState(null);
  let periodDays = null;
  let firstObj;
  let lastObj;
  let warning = null;

  useEffect(() => {
    if (!statisticsData) return setStatisticsOut(null);

    // date from fetch coming looks  like that
    // arrObj[{objStatisticInfAboutCovidForFirstDay},{...SecondDay},{....}]
    // logics:  arr[{1}{2}{y}{4}{x}{6}{now}]
    // x - endPeriod
    // y - startPeriod
    // amountDays = nowDate-xDate
    // x = arr[ (arr.length-1) - amountDays ]

    if (statisticsData.date) {
      const dateToday = new Date();
      const dateFirst = new Date(statisticsData.first);
      const dateLast = new Date(statisticsData.last);

      const startPeriod = Math.trunc((dateToday - dateFirst) / 86400000); //Determine the number of days from today to the start of a given period
      const endPeriod = Math.trunc((dateToday - dateLast) / 86400000); //Determine the number of days from today to the start of a given period
      periodDays = Math.abs(startPeriod - endPeriod);

      if (
        startPeriod > statisticsData.countryData.length ||
        endPeriod > statisticsData.countryData.length ||
        startPeriod < 1 ||
        endPeriod < 1
      ) {
        warning = (
          <h2 className="warning">No information available for this period</h2>
        );
      } else if (!periodDays) {
        warning = <h2 className="warning">Entered period has 0 day</h2>;
      }

      firstObj =
        statisticsData.countryData[
          statisticsData.countryData.length - 1 - startPeriod
        ];
      lastObj =
        statisticsData.countryData[
          statisticsData.countryData.length - 1 - endPeriod
        ];
    } else {
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
    if (warning) {
      setStatisticsOut(warning);
      return;
    }

    setStatisticsOut(
      <div className="statisticsInfo">
        <h2>{statisticsData.countryData[0].Country}</h2>
        <p>For period days: {periodDays}</p>
        <p>Amount of Active: {statisticsResult("Active")} </p>
        <p>Amount Confirmed: {statisticsResult("Confirmed")}</p>
        <p>Amount of deaths: {statisticsResult("Deaths")}</p>
        {/* <Button
            id={"day"}
            callback={setStatisticsData}
            callbackValue={day}
            label={"day"}
            /> */}
      </div>
    );
  }, [statisticsData]);

  // if (statisticsOut == null) return <p>Calculation results...</p>;
  return statisticsOut;
};
export default Statistics;
