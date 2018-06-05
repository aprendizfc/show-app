import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Item from '../DisplayList/DisplayList';
import Poster from '../Poster/Poster';

class Movies extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    const movies = this.props.list.map(
      movie => <Item key={movie.id} item={movie} />
    )
    return (
      <React.Fragment>
        {movies}
      </React.Fragment>
    );
  }
}

export default Poster(Movies);
