import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Info from './Info';
import Map from './Map';
import Weather from './Weather';
import Movie from './Movie';

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getData}>
          <Form.Label> Where would you like to explore ?</Form.Label>
          <br />
          <Form.Control onChange={this.props.getLocation} type='text' placeholder='Enter location Name ' />
          <br />
          <Button variant='primary' type='submit' >Explore ! </Button>
        </Form>
        {this.props.vision &&
          <div>
            <Info
              name={this.props.data.display_name}
              lat={this.props.data.lat}
              lon={this.props.data.lon}
            />
            <Map
              lat={this.props.data.lat}
              lon={this.props.data.lon}
            />
            {this.props.weatherData &&
              <Weather
                weatherData={this.props.weatherData}
              />
            }
            {this.props.movieData &&
              <Movie
                movieData={this.props.movieData}
              />
            }
          </div>
        }
      </div>
    );
  }
}

export default MyForm;
