import React from 'react';
import { NavLink } from 'react-router-dom';

// assets
import styles from './header.css';
import logo from '../../assets/group.svg';
import showapp from '../../assets/showapp.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <a href="" className={`brand ${styles.brand}`}>
          <img src={logo} className={styles.logo} />
          <img src={showapp} />
        </a>
        <nav className="nav">
          <NavLink className="nav-item" to="/movies">Movies</NavLink>
          <NavLink className="nav-item" to="/series">Series</NavLink>
          <NavLink className="nav-item" to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
