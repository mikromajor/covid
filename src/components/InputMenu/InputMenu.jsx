import { logDOM } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import "./InputMenu.css";

const InputMenu = ({
  inputMenuData,
  setStatisticsData,
  printInputMenu,
  setPrintInputMenu,
}) => {
  const countriesDateWsPeriod = {
    date: true,
  };

  useEffect(() => {
    if (!inputMenuData) {
      setPrintInputMenu(null);
      return;
    }
    countriesDateWsPeriod.countryData = inputMenuData;

    setPrintInputMenu(
      <div className="inputMenu">
        <label name="startPeriod">Enter periods start</label>
        <input
          id="startPeriod"
          type="date"
          onChange={(e) => {
            countriesDateWsPeriod.first = e.target.value;
            console.log("countriesDateWsPeriod", countriesDateWsPeriod);
          }}
        ></input>
        <label name="endPeriod">Enter periods end</label>
        <input
          id="endPeriod"
          type="date"
          onChange={(e) => {
            countriesDateWsPeriod.last = e.target.value;
            console.log("countriesDateWsPeriod", countriesDateWsPeriod);
          }}
        ></input>
        <Button
          label={"Calculate Statistics"}
          callback={setStatisticsData}
          callbackValue={countriesDateWsPeriod}
        />
      </div>
    );
  }, [inputMenuData]);

  return printInputMenu;
};
export default InputMenu;
