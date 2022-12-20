import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";
import fakeData from "./data/fakedata.json"
class App extends Component {
  constructor(props) {
      super(props);
      this.state = fakeData;}
  render() {
    return (
      <div className="app">
        <Search />
        <main className="app__main">
          <WeatherTod data={this.state}/>
          <WeatherOver data={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
