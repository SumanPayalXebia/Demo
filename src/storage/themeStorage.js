import {MMKV} from 'react-native-mmkv';

export const themeStorage = new MMKV({
  id: 'theme-storage',
});

export const CURRENT_THEME_KEY = 'isDarkMode';
