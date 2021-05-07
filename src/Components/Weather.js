import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    return (
      this.props.weatherData.map(data => {
        console.log(this.props.weatherData);
        return (
       

          <div>
            <Card style={{ width: '100rem' }}>
              <Card.Body>

                <Card.Title>{data.date}</Card.Title>
                <Card.Text className="cardDescription">
                  Description: {data.description}
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        );
      })
    );
  }
}

export default Weather;
