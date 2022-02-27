import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      datetime: new Date(response.data.dt * 1000),
      feelslike: response.data.main.feels_like,
      weather: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coord: response.data.coord,
    });
  }

  const [city, setCity] = useState("");

  function search(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd1b9f8ce5a0967981cb74bc5f85a4a&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="search" />
          <input type="submit" value="here" />
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <div className="todays-weather">
              <WeatherIcon
                code={weatherData.icon}
                alt={weatherData.description}
              />
              <WeatherTemperature celsius={weatherData.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <FormattedDate date={weatherData.datetime} />
              </li>
              <li>Feels like {Math.round(weatherData.feelslike)} ℃</li>
              <li className="text-capitalize">{weatherData.weather}</li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
        </div>
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search("Tokyo");
    return "Loading...";
  }
}
