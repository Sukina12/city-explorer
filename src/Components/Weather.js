import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      this.props.weatherData.map(data => {
        console.log(this.props.weatherData);
        return (
          <div>
            <p>{data.date}</p>
            <p>{data.description}</p>
          </div>
        );
      })
    );
  }
}

export default Weather;
