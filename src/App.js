import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import Search from "./components/Search.js";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };
  render() {
    return (
      <div className="app">
        <div className="app-header">
        <Search/>
          </div>
        <main className="app__main">
         <div className="weather_today">
          <WeatherTod/>
         </div>
         <div className="weather-over">
          <WeatherOver/>
         </div>
        </main>
          </div>
    );
  }
}

export default App;
