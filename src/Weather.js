import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      weather: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <div className="todays-weather">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.weather}
              />
              <div className="todays-weather number">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="todays-weather letters">℃ | ℉</div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Wednesday 03:00</li>
              <li>Feels like {Math.round(weatherData.feelslike)} ℃</li>
              <li className="text-capitalize">{weatherData.weather}</li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind {Math.round(weatherData.wind)} m/s</li>
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
  } else {
    let city = "Montreal";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd1b9f8ce5a0967981cb74bc5f85a4a&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
