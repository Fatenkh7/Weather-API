import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";
class App extends Component {
  render() {

    return (
      <div className="app">
        <Search />
        <main className="app__main">
          <WeatherTod />
          <WeatherOver />
        </main>
      </div>
    );
  }
}

export default App;
