import React, { FC } from 'react';
import { Link } from 'gatsby';
import { HeaderProps } from './types';
import ThemeToggle from '../ThemeToggle';
import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.h1}>
      <Link to='/'>
        {siteTitle}
      </Link>
    </h1>
    <div className={styles.themeToggleContainer}>
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
