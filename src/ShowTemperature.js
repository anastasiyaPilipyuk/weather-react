import React from "react";
import "./ShowTemperature.css";

export default function ShowTemperature(props) {
  function getTemperature(value) {
    return Math.floor(value);
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
