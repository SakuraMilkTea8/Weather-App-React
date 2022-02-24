import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="WeatherForecast-day">Wed</div>
        <WeatherIcon code="01d" />
        <div className="WeatherForecast-temperatures">3 ℃</div>
      </div>
      <div className="col-2">Hi</div>
      <div className="col-2">Hi</div>
      <div className="col-2">Hi</div>
      <div className="col-2">Hi</div>
      <div className="col-2">Hi</div>
    </div>
  );
}
