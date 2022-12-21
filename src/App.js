import React, { Component } from "react";
import "./App.css";
import {FullURL } from "./api";
import {API_KEY} from "./api";
import Search from "./components/Search.js";
import Main from "./components/main.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      name: "beirut",
      errMessage: null,
      api:API_KEY
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(city) {
    let api= this.state.api;
    let url = FullURL(city,api)
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.cod !== "200") {
            this.setState({
              isLoaded: true,
              errMessage: result.message
            });
          } else {
            this.setState({
              isLoaded: true,
              items: result,
              errMessage: null
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
          err={this.state.errMessage}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          cityData={this.state.items ? this.state.items : null}
        />
      </div>
    );
  }
}

export default App;
