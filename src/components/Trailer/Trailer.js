import React from 'react';
import PropTypes from 'prop-types';

// assets
import styles from './Trailer.css';
import close from '../../assets/close.svg';

const Trailer = function(props) {
  return (
    <div className={`flex middle center ${styles.overlay}`}>
      <div className={styles.trailer}>
        <img onClick={() => props.toggleTrailer()} src={close} className={styles.close} alt="close"/>
        <iframe
          width="100%"
          height="100%"
          src={props.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
}

Trailer.propTypes = {
  url: PropTypes.string.isRequired,
  toggleTrailer: PropTypes.func.isRequired,
}

export default Trailer;
