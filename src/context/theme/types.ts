export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export interface ThemeContextProps {
  theme: Themes;
  toggleTheme: () => void;
}