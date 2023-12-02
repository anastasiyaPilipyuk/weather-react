import React from "react";
import "./Form.css";
import Forecast from "./Forecast";

export default function Form() {
  return (
    <div className="Form">
      <form id="weather-info-form">
        <div className="d-flex">
          <input
            id="city-input"
            className="form-control me-2"
            type="search"
            placeholder="Enter city name"
            aria-label="Search"
            autoComplete="false"
            autoFocus="on"
          />
          <button
            className="btn btn-outline-secondary btn-fix-width"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="link-container">
          <button type="button" className="btn btn-link quick-link city-list">
            Prague
          </button>
          <button type="button" className="btn btn-link quick-link city-list">
            Vien
          </button>
          <button type="button" className="btn btn-link quick-link city-list">
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
      <Forecast defaultCity="Prague" />
    </div>
  );
}
