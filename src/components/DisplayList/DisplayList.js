import React from 'react';
import PropTypes from 'prop-types';

// assets
import styles from './DisplayList.css';

const Item = function(props) {
  const { item } = props;
  const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
  const POSTER_PATH = item.poster_path;

  return (
    <div className={`card flex ${styles.posterCard}`}>
      <div
        className={styles.posterHolder}
        style={{backgroundImage: `url(${POSTER_BASE_PATH}${POSTER_PATH})`}}
      >
      </div>
      <div className={styles.posterDetail}>
        <h4 className={`flex between ${styles.posterTitle}`}>
          {item.title}
          <span className={styles.posterAverage}>{item.vote_average}</span>
        </h4>
        <p className={styles.posterOverview}>
          {item.overview}
        </p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item;
