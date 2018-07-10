import React, { Component } from 'react';
import PropTypes  from 'prop-types';

// assets
import styles from './SearchForm.css';
import searchIcon from '../../assets/search.svg';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    query: '',
  }

  placeholder = this.props.placeholder ? this.props.placeholder : 'Search';

  handleSubmit = function(e) {
    e.preventDefault();
    window.location = `search/${this.state.query}`
  }

  handleInputChange = function(e) {
    this.setState({
      query: e.target.value,
    })
  }

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <div className="container flex middle">
          <img className={styles.searchIcon} src={searchIcon} />
          <input
            type="search"
            className={styles.searchInput}
            value={this.state.query}
            placeholder={this.placeholder}
            onChange={this.handleInputChange}
          />
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
}

export default Search;
