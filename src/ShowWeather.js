import React from "react";

export default function ShowWeather(props) {
  console.log(props.data);
  return (
    <div className="ShowWeather">
      <div className="p-1">
        <ul className="city-date-des">
          <li id="city">{props.data.city}</li>
          <li>sunday</li>
          <li>{props.data.condition.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
              alt="w"
            />
            <span className="temperatire">
              {Math.round(props.data.temperature.current)}
            </span>
            <span className="degree">°C</span>
          </div>
          <div className="col-5 weather-info">
            <ul>
              <li>Humidity: {props.data.temperature.humidity}%</li>
              <li>Wind: {props.data.wind.speed} km/h</li>
              <li>
                It feels like: {Math.round(props.data.temperature.feels_like)}{" "}
                °C{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
