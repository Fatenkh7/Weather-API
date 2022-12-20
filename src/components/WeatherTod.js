import React from "react";
import "./WeatherTod.css";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";

class WeatherTod extends React.Component {
  state = {
    Tempmin: "10",
    Tempmax: "11",
    Humidity: "78%",
    pressure: "1008.48",
  };
  render() {
    return (
      <div className="weather_today">
        <figure>
          <img src={mostlycloudy} alt="cloudy" width="250" height="250" />
          <h1 className="weather_type">overcast clouds</h1>
        </figure>
        <h1>
          Temperature
          <span className="weather_data">
            {" "}
            {this.state.Tempmin}&deg; to {this.state.Tempmax}&deg;c
          </span>
        </h1>
        <hgroup>
          <h2>
            Humidity <span>{this.state.Humidity}</span>
          </h2>
          <h2>
            pressure <span>{this.state.pressure}</span>
          </h2>
        </hgroup>
      </div>
    );
  }
}
export default WeatherTod;
