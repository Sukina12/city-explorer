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
      vision: false
    };
  }
  getLocation = (e) => {
    e.preventDefault();
    let place = e.target.value;
    this.setState({
      locationName: place
    });
  }
  getData = async (e) => {
    try {
      e.preventDefault();
      const locationApi = `https://us1.locationiq.com/v1/search.php?key=pk.a2a65c09040e2f28766f692614e18035&q=${this.state.locationName}&format=json`;
      // const myApi = `${process.env.REACT_APP_HOST}/about`;
      // const showApi = await axios.get(myApi);
      const req = await axios.get(locationApi);
      this.setState({
        data: req.data[0]
      });
      this.setState({
        vision: true
      });
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
        />
        <Footer />
      </div>
    );

  }

}


export default App;
