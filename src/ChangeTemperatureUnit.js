import React, { useState, useEffect } from "react";
import "./ChangeTemperatureUnit.css";

export default function ChangeTemperatureUnit(props) {
  let [temp, setTemp] = useState(props.celcius);

  useEffect(() => {
    setTemp(props.celcius);
  }, [props.celcius]);

  function ChangeUnitToCelcius(event) {
    event.preventDefault();
    setTemp(props.celcius);
  }

  function ChangeUnitToFahrenheit(event) {
    event.preventDefault();
    setTemp((props.celcius * 9) / 5 + 32);
  }

  return (
    <div className="ChangeTemperatureUnit">
      <span className="temperatire">{Math.round(temp)}</span>
      <div className="degree">
        <a href="/" onClick={ChangeUnitToCelcius}>
          °C{" "}
        </a>
        <span>|</span>
        <a href="/" onClick={ChangeUnitToFahrenheit}>
          {""}
          °F
        </a>
      </div>
    </div>
  );
}
