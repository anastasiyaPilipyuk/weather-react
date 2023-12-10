import React, { useState } from "react";
import "./ShowTemperature.css";

export default function ShowTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function getTemperature(value) {
    if (unit !== "celsius") {
      return Math.floor((value * 9) / 5 + 32);
    }
    return Math.floor(value);
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div className="ShowTemperature">
      <span className="main-temp">
        <span id="curr-temp-C">{getTemperature(props.temperature)}</span>{" "}
      </span>
      °&nbsp; <span className="measure">C</span>
    </div>
  );
}
