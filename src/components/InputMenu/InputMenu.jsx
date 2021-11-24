import React, {  useEffect, useState } from "react";
import { Button, Error, Input } from "../UI";
import hendlerDate from '../../utils/hendlerDate';
import {INIT_WARNING_START, INIT_WARNING_END} from '../../utils/constants'
import "./InputMenu.css";

const InputMenu = ({ period, setPeriod, setShowInputMenu, setShowStatistics }) => {
  
const [inpStart, setInpStart]=useState('');
const [inpEnd, setInpEnd]=useState('');

  const [warningStart, setWarningStart] = useState(INIT_WARNING_START);
	const [warningEnd, setWarningEnd] = useState(INIT_WARNING_END);
  
useEffect(()=>{
   console.log('useEffect fire');
  hendlerDate(inpStart, inpEnd, period, setPeriod, warningStart, setWarningStart, warningEnd, setWarningEnd, setShowStatistics)
},[inpStart, inpEnd])

  return (
    <div className="inputMenu">

      <label name="start_period">Enter periods start</label>
      <Input
        label={'start_period'}
        value={inpStart}
        callback={setInpStart}
      />

      <label name="end_period">Enter periods end</label>
      <Input
        label={'end_period'}
        value={inpEnd}
        callback={setInpEnd}
      />
      <Button
        label={"Hidden input menu"}
        callback={() => setShowInputMenu(false)}
      />
      {warningStart.start && <Error label={warningStart.labelForStart} />}
      {warningEnd.end && <Error label={warningEnd.labelForEnd} />}
    </div>
  );
};
export default InputMenu;
