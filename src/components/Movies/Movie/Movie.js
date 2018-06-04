import React from 'react';
import PropTypes from 'prop-types';

// assets
import styles from './Movie.css';

const Movie = function(props) {
  const { movie } = props;
  const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
  const POSTER_PATH = movie.poster_path;

  return (
    <div className={`card flex ${styles.posterCard}`}>
      <div
        className={styles.posterHolder}
        style={{backgroundImage: `url(${POSTER_BASE_PATH}${POSTER_PATH})`}}
      >
      </div>
      <div className={styles.posterDetail}>
        <h4 className={`flex between ${styles.posterTitle}`}>
          {movie.title}
          <span className={styles.posterAverage}>{movie.vote_average}</span>
        </h4>
        <p className={styles.posterOverview}>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Movie;
