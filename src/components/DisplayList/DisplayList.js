import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Trailer from '../Trailer/Trailer';
import Poster from '../../components/Poster/Poster';

// assets
import styles from './DisplayList.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, name } = this.props.item;
    return (
      <React.Fragment>
        <div className={`card flex ${styles.posterCard}`}>
          <div
            className={styles.posterHolder}
            style={{backgroundImage: `url(${this.props.posterUrl})`}}
          >
          </div>
          <div className={`flex column ${styles.posterDetail}`}>
            <h4 className={`flex between ${styles.posterTitle}`}>
              {
                title ? title : name
              }
              <span className={styles.posterAverage}>{this.props.item.vote_average}</span>
            </h4>
            <p className={styles.posterOverview}>
              {this.props.item.overview}
            </p>
            <div className={`flex between middle ${styles.posterFooter}`}>
              <button
                onClick={this.props.handleToggleTrailer}
                className="btn btn-border-primary"
              >
                Ver Trailer
              </button>
            </div>
          </div>
        </div>
        {
          this.props.isTrailerDisplayed
            ? ( <Trailer
                  toggleTrailer={this.props.handleToggleTrailer}
                  url={this.props.item.video_url}
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

export default Poster(Item);
