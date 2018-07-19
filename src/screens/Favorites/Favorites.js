import React, { Component } from 'react';

// components
import FavoritesComponent from '../../components/Favorites/Favorites';

class Favorites extends Component {
  state = {
    favorites: [],
  }

  componentDidMount() {
    const favorites = this.getFavorites();
    this.setState({
      favorites,
    })
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem("favorites"));
  }

  render() {
    return (
      <FavoritesComponent
        list={this.state.favorites}
      />
    );
  }
}

export default Favorites;
