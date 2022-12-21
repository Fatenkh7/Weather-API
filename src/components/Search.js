import React from "react";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "",
  };
  handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="citysearch"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
          placeholder="Type in a city name"
        />
        <button
          onClick={() =>{this.props.getWeather(this.state.input)}}
          className="find"
        >
          FIND WEATHER
        </button>
      </form>
    );
  }
}
export default Search;
