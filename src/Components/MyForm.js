import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getData}>
          <Form.Label> Where would you like to explore ?</Form.Label>
          <br />
          <Form.Control onChange={this.props.getLocation} type='text' placeholder='Enter location Name '/>
          <br/>
          <Button variant='primary' type='submit' >Explore ! </Button>
        </Form>
        {this.props.vision &&
          <div>
            <h2>
              Welcome To {this.props.data.display_name}
            </h2>
            <p>
              {this.props.data.display_name} is located at {this.props.data.lat} by {this.props.data.lon}
            </p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d75d43b43c0dacdf9e557f8243d5faee&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`}
              alt='map' />
          </div>
        }
      </div>
    );
  }
}

export default MyForm;
