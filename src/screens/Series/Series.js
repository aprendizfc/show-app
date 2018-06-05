import React, { Component } from 'react';
import api from '../../services/api';

// components
import SeriesComponent from '../../components/Series/Series';

class Series extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    const headers = {
      method: 'GET',
    }

    api.get('tv/popular', headers)
      .then(res => res.json())
      .then(data => {
        console.log('​Series -> componentDidMount -> data', data);
        this.setState({
          result: data.results,
        })
      })
      .catch(err => {
        console.log('​Series -> componentDidMount -> err', err);
      })
  }
  render() {
    return (
      <SeriesComponent list={this.state.result} />
    );
  }
}

export default Series;
