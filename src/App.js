import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import Main from "./main.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      name: "beirut",
      errMessage: null
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=3316efa1ee9e9077c3ea940ec0989bd4`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.cod !== "200") {
            this.setState({ 
              errMessage:result.message });
          } else {
            console.log(result);
            this.setState({
              isLoaded: true,
              items: result,
            });
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getWeather(this.state.name);
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search
            handleInput={this.handleInputChange}
            getWeather={this.getWeather ? this.getWeather : null}
          />
        </header>
        <Main
          errMessage={this.state.errMessage}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          cityData={this.state.items ? this.state.items : null}
        />
      </div>
    )
  }
}

export default App;
