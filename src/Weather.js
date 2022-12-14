import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="WeatherInfo">
        <h1>Kyiv</h1>
        <ul>
          <li>Wednesday, 07:00</li>
          <li>Partly Cloudy</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy "
              className="float-left"
            />
            <span className="temperature">14</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 14%</li>
            <li>Humidity: 64% </li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
