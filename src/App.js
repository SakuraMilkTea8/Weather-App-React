import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
