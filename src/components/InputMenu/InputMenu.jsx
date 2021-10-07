import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import "./InputMenu.css";

const InputMenu = ({ inputMenuData, setStatisticsData, setInputMenuData }) => {
  const [dataFirst, setDataFirst] = useState(undefined);
  const [dataLast, setDataLast] = useState(undefined);

  if (!inputMenuData) return null;
  const countriesDateWsPeriod = {
    date: true,
    countryData: inputMenuData,
    first: dataFirst,
    last: dataLast,
  };

  return (
    <div className="inputMenu">
      <h4>
        You may choose period from yesterday to {inputMenuData.length} days ago{" "}
      </h4>
      <label name="startPeriod">Enter periods start</label>
      <Input
        id={"startPeriod"}
        value={dataFirst}
        type={"date"}
        callback={setDataFirst}
      />

      <label name="endPeriod">Enter periods end</label>
      <Input
        id={"endPeriod"}
        value={dataLast}
        type={"date"}
        callback={setDataLast}
      />
      <Button
        label={"Calculate Statistics"}
        callback={setStatisticsData}
        callbackValue={countriesDateWsPeriod}
      />
      <Button
        label={"Hidden input menu"}
        callback={setInputMenuData}
        callbackValue={null}
      />
    </div>
  );
};
export default InputMenu;
