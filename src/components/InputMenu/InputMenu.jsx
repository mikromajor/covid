import React, { useState } from "react";
import { Button, Error, Input } from "../UI";
import "./InputMenu.css";

const InputMenu = ({ setPeriod, setShowInputMenu, setShowStatistacs }) => {
  const [start_period, setStart_period] = useState('');
  const [end_period, setEnd_period] = useState('');
  const [warning, setWarning] = useState(false);

  const today = new Date();
  let dateFirst, dateLast;
  const calculetePeriod = () => {
    if (start_period.length && end_period.length) {
      setWarning(false)
      dateFirst = new Date(start_period);
      dateLast = new Date(end_period);

      setPeriod({
        start_period: (Math.trunc((today - dateFirst) / 86400000)),

        end_period: (Math.trunc((today - dateLast) / 86400000)),
      })

    } else { setWarning(true) }


    setShowStatistacs(true);
  }

  return (
    <div className="inputMenu">

      <label name="start_period">Enter periods start</label>
      <Input
        label={'start_period'}
        value={start_period}
        callback={setStart_period}
      />

      <label name="end_period">Enter periods end</label>
      <Input
        label={'end_period'}
        value={end_period}
        callback={setEnd_period}
      />
      <Button
        label={"Hidden input menu"}
        callback={() => setShowInputMenu(false)}
      />
      <Button
        label={"Calculete"}
        callback={() => calculetePeriod()}
      />
      {warning && <Error label={'Pleas, choose period '} />}
    </div>
  );
};
export default InputMenu;
