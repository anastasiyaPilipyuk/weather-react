import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "#0d6efd",
  size: 72,
  animate: true,
};

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "WIND",
    "thunderstorm-night": "WIND",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
