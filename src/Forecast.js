import React from "react";
import "./Forecast.css";
import ForecastDetails from "./ForecastDetails";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h1>
        <span className="city-name" id="city-label">
          Prague
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
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="Cloudy weather"
                className="main-weather-pic"
              />
            </div>
            <div className="col-8 pt-3 ps-4">
              <span className="main-temp">
                <span id="curr-temp-C">12</span>{" "}
              </span>
              °&nbsp; <span className="measure">C</span>
              <br />
              <span id="curr-descr" className="main-info">
                CLEAR SKY
              </span>
              <br />
              <span className="main-info">
                Humidity: <span id="curr-humidity">43</span>
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
}
