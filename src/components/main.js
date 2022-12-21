import React, { Component } from "react";
import "./main.css";
import WeatherTod from "./WeatherTod";
import WeatherOver from "./WeatherOver";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { error, isLoaded, err } = this.props;
    if (error) {
      return <main className="app__main2"><h1 className="load">{error.message}</h1></main>;
    } else if (!isLoaded) {
      return(
      <main className="app__main2"><h1 className="load">Loading...</h1></main>);
    } else if (err !== null) {
      return <main className="app__main2"><h1 className="load">{this.props.err}</h1></main>;
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
