import React, { Component } from 'react';
import api from '../../services/api';

// components
import SeriesComponent from '../../components/Series/Series';

class Series extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    this.getSeries()
      .then(data => {
        const newArr = data.results.map(serie => {
          const serieVideo = this.getSerieVideo(serie);
          serieVideo.then(video => {
            const videoUrl = this.buildVideoUrl(video);
            this.addPropertyToItem(serie, 'video_url', videoUrl);
          });
          return serie;
        })
        return newArr;
      })
      .then(result => {
        this.setState({
          result,
        })
      })
      .catch(err => {
        console.log('​Series -> componentDidMount -> err', err);
      })
  }

  getSeries() {
    const headers = {
      method: 'GET',
    }

    return api.get('tv/popular', headers)
              .then(res => res.json())
              .then(data => Promise.resolve(data))
              .catch(err => Promise.reject(err))
  }

  getSerieVideo(serie) {
    const headers = {
      method: 'GET',
    }

    const { id } = serie;

    return api.get(`tv/${id}/videos`)
              .then(res => res.json())
              .then(data => {
                const { results } = data;
                if ( results.length > 0 ) {
                  return Promise.resolve(results[0]);
                }
              })
              .catch(err => Promise.reject(err))
  }

  buildVideoUrl(video) {
    if ( video ) {
      const { key } = video;
      return `https://www.youtube.com/embed/${key}`;
    }
  }

  addPropertyToItem(obj, prop, value) {
    if ( !obj.hasOwnProperty(prop) ) {
      obj[prop] = value;
    }
  }

  render() {
    return (
      <SeriesComponent list={this.state.result} />
    );
  }
}

export default Series;
