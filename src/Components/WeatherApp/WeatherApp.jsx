import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
const WeatherApp = () => {
  // let api_key ="c0ee5eee6f0154a9c827c7251a075586"
  let api_key = "60629677a4cd4c0e9f530453243103";

  const [wicon, setWicon] = useState(rain_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `http://api.weatherapi.com/v1/current.json?key=${api_key} &q=${element[0].value}&aqi=no`;

    let response = await fetch(url);
    let data = await response.json();
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");

    temperature[0].innerHTML = data.current.temp_c + "°C";
    location[0].innerHTML = data.location.name;
    humidity[0].innerHTML = data.current.humidity + "%";
    wind[0].innerHTML = data.current.wind_kph + "km/hr";

    // if(data.current.condition.text==="Clear"){
    //   setWicon(clear_icon);
    // }
    // if(data.current.condition.text==="Partly cloudy"){
    //   setWicon(cloud_icon);
    // }
    // if(data.current.condition.text==="Clear"){
    //   setWicon(clear_icon);
    // }
    // if(data.current.condition.text==="Clear"){
    //   setWicon(clear_icon);
    // }
    // if(data.current.condition.text==="Clear"){
    //   setWicon(clear_icon);
    // }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>

      <div className="weather-temp">10°C</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">50%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">4km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
