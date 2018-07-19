import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Item from '../DisplayList/DisplayList';

class Favorites extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    const favorites = this.props.list.map(
      fav => <Item key={fav.id} item={fav} />
    )
    return (
      <React.Fragment>
        {favorites}
      </React.Fragment>
    );
  }
}

export default Favorites;
