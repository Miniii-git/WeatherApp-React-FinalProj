import React, { useState, useEffect } from "react";
import "./ChangeTemperatureUnit.css";

export default function ChangeTemperatureUnit(props) {
  return (
    <div className="ChangeTemperatureUnit">
      <span className="temperatire">{Math.round(props.celcius)}</span>
      <div className="degree">°C</div>
    </div>
  );
}
