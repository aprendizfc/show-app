import React from 'react';
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
          <a href="">Movies</a>
          <a href="">Series</a>
          <a href="">Favorites</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
