import React from "react";
import "./WeatherOver.css";
import clear from "./../img/weather-icons/clear.svg";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
class WeatherOver extends React.Component {
    state = {
        degree:"8",
        timer:"03:00",
     } 
    render() { 
        return (
        <div className="weather-over">

            <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>{this.state.degree}&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>{this.state.degree}&#176;C</h2>
          </div>

          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>{this.state.degree}&#176;C</h2>
          </div>

          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>{this.state.degree}&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>{this.state.degree}&#176;C</h2>
          </div>

          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img src={clear} alt="clear" width="120" height="120" />
            <h2>{this.state.degree}&#176;C</h2>
          </div>
          <div className="weather_pertime">
            <h2>{this.state.timer}</h2>
            <img
              src={mostlycloudy}
              alt="mostlycloudy"
              width="120"
              height="120"
            />
            <h2>{this.state.degree}&#176;C</h2>
          </div>
        </div>
        );
    }
}
 
export default WeatherOver;