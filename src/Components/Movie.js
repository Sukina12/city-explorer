import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>
            <p>{data.title}</p>
            {/* <img src={data.poster_path} alt={''}/> */}
            <p>{data.description}</p>
          </div>
        );
      })
    );
  }
}

export default Movie;
