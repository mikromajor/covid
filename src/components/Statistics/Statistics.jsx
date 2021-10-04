import React from "react";

const Statistics = ({ statisticsData }) => {
  if (statisticsData === null || statisticsData === undefined) return null;

  if (statisticsData.warning) return <h2>{statisticsData.warning}</h2>;

  if (!statisticsData.active) return <h2> error - no Statistics results </h2>;

  return (
    <div id="Statistics">
      <p> Entered period days : {statisticsData.periodDays} </p>
      <p>Amount of Active: {statisticsData.active} </p>
      <p>Amount Confirmed: {statisticsData.confirmed}</p>
      <p>Amount of deaths: {statisticsData.deaths}</p>
    </div>
  );
};
export default Statistics;
