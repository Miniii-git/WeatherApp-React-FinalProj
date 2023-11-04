import React from "react";
import ChangeTemperatureUnit from "./ChangeTemperatureUnit";
import FriendlyDate from "./FriendlyDate";
import Icons from "./Icons";
import "./ShowWeather.css";

let a = 0;
export default function ShowWeather(props) {
  console.log(props.data);
  a = a + 1;
  console.log(a);

  if (props.data.condition) {
    return (
      <div className="ShowWeather">
        <div className="p-1">
          <ul className="city-date-des">
            <li id="city">{props.data.city}</li>
            <li>
              <FriendlyDate time={props.data.time} />
            </li>
            <li className="text-capitalize">
              {props.data.condition.description}
            </li>
          </ul>
          <div className="row">
            <div className="col-7">
              <Icons url={props.data.condition.icon_url} />
              <ChangeTemperatureUnit celcius={props.data.temperature.current} />
            </div>
            <div className="col-5 weather-info">
              <ul>
                <li>Humidity: {props.data.temperature.humidity}%</li>
                <li>Wind: {props.data.wind.speed} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ShowWeather">
        <div className="sorry">
          Sorry the weather Information for this city "{props.location}" doesn't
          exist!
        </div>
      </div>
    );
  }
}
