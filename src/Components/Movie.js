import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    return (
      <CardColumns>
        {this.props.movieData.map(data => {
          console.log(data);
          return (
            <div>
              <Card style={{ width: '100rem' }} className="card">
                <Card.Body>

                  <Card.Img style={{ width: '20rem', height: '20rem' }}
                    src={`https://www.themoviedb.org/t/p/original/${data.img}`}
                    alt={data.description}
                  />

                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text className="cardDescription" >
                    Release Date: {data.releasedDate}
                  </Card.Text>
                  <Card.Text className="cardDescription" style={ {overflow: scroll} }>
                    Description: {data.description}
                  </Card.Text>

                </Card.Body>
              </Card>
              <br/>
              <br/>
            </div>
          );
        })
        }
      </CardColumns>
    );
  }
}

export default Movie;
