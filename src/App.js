import axios from 'axios';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formCity: ' ',
      data: '',
      show: false
    };
  }
  getPlace = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.20fd835952f8a0a3b128564e5abe86b7&q=${this.state.formCity}&format=json`;

    const request = await axios.get(url);
    this.setState({
      data: request.data[0],
      show: true
    });
  }

  updateFormCity = (e) => {
    this.setState({ formCity: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>
          City Explorer <span> Enter a location below to learn about the weather, resturants, movies, and more!</span>
        </h1>
        <form onSubmit={this.getPlace}>
          <label for='city name'>Where would you like to explore ? </label>
          <br />
          <input onChange={this.updateFormCity} type='text' placeholder='city name' />
          <br />
          <button type='submit'> Explore ! </button>
        </form>
        <br />
        {this.state.data ? <p>
          Welcome To {this.state.data.display_name}
        </p> : ''}
        {this.state.data ? <p id='p2'>
          {this.state.data.display_name} located at {this.state.data.lat}by {this.state.data.lon}
        </p>:''}
        <br />
        {this.state.data ?<img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=15`} alt='' />:''}
        <br />
        <p>
          &copy; Code Fellows
        </p>
      </div>

    );
  }
}

export default App;
