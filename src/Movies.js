import React from 'react';
import './App.css';
import Movie from './Movie';



class Movies extends React.Component {

  render() {
    return (
      <>


        {this.props.movieinfo.map(movie => (
          < Movie
            title={movie.title}
            votes={movie.avgVotes}
            img={movie.image}
            overview={movie.overview}
            pop={movie.pop}
            release={movie.release}
          />
        ))}


      </>
    )
  }
}

export default Movies;