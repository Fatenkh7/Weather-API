import React from "react";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };
  render() {
    return (
        <header className="app__header">
          <form>
            <input placeholder="Type in a city name" id="citysearch"></input>
            <button className="find">FIND WEATHER</button>
          </form>
        </header>
    );
  }
}
export default Search;
