import React, { useState } from "react";
import "./Forecast.css";
import ForecastDetails from "./ForecastDetails";
import axios from "axios";

export default function Forecast(props) {
  let apiKey = "a254804501843d5o84b16tf864cb33f6";
  let units = "metric";
  let baseWeatherURL = `https://api.shecodes.io/weather/v1/current?key=${apiKey}&units=${units}&query=Paris`;

  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      condition: {
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        icon_url: response.data.condition.icon_url,
      },
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Forecast">
        <h1>
          <span className="city-name" id="city-label">
            {weatherData.city}
          </span>
        </h1>
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col">
                <h5>
                  <span id="curr-datetime">Sun. 15.10.2023 14:18</span>
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img
                  id="weather-icon"
                  src={weatherData.condition.icon_url}
                  alt={weatherData.condition.icon}
                  className="main-weather-pic"
                />
              </div>
              <div className="col-8 pt-3 ps-4">
                <span className="main-temp">
                  <span id="curr-temp-C">{weatherData.temperature}</span>{" "}
                </span>
                °&nbsp; <span className="measure">C</span>
                <br />
                <span id="curr-descr" className="main-info">
                  {weatherData.condition.description}
                </span>
                <br />
                <span className="main-info">
                  Humidity:{" "}
                  <span id="curr-humidity">{weatherData.humidity}</span>
                </span>
                <br />
                <span className="main-info">
                  Wind: <span id="curr-wind">7.2</span>&nbsp;km/h
                </span>
              </div>
            </div>
          </div>
          <ForecastDetails />
        </div>
      </div>
    );
  } else {
    axios.get(baseWeatherURL).then(handleResponse);
    return "Loading...";
  }
}
