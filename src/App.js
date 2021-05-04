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
      data: '',
      show: true,
      vision: false,
      weatherData: false
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
      const key = process.env.REACT_APP_LOCATION_IQ_KEY;
      const pro= process.env.REACT_APP_SERVER;
      const locationApi = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.locationName}&format=json`;
      const req = await axios.get(locationApi);
      this.setState({
        data: req.data[0],
        vision: true
      });
      const weatherUrl = `${pro}/weather`;
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
        />
        <Footer />
      </div>
    );

  }

}


export default App;
