import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Montreal</h1>
          <div className="todays-weather">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
            />
            <div className="todays-weather number">3</div>
            <div className="todays-weather letters">℃ | ℉</div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wednesday 03:00</li>
            <li>Feels like 0 ℃</li>
            <li>Cloudy</li>
            <li>Precipitation 15%</li>
            <li>Humidity 96%</li>
            <li>Wind 3 m/s</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          Wed
          <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="Showers"
          />
          <br />3 ℃
        </div>
        <div className="col-2">Hi</div>
        <div className="col-2">Hi</div>
        <div className="col-2">Hi</div>
        <div className="col-2">Hi</div>
        <div className="col-2">Hi</div>
      </div>
    </div>
  );
}
