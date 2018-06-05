import React, { Component } from 'react';

const Poster = BaseComponent => {
  return class Poster extends Component {
    handleFavorite = movie => {
      console.log('​Poster -> movie', movie);
    }
    render() {
      return (
        <BaseComponent handleFavorite={this.handleFavorite} {...this.props} />
      );
    }
  }
}

export default Poster;
