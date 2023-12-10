import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function getTemperature(value) {
    return `${Math.floor(value)} °`;
  }

  function getMaxTemp() {
    return getTemperature(props.forecast.temperature.maximum);
  }

  function getMinTemp() {
    return getTemperature(props.forecast.temperature.minimum);
  }

  function getDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastDate = new Date(props.forecast.time * 1000);
    return days[forecastDate.getDay()];
  }

  return (
    <div className="ForecastDay row add-info-row text-end">
      <div className="col-3 p-1 text-start">
        <span className="add-label">{getDay()}</span>
      </div>
      <div className="col-3 p-0 p-lg-1">
        <WeatherIcon icon={props.forecast.condition.icon} size={35} />
      </div>
      <div className="col-6 p-1">
        <label className="add-temp">
          {getMaxTemp()}C /{getMinTemp()}C
        </label>
      </div>
    </div>
  );
}
