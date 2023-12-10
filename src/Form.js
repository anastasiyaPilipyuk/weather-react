import React, { useState } from "react";
import "./Form.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function Form(props) {
  let [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  let apiKey = "a254804501843d5o84b16tf864cb33f6";
  let units = "metric";

  function search() {
    let baseWeatherURL = `https://api.shecodes.io/weather/v1/current?key=${apiKey}&units=${units}&query=${city}`;

    axios.get(baseWeatherURL).then(handleResponse);
  }

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
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeInput(event) {
    setCity(event.target.value);
  }

  function handlePreSetCity(event) {
    event.preventDefault();
    setCity(event.target.innerText);
    let baseWeatherURL = `https://api.shecodes.io/weather/v1/current?key=${apiKey}&units=${units}&query=${event.target.innerText}`;

    axios.get(baseWeatherURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <form id="weather-info-form" onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              id="city-input"
              className="form-control me-2"
              type="search"
              placeholder="Enter city name"
              aria-label="Search"
              autoComplete="false"
              autoFocus="on"
              onChange={handleChangeInput}
            />
            <button
              className="btn btn-outline-secondary btn-fix-width"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="link-container">
            <button
              type="button"
              className="btn btn-link quick-link city-list"
              onClick={handlePreSetCity}
            >
              Prague
            </button>
            <button
              type="button"
              className="btn btn-link quick-link city-list"
              onClick={handlePreSetCity}
            >
              Vien
            </button>
            <button
              type="button"
              className="btn btn-link quick-link city-list"
              onClick={handlePreSetCity}
            >
              London
            </button>
            <button
              type="button"
              id="curr-location"
              className="btn btn-link quick-link city-list-style"
            >
              <span role="img" aria-label="earth">
                🌐
              </span>
              Your location
            </button>
          </div>
        </form>
        <Forecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
