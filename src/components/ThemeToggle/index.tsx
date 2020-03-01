import React, { FC } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { ThemeContext, Themes } from '../../context/theme';
import styles from './styles.module.css';

const ThemeToggle: FC = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => {
      const isDark = theme === Themes.Dark;

      return (
        <FontAwesome
          name={isDark ? 'sun-o' : 'moon-o'}
          onClick={toggleTheme}
          className={styles.icon}
          title={`Switch to the ${isDark ? 'light' : 'dark'} theme`}
        />
      );
    }}
  </ThemeContext.Consumer>
);

export default ThemeToggle;
