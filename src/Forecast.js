import React from "react";
import "./Forecast.css";
import ForecastDetails from "./ForecastDetails";
import FormattedDate from "./FormattedDate";

export default function Forecast(props) {
  function getTemperature(value) {
    return Math.floor(value);
  }

  return (
    <div className="Forecast">
      <h1>
        <span className="city-name" id="city-label">
          {props.data.city}
        </span>
      </h1>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col">
              <h5>
                <span id="curr-datetime">
                  <FormattedDate date={props.data.date} />
                </span>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="weather-icon"
                src={props.data.condition.icon_url}
                alt={props.data.condition.icon}
                className="main-weather-pic"
              />
            </div>
            <div className="col-8 pt-3 ps-4">
              <span className="main-temp">
                <span id="curr-temp-C">
                  {getTemperature(props.data.temperature)}
                </span>{" "}
              </span>
              °&nbsp; <span className="measure">C</span>
              <br />
              <span id="curr-descr" className="main-info">
                {props.data.condition.description}
              </span>
              <br />
              <span className="main-info">
                Humidity: <span id="curr-humidity">{props.data.humidity}</span>
              </span>
              <br />
              <span className="main-info">
                Wind: <span id="curr-wind">{props.data.wind}</span>&nbsp;km/h
              </span>
            </div>
          </div>
        </div>
        <ForecastDetails />
      </div>
    </div>
  );
}
