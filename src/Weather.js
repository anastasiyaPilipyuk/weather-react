import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeatherInfo(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}`
    );
  }

  let apiKey = "a254804501843d5o84b16tf864cb33f6";
  let baseWeatherURL = `https://api.shecodes.io/weather/v1/current?key=${apiKey}&units=metric&query=${props.city}`;

  axios.get(baseWeatherURL).then(showWeatherInfo);

  return <h2>Hello from Weather component</h2>;
}
