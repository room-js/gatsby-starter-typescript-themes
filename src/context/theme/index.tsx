import React, { createContext, FC, ReactElement } from 'react';
import createPersistedState from 'use-persisted-state';
import { Themes, ThemeContextProps } from './types';
import styles from './styles.module.css';

export * from './types';

const useCounterState = createPersistedState('theme');

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Themes.Light,
  toggleTheme: () => {},
});

export const ThemeProvider: FC = props => {
  const [theme, setTheme] = useCounterState<Themes>(Themes.Light);
  const isDark = theme === Themes.Dark;
  const toggleTheme = () => {
    setTheme(isDark ? Themes.Light : Themes.Dark);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      <div className={isDark ? styles.dark : styles.light}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export const ThemeWrapper = ({ element }: { element: ReactElement }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
