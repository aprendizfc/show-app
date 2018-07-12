import React, { Component } from 'react';
import api from '../../services/api';

// components
import SearchResult from '../../components/Search/Search';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    result: [],
  }

  componentDidMount() {
    this.getResults()
      .then(data => {
        const newArr = data.results.map(item => {
          const resultVideo = this.getVideo(item);
          resultVideo.then(video => {
            const videoUrl = this.buildVideoUrl(video);
            this.addPropertyToItem(item, 'video_url', videoUrl);
          })
          return item;
        })
        return newArr;
      })
      .then(result => {
        this.setState({
          result,
        })
      })
      .catch(err => {
        console.log('​Search -> componentDidMount -> err', err);
      })
  }

  getResults() {
    const { query } = this.props.match.params;
    const headers = {
      method: 'GET',
      data: {
        query: query,
      }
    }

    return api.search(`search/multi`, headers)
              .then(res => res.json())
              .then(data => Promise.resolve(data))
              .then(err => Promise.reject(err))
  }

  getVideo(item) {
    const headers = {
      method: 'GET',
    }

    const { id } = item;

    // ToDo:
    // figure out how to fetch different video type (serie/movie)
    // because they are different endpoints
  }

  render() {
    return (
      <SearchResult list={this.state.result} />
      // <p>a</p>
    );
  }
}

export default Search ;
