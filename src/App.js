import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// components
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';

// screens
import ScreenMovies from './screens/Movies/Movies';
import ScreenSeries from './screens/Series/Series';
import ScreenFavorites from './screens/Favorites/Favorites';
import ScreenSearch from './screens/Search/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <SearchForm />

          <section className="container flex flex-wrap">
            <Route exact path="/" render={() => <Redirect to="/movies" />} />
            <Route path="/movies" component={ScreenMovies} />
            <Route path="/series" component={ScreenSeries} />
            <Route path="/favorites" component={ScreenFavorites} />
            <Route path="/search/:query" component={ScreenSearch} />
          </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
