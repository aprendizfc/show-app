import React from 'react';
import PropTypes from 'prop-types';

// components

import Item from '../DisplayList/DisplayList';

const Search = function(props) {
  const result = props.list;
  const renderList = function() {
    return result.map(item => <Item key={item.id} item={item} />)
  }
  return (
    <React.Fragment>
      {renderList()}
    </React.Fragment>
  );
}

Search.propTypes = {
  list: PropTypes.array.isRequired,
}

export default Search;
