import React from "react";
import "./WeatherOver.css";
import clear from "./../img/weather-icons/clear.svg";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import WeatherPre from "./WeatherPre.js"; 

class WeatherOver extends React.Component {
    
    render() { 
        return (
        <div className="weather-over">

          <WeatherPre src={mostlycloudy} time ={'3:00'} temp={8} />
          <WeatherPre src={mostlycloudy} time={'6:00'} temp={9} />
          <WeatherPre src={clear} time={'9:00'} temp={14} />
          <WeatherPre src={clear} time={'12:00'} temp={17} />
          <WeatherPre src={clear} time={'15:00'} temp={18} />
          <WeatherPre src={clear} time={'18:00'} temp={16} />
          <WeatherPre src={mostlycloudy} time={'21:00'} temp={13} />
          
        </div>
        );
    }
}
 
export default WeatherOver;