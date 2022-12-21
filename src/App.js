import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import Main from "./main.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "beirut",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <Main cityName={this.state.name} />
      </div>
    );
  }
}

export default App;
