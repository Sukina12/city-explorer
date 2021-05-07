import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>
            <p>{data.title}</p>
            <img src={`https://www.themoviedb.org/t/p/original/${data.img}`} alt=''/>
            <p>{data.description}</p>
          </div>
        );
      })
    );
  }
}

export default Movie;
