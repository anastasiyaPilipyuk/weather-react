import React, { useState } from "react";
import "./ForecastDetails.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastDetails(props) {
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  if (forecast !== null) {
    console.log(forecast);
    return (
      <div className="ForecastDetails col-5 pe-4">
        {forecast.map(function (item, i) {
          if (i < 6 && i !== 0) {
            return <ForecastDay forecast={item} />;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "a254804501843d5o84b16tf864cb33f6";
    let units = "metric";
    //let url = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=${units}}`;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
  }
  return null;
}
