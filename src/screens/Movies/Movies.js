import React, { Component } from 'react';
import api from '../../services/api';

// components
import MoviesComponent from '../../components/Movies/Movies';

class Movies extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    const headers = {
      method: 'GET',
    }

    api.get('movie/popular', headers)
      .then((res) => res.json())
      .then(data => {
        console.log('​Movies -> componentDidMount -> data', data);
        this.setState({
          result: data.results,
        })
      })
      .catch(err => {
        console.log('​Movies -> componentDidMount -> err', err);
      })
  }
  render() {
    return (
      <MoviesComponent list={this.state.result} />
    );
  }
}

export default Movies;
