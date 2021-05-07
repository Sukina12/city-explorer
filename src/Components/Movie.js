import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>
            <Card style={{ width: '100rem' }}>
              <Card.Body>

                <Card.Img style={{ width: '20rem', height: '20rem' }}
                  src={`https://www.themoviedb.org/t/p/original/${data.img}`}
                  alt={data.description}
                />

                <Card.Title>{data.title}</Card.Title>
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

export default Movie;
