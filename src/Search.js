import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import ShowWeather from "./ShowWeather";

export default function Search(props) {
  let [city, setCity] = useState(props.DefaultCity);
  let [data, setData] = useState(null);
  let [ready, setReady] = useState(false);
  let apiKey = "t734d4903fba534f1644oba02ab79462";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function handleTypingCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getData);
  }

  function getData(response) {
    console.log(response);
    setData(response.data);
    setReady(true);
  }

  let form = (
    <form onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a City"
            className="form-control"
            onChange={handleTypingCity}
          />
        </div>
        <div className="col-3">
          <input className="btn btn-light" type="submit" value="Search" />
        </div>
      </div>
    </form>
  );

  if (ready) {
    return (
      <div className="Search">
        {form}
        <ShowWeather data={data} location={city} />
      </div>
    );
  } else {
    axios.get(apiUrl).then(getData);
  }
}
