import React, { Component } from "react";
import "./App.css";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    let cityName=this.props.cityName
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=3316efa1ee9e9077c3ea940ec0989bd4`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
          <main className="app__main">
            <WeatherTod data={this.state.items} />
            <WeatherOver data={this.state.items} />
            
          </main>
      );
    }
  }
}

export default Main;
