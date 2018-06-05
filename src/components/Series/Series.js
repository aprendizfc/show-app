import React from 'react';

// components
import Item from '../DisplayList/DisplayList';
import Poster from '../Poster/Poster';

const Series = function(props) {
  const series = props.list;
  const renderList = () => {
    return series.map(serie => <Item key={serie.id} item={serie} />)
  }

  return (
    <React.Fragment>
      {renderList()}
    </React.Fragment>
  );
}

export default Poster(Series);
