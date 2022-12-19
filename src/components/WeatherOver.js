import React from "react";
import "./WeatherOver.css";
import WeatherPre from "./WeatherPre.js";
import fakedata from "./../data/fakedata.json";
import IMAGES from "../Images";
class WeatherOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = fakedata;
  }
  render() {
    const imageSrc = (image) => {
      if (image === "Cloudy") return IMAGES.cloudy;
      else if (image === "Clear") return IMAGES.clear;
      else if (image === "Mostlycloudy") return IMAGES.mostlycloudy;
      else if (image === "Partlycloudy") return IMAGES.partlycloudy;
      else if (image === "Snow") return IMAGES.snow;
      else if (image === "Storm") return IMAGES.storm;
      else if (image === "Rain") return IMAGES.rain;
      else if (image === "Fog") return IMAGES.fog;
      else if (image === "Drizzle") return IMAGES.drizzle;
    };
    const weatherList = this.state.list.map((element, index) => (
      <WeatherPre
        src={imageSrc(element.weather[0].main)}
        time={element.dt}
        temp={parseInt(element.main.temp - 273)}
      />
    ));

    return <div className="weather-over">{weatherList}</div>;
  }
}

export default WeatherOver;
