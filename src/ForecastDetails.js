import React from "react";
import "./ForecastDetails.css";

export default function ForecastDetails() {
  return (
    <div className="ForecastDetails col-5 pe-4">
      <div className="row add-info-row text-end">
        <div className="col-3 p-1 text-start">
          <span className="add-label">Mon</span>
        </div>
        <div className="col-3 p-0 p-lg-1">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="cloudy"
            className="add-weather-pic"
          />
        </div>
        <div className="col-6 p-1">
          <label className="add-temp">10 °C / 8 °C</label>
        </div>
      </div>
      <div className="row add-info-row text-end">
        <div className="col-3 p-1 text-start">
          <span className="add-label ">Tue</span>
        </div>
        <div className="col-3 p-0 p-lg-1">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="cloudy"
            className="add-weather-pic"
          />
        </div>
        <div className="col-6 p-1">
          <label className="add-temp">10 °C / 8 °C</label>
        </div>
      </div>
      <div className="row add-info-row text-end">
        <div className="col-3 p-1 text-start">
          <span className="add-label">Wed</span>
        </div>
        <div className="col-3 p-0 p-lg-1">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="cloudy"
            className="add-weather-pic"
          />
        </div>
        <div className="col-6 p-1 ">
          <label className="add-temp">10 °C / 8 °C</label>
        </div>
      </div>
      <div className="row add-info-row text-end">
        <div className="col-3 p-1 text-start">
          <span className="add-label">Thu</span>
        </div>
        <div className="col-3 p-0 p-lg-1">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="cloudy"
            className="add-weather-pic"
          />
        </div>
        <div className="col-6 p-1">
          <label className="add-temp">10 °C / 8 °C</label>
        </div>
      </div>
      <div className="row add-info-row text-end">
        <div className="col-3 p-1 text-start">
          <span className="add-label">Fri</span>
        </div>
        <div className="col-3 p-0 p-lg-1">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="cloudy"
            className="add-weather-pic"
          />
        </div>
        <div className="col-6 p-1">
          <label className="add-temp">10 °C / 8 °C</label>
        </div>
      </div>
    </div>
  );
}
