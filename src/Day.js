import React from "react";

export default function Day(props) {
  let futureDate = new Date(props.time * 1000);
  let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let day = days[futureDate.getDay()];
  return <div className="Day">{day}</div>;
}
