import React, { Component } from 'react';

const Poster = BaseComponent => {
  return class Poster extends Component {
    constructor(props) {
      super(props);

      this.item = this.props.item;
      this.POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
      this.POSTER_PATH = this.item.poster_path;
      this.POSTER_URL = `${this.POSTER_BASE_PATH}${this.POSTER_PATH}`;

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

    addFavorite = movie => {
      let favorites = JSON.parse(localStorage.getItem("favorites"));
      
      // check if favorites is null
      if ( !favorites ) {
        favorites = [movie];
      } else {
        favorites.push(movie);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    render() {
      return (
        <BaseComponent
          handleToggleTrailer={this.toggleTrailer}
          handleFavorite={this.addFavorite}
          isTrailerDisplayed={this.state.isTrailerDisplayed}
          posterUrl={this.POSTER_URL}
          {...this.props}
        />
      );
    }
  }
}

export default Poster;
