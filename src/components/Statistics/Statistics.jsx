// import React, { useState, useEffect } from "react";
// // import Button from '../UI/Button/Button.jsx' ;
// // import "./CountryInfo.css";

// const Statistics = ({ statisticsData}) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const dateToday = new Date();
//     const dateFirst = new Date(first);
//     const dateLast = new Date(last);
//     const todayMinusFirstDate = Math.trunc((dateToday - dateFirst) / 86400000);
//     const todayMinusLastDate = Math.trunc((dateToday - dateLast) / 86400000);
//     console.log("todayMinusFirstDate < 0 ", todayMinusFirstDate);

//     if (
//       todayMinusFirstDate > arrCovidInf.length ||
//       todayMinusLastDate > arrCovidInf.length ||
//       todayMinusFirstDate < 1 ||
//       todayMinusLastDate < 1
//     ) {
//       warning.textContent = `No information available for this period`;
//       warning.classList.remove("hidden");
//     } else if (dateFirst - dateLast) {
//       warning.classList.add("hidden");
//       addStatistic(
//         arrCovidInf[
//           arrCovidInf.length -
//             1 -
//             Math.trunc((dateToday - dateFirst) / 86400000)
//         ],
//         arrCovidInf[
//           arrCovidInf.length - 1 - Math.trunc((dateToday - dateLast) / 86400000)
//         ],
//         Math.abs(todayMinusFirstDate - todayMinusLastDate) + " days"
//       );
//     } else {
//       warning.textContent = "Error, check yours input date";
//       warning.classList.remove("hidden");
//     }
//   }, [period]);
// };
