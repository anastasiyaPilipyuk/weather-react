import React from "react";

export default function FormattedDate(props) {
  function getTwoDigitValue(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day_of_week = days[props.date.getDay()];
  let day = props.date.getDate();

  let month = (props.date.getMonth() + 1).toString();
  if (month.length === 1) {
    month = "0" + month;
  }

  let year = props.date.getFullYear();
  let hours = getTwoDigitValue(props.date.getHours());
  let minutes = getTwoDigitValue(props.date.getMinutes());

  return (
    <div className="FormattedDate">
      {day_of_week}. {day}.{month}.{year} {hours}:{minutes}
    </div>
  );
}
