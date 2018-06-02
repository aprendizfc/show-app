import React, { Component } from 'react';
import api from '../../services/api';

class Movies extends Component {
  componentDidMount() {
    const headers = {
      method: 'GET',
    }
    api.get('movie/popular', headers)
      .then((res) => res.json())
      .then(data => {
        console.log('​Movies -> componentDidMount -> data', data);
      })
      .catch(err => {
        console.log('​Movies -> componentDidMount -> err', err);
      })
  }
  render() {
    return (
      <h1>Movies</h1>
    );
  }
}

export default Movies;
