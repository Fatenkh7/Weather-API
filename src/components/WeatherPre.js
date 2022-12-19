import React from "react";

class WeatherPre extends React.Component {
  render() {
    return (
      <div className="weather_pertime">
        <h2>{this.props.time}</h2>
        <img src={this.props.src} alt="clear" width="120" height="120" />
        <h2>{this.props.temp}&#176;C</h2>
      </div>
    );
  }
}

export default WeatherPre;
