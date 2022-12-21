import React, { Component } from "react";
import "./App.css";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { error, isLoaded} = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
          <main className="app__main">
            <WeatherTod data={this.props.cityData} />
            <WeatherOver data={this.props.cityData} />
            
          </main>
      );
    }
  }
}

export default Main;
