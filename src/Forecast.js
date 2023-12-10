import React from "react";
import "./Forecast.css";
import ForecastDetails from "./ForecastDetails";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ShowTemperature from "./ShowTemperature";

export default function Forecast(props) {
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
              <WeatherIcon icon={props.data.condition.icon} size={72} />
            </div>
            <div className="col-8 pt-3 ps-4">
              <ShowTemperature temperature={props.data.temperature} />
              <span id="curr-descr" className="main-info">
                {props.data.condition.description}
              </span>
              <br />
              <span className="main-info">
                Humidity: <span id="curr-humidity">{props.data.humidity}</span>
              </span>
              <br />
              <span className="main-info">
                Wind: <span id="curr-wind">{props.data.wind}</span>&nbsp;m/s
              </span>
            </div>
          </div>
        </div>
        <ForecastDetails
          coordinates={props.data.coordinates}
          city={props.data.city}
        />
      </div>
    </div>
  );
}
