import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="todays-weather">
        <div className="todays-weather number">{Math.round(props.celsius)}</div>
        <div className="todays-weather letters">
          <span className="unit">
            ℃ |{" "}
            <a href="/" onClick={showFahrenheit}>
              ℉
            </a>
          </span>
        </div>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="todays-weather">
        <div className="todays-weather number">{Math.round(fahrenheit)}</div>
        <div className="todays-weather letters">
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              ℃
            </a>{" "}
            | ℉
          </span>
        </div>
      </span>
    );
  }
}
