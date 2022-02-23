import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd1b9f8ce5a0967981cb74bc5f85a4a&units=metric`;

  function showTemperature(response) {
    setMessage(
      <ul>
        <li>
          It is {Math.round(response.data.main.temp)}℃ in {city}
        </li>
        <li>The humidity is {response.data.main.humidity}%</li>
        <li>The wind speed is {Math.round(response.data.wind.speed)}km/h</li>
        <li>Weather: {response.data.weather[0].description}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          ></img>
        </li>
      </ul>
    );
  }

  function showWeather(event) {
    event.preventDefault();
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={showWeather}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="search" />
          <input type="submit" value="here" />
        </form>
        <Weather />
        <p>{message}</p>
      </div>
      <footer>
        This app was coded by{" "}
        <a href="https://shr.link/3t82s" target="_blank" rel="noreferrer">
          Ellie
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/SakuraMilkTea8/Weather-App-React"
          target="_blank"
          rel="noreferrer"
        >
          open-source
        </a>
      </footer>
    </div>
  );
}

export default App;
