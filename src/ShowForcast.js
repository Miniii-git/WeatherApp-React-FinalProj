import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ShowForcast.css";
import ForcastDaysInfo from "./ForcastDaysInfo";

export default function ShowForcast(props) {
  let [ready, setReady] = useState(false);
  let [dailyForcast, setDailyForcast] = useState(null);
  let apiKey = "t734d4903fba534f1644oba02ab79462";
  let apiUrlForcast = `https://api.shecodes.io/weather/v1/forecast?lon=${props.data.coordinates.longitude}&lat=${props.data.coordinates.latitude}&key=${apiKey}`;

  useEffect(() => {
    setReady(false);
  }, [props.data.coordinates]);

  function getForcastData(response) {
    console.log(response);
    setReady(true);
    setDailyForcast(response.data);
  }
  if (ready) {
    return (
      <div className="ShowForcast">
        <ForcastDaysInfo dailyForcast={dailyForcast} />
      </div>
    );
  } else {
    axios.get(apiUrlForcast).then(getForcastData);
  }
}
