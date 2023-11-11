import React from "react";
import Day from "./Day";
import "./ForcastDayInfo.css";

export default function ForcastDaysInfo(props) {
  return (
    <div className="ForcastDayInfo row">
      {props.dailyForcast.daily.map(function (day, i) {
        if (i < 6 && i > 0) {
          return (
            <div className="col">
              <Day time={day.time} />
              <img src={day.condition.icon_url} width={55} />
              <div className="min-max">
                <span className="min">
                  {Math.round(day.temperature.minimum)}°{" "}
                </span>
                /{" "}
                <span className="max">
                  {Math.round(day.temperature.maximum)}°
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
