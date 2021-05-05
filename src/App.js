import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import axios from 'axios';



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      data: {},
      show: true,
      vision: false,
      weatherData: false,
      movieData: {},
      apiURL: process.env.REACT_APP_LOCATION_SERVER,
      apiKey: process.env.REACT_APP_LOCATION_IQ_KEY,
      ownURL: process.env.REACT_APP_SERVER,

    };
  }
  getLocation = async (e) => {
    e.preventDefault();
    let place = e.target.value;
    this.setState({
      locationName: place
    });
  }
  getData = async (e) => {
    try {


      e.preventDefault();
      const locationApi = `${this.state.apiURL}?key=${this.state.apiKey}&q=${this.state.locationName}&format=json`;
      const req = await axios.get(locationApi);
      this.setState({
        data: req.data[0],
        vision: true
      });
      // const movieUrl = `${this.state.ownURL}/movie?city=${this.state.locationName}`;
      // const movieRequest = await axios.get(movieUrl);
      // this.setState({
      //   movieData: movieRequest.data,
      // });
      const weatherUrl = `${this.state.ownURL}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
      const weatherRequest = await axios.get(weatherUrl);

      console.log(weatherRequest);
      this.setState({
        weatherData: weatherRequest.data,
        vision: true,
        show: true
      });
      console.log(this.state.weatherData);
    }
    catch (error) {
      this.setState({
        show: false
      });
    }
  }
  goBack = () => window.location.reload();
  render() {
    return (
      <div>
        <Header />
        <Main
          getLocation={this.getLocation}
          getData={this.getData}
          vision={this.state.vision}
          data={this.state.data}
          show={this.state.show}
          goBack={this.goBack}
          weatherData={this.state.weatherData}
          movieData={this.state.movieData}
        />
        <Footer />
      </div>
    );

  }

}


export default App;
