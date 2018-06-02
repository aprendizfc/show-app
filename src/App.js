import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Search from './components/Search/Search';

// screens
import ScreenMovies from './screens/Movies/Movies';
import ScreenSeries from './screens/Series/Series';
import ScreenFavorites from './screens/Favorites/Favorites';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Search />

          <section className="container">
            <Route exact path="/" render={() => <Redirect to="/movies" />} />
            <Route path="/movies" component={ScreenMovies} />
            <Route path="/series" component={ScreenSeries} />
            <Route path="/favorites" component={ScreenFavorites} />
          </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
