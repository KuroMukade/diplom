import React, {
  createContext, FC, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/localstorage';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  SIMPLE = 'app_simple_theme'
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.SIMPLE;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
