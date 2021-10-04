//-----------------------------------------
export const calcStatistics = ({ setStatisticsData, inputDate }) => {
  let periodDays = null;
  let firstObj = null; // if strict - may be wrong,
  let lastObj = null;
  let warning = null;

  // date from fetch coming looks  like that
  // arrObj[{objStatisticInfAboutCovidForFirstDay},{...SecondDay},{....}]
  // logics:  arr[{1}{2}{y}{4}{x}{6}{now}]
  // x - endPeriod
  // y - startPeriod
  // amountDays = nowDate-xDate
  // x = arr[ (arr.length-1) - amountDays ]

  if (inputDate.date) {
    const dateToday = new Date();
    const dateFirst = new Date(inputDate.first);
    const dateLast = new Date(inputDate.last);

    const startPeriod = Math.trunc((dateToday - dateFirst) / 86400000); //Determine the number of days from today to the start of a given period
    const endPeriod = Math.trunc((dateToday - dateLast) / 86400000); //Determine the number of days from today to the start of a given period
    periodDays = Math.abs(startPeriod - endPeriod);

    if (
      startPeriod > inputDate.countryData.length ||
      endPeriod > inputDate.countryData.length ||
      startPeriod < 1 ||
      endPeriod < 1
    ) {
      warning = "No information available for this period";
    } else if (!periodDays) {
      warning = "Entered period has 0 day";
    }

    firstObj =
      inputDate.countryData[inputDate.countryData.length - 1 - startPeriod];
    lastObj =
      inputDate.countryData[inputDate.countryData.length - 1 - endPeriod];
  } else {
    periodDays = inputDate.last - inputDate.first;
    firstObj =
      inputDate.countryData[inputDate.countryData.length - 1 - inputDate.first];
    lastObj =
      inputDate.countryData[inputDate.countryData.length - 1 - inputDate.last];
  }

  const statisticsOutput = (key) => {
    return Math.abs(firstObj[key] - lastObj[key]);
  };
  const active = statisticsOutput("Active");
  const confirmed = statisticsOutput("Confirmed");
  const deaths = statisticsOutput(" Deaths");

  const calcResult = { active, confirmed, deaths, warning, periodDays };

  setStatisticsData({ calcResult });
};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
