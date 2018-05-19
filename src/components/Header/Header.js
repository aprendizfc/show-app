import React from 'react';
import styles from './header.css';
import logo from '../../assets/group.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <a href="" className={`brand ${styles.brand}`}>
          <img src={logo} className={styles.logo} />
          <span className={styles.appName}>Showapp</span>
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
