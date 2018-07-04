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

    handleFavorite = movie => {
      console.log('​Poster -> movie', movie);
    }
    render() {
      return (
        <BaseComponent
          handleToggleTrailer={this.toggleTrailer}
          isTrailerDisplayed={this.state.isTrailerDisplayed}
          posterUrl={this.POSTER_URL}
          {...this.props}
        />
      );
    }
  }
}

export default Poster;
