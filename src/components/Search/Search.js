import React from 'react';
import PropTypes  from 'prop-types';

// assets
import styles from './Search.css';
import searchIcon from '../../assets/search.svg';

const Search = (props) => {
  const placeholder = props.placeholder ? props.placeholder : 'Search';
  return (
    <form className={styles.searchForm}>
      <div className="container flex middle">
        <img className={styles.searchIcon} src={searchIcon} />
        <input
          type="search"
          className={styles.searchInput}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
}

export default Search;
