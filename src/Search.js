import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input className="btn btn-light" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="p-1">
        <ul className="city-date-des">
          <li id="city">Lisbon</li>
          <li>Sunday</li>
          <li>clear sky</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
              alt="w"
            />
            <span className="temperatire">17</span>
            <span className="degree">°C</span>
          </div>
          <div className="col-5 weather-info">
            <ul>
              <li>Precipitation: 61% </li>
              <li>Humidity: 56%</li>
              <li>Wind: 0 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
