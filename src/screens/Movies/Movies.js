import React, { Component } from 'react';
import api from '../../services/api';

// components
import MoviesComponent from '../../components/Movies/Movies';

class Movies extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    this.getMovies()
      .then(data => {
        const newArr = data.results.map( movie => {
          const movieVideo = this.getMovieVideo(movie);
          movieVideo.then(video => {
            const videoUrl = this.buildVideoUrl(video);
            this.addPropertyToItem(movie, 'video_url', videoUrl);
          })
          return movie;
        })
        return newArr;
      })
      .then(result => {
        this.setState({
          result,
        })
      })
      .catch(err => {
        console.log('​Movies -> componentDidMount -> err', err);
      })
  }

  getMovies() {
    const headers = {
      method: 'GET',
    }

    return api.get('movie/popular', headers)
              .then(res => res.json())
              .then(data => Promise.resolve(data))
              .catch(err => Promise.reject(err))
  }

  getMovieVideo(movie) {
    const headers = {
      method: 'GET',
    }
    const { id } = movie;

    return api.get(`movie/${id}/videos`)
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
    const { key } = video;
    return `https://www.youtube.com/embed/${key}`;
  }

  addPropertyToItem(obj, prop, value) {
    if ( !obj.hasOwnProperty(prop) ) {
      obj[prop] = value;
    }
  }

  render() {
    return (
      <MoviesComponent
        list={this.state.result}
        addPropertyToItem={this.addPropertyToItem}
      />
    );
  }
}

export default Movies;
