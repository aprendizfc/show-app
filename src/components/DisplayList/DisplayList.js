import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Trailer from '../Trailer/Trailer';

// assets
import styles from './DisplayList.css';

class Item extends Component {
  constructor(props) {
    super(props);

    this.item = this.props.item;
    this.POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
    this.POSTER_PATH = this.item.poster_path;

    this.toggleTrailer = this.toggleTrailer.bind(this);
  }

  state = {
    isTrailerDisplayed: false,
  }

  toggleTrailer() {
    this.setState(prevState => {
      return {
        isTrailerDisplayed: !prevState.isTrailerDisplayed,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className={`card flex ${styles.posterCard}`}>
          <div
            className={styles.posterHolder}
            style={{backgroundImage: `url(${this.POSTER_BASE_PATH}${this.POSTER_PATH})`}}
          >
          </div>
          <div className={`flex column ${styles.posterDetail}`}>
            <h4 className={`flex between ${styles.posterTitle}`}>
              {this.item.title}
              <span className={styles.posterAverage}>{this.item.vote_average}</span>
            </h4>
            <p className={styles.posterOverview}>
              {this.item.overview}
            </p>
            <div className={`flex between middle ${styles.posterFooter}`}>
              <button
                onClick={this.toggleTrailer}
                className="btn btn-border-primary"
              >
                Ver Trailer
              </button>
            </div>
          </div>
        </div>
        {
          this.state.isTrailerDisplayed
            ? ( <Trailer
                  toggleTrailer={this.toggleTrailer}
                  url={this.item.video_url}
                />
              )
            : ( null )
        }
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item;
