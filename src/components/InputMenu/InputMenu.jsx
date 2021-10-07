import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import "./InputMenu.css";

const InputMenu = ({ inputMenuData, setStatisticsData }) => {
  const [dataFirst, setDataFirst] = useState(1);
  const [dataLast, setDataLast] = useState(1);

  if (!inputMenuData) return null;
  const countriesDateWsPeriod = {
    date: true,
    countryData: inputMenuData,
    first: dataFirst,
    last: dataLast,
  };

  return (
    <div className="inputMenu">
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
    </div>
  );
};
export default InputMenu;
