import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Movie from './Movie/Movie';

class Movies extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  }

  render() {
    const movies = this.props.movies.map(
      movie => <Movie key={movie.id} movie={movie} />
    )
    return (
      <React.Fragment>
        {movies}
      </React.Fragment>
    );
  }
}

export default Movies;
