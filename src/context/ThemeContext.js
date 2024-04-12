import React, {useEffect, createContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {CURRENT_THEME_KEY, themeStorage} from '../storage/themeStorage';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const theme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    const getTheme = () => {
      const isDarkModeValueStorage = themeStorage.getBoolean(CURRENT_THEME_KEY);
      if (isDarkModeValueStorage) {
        setIsDarkMode(isDarkModeValueStorage);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    // set theme to system selected theme
    if (theme) {
      setIsDarkMode(theme === 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    themeStorage.set(CURRENT_THEME_KEY, newMode);
  };

  const useSystemTheme = () => {
    setIsDarkMode(theme === 'dark');
    themeStorage.set(CURRENT_THEME_KEY, theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, useSystemTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
